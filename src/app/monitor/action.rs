use crate::app::monitor::bean::{DiskDataVo, MonitorInfoVo};
use crate::app::monitor::cache::{CPU_APP_DATA, CPU_CORE_DATA, CPU_DATA, MEM_DATA};
use crate::bean::{BmbpResp, BmbpRespVo};
pub async fn get_monitor_data() -> BmbpResp<BmbpRespVo<MonitorInfoVo>> {
    let monitor_data = MonitorInfoVo{
        cpu: CPU_DATA.read().unwrap().data().clone(),
        cpu_app: CPU_APP_DATA.read().unwrap().data().clone(),
        cpu_core:CPU_CORE_DATA.read().unwrap().iter().clone().into_iter().map(|(k,v)| (k.clone(), v.data().clone())).collect(),
        memory: MEM_DATA.read().unwrap().clone(),
        net: vec![],
        disk: DiskDataVo{
            total: 0,
            used: 0,
            free: 0,
            used_percent: 0.0,
        }
    };
    Ok(BmbpRespVo::<MonitorInfoVo>::new(200, "CPU".to_string(), monitor_data))
}