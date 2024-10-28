use sysinfo::{CpuExt, Pid, PidExt, ProcessExt, System, SystemExt};
use crate::app::monitor::bean::{CpuUseDataVo, FixedQueue};
use crate::app::monitor::cache::{CPU_APP_DATA, CPU_CORE_DATA, CPU_DATA, MEM_DATA};

pub async fn monitor_host() {
    tracing::info!("系统监控启动....");
    tokio::spawn(async {
        monitor_cpu().await;
    });
}
pub async fn monitor_cpu() {
    tracing::info!("cpu监控启动....");
    // 创建一个 System 实例
    let mut system = System::new_all();
    loop {
        // 更新系统信息
        system.refresh_system();
        system.refresh_cpu();
        let utc_time = chrono::Utc::now().format("%M:%S").to_string();
        // 总CPU信息
        let total_cpu_usage = system.global_cpu_info().cpu_usage();
        CPU_DATA.write().unwrap().push(CpuUseDataVo { label: utc_time.clone(), value: total_cpu_usage as f64 });
        // 每个 CPU 信息
        for (cpu_id, cpu) in system.cpus().iter().enumerate() {
            let cpu_usage = cpu.cpu_usage();
            let key = cpu_id.to_string();
            if !CPU_CORE_DATA.read().unwrap().contains_key(&key) {
                CPU_CORE_DATA.write().unwrap().insert(key.clone(), FixedQueue::new(30));
            }
            CPU_CORE_DATA.write().unwrap().get_mut(&key).unwrap().push(CpuUseDataVo { label: utc_time.clone(), value: cpu_usage as f64 });
        }
        // 当前应用CPU信息
        let process_id = std::process::id();
        system.refresh_process(Pid::from_u32(process_id));
        let process_cpu_usage = system.process(Pid::from_u32(process_id)).unwrap();
        CPU_APP_DATA.write().unwrap().push(CpuUseDataVo { label: utc_time.clone(), value: process_cpu_usage.cpu_usage() as f64 });

        // 当前内存信息
        let total_memory = system.total_memory();
        let free_memory = system.free_memory();
        let used_memory = system.used_memory();
        MEM_DATA.write().unwrap().total = total_memory;
        MEM_DATA.write().unwrap().used = used_memory;
        MEM_DATA.write().unwrap().free = free_memory;
        MEM_DATA.write().unwrap().used_percent = (used_memory as f64 / total_memory as f64) * 100.0;
        // 等待 1 秒钟
        tokio::time::sleep(tokio::time::Duration::from_millis(1000)).await;
    }
}