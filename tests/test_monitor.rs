use sysinfo::{CpuExt, System, SystemExt};

#[test]
pub fn test_cpu() {
    let mut system = System::new_all();

    // 更新系统信息
    system.refresh_all();

    // 打印 CPU 信息
    for (i, cpu) in system.cpus().iter().enumerate() {
        println!("CPU {}: {}", i, cpu.name());
        println!("  Frequency: {} MHz", cpu.frequency());
        println!("  Vendor ID: {}", cpu.vendor_id());
        println!("  Brand: {}", cpu.brand());
        println!("  Usage: {:.2}%", cpu.cpu_usage());
    }
}