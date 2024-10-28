use std::collections::HashMap;
use std::sync::{LazyLock, RwLock};
use crate::app::monitor::bean::{CpuUseDataVo, FixedQueue, MemoryDataVo};

pub static  CPU_DATA: LazyLock<RwLock<FixedQueue<CpuUseDataVo>>> = LazyLock::new(|| {
    RwLock::new(FixedQueue::new(30))
});

pub static CPU_CORE_DATA: LazyLock<RwLock<HashMap<String, FixedQueue<CpuUseDataVo>>>> = LazyLock::new(|| {
    let mut map: HashMap<String, FixedQueue<CpuUseDataVo>> = HashMap::new();
    RwLock::new(map)
});
pub static CPU_APP_DATA: LazyLock<RwLock<FixedQueue<CpuUseDataVo>>> = LazyLock::new(|| {
    RwLock::new(FixedQueue::new(30))
});

pub static MEM_DATA: LazyLock<RwLock<MemoryDataVo>> = LazyLock::new(|| {
    RwLock::new(MemoryDataVo{
        total: 0,
        used: 0,
        free: 0,
        used_percent: 0.0,
    })
});