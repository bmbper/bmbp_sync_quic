use std::collections::HashMap;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct CpuUseDataVo {
    pub label: String,
    pub value: f64,
}

#[derive(Debug)]
pub struct FixedQueue<T> {
    data: Vec<T>,
    capacity: usize,
}
impl<T> FixedQueue<T> {
    pub fn new(capacity: usize) -> Self {
        FixedQueue {
            data: Vec::with_capacity(capacity),
            capacity,
        }
    }

    pub fn push(&mut self, item: T) {
        if self.data.len() == self.capacity {
            self.data.remove(0);
        }
        self.data.push(item);
    }
    pub fn iter(&self) -> impl Iterator<Item=&T> {
        self.data.iter()
    }
    pub fn data(&self) -> &Vec<T> {
        &self.data
    }
}


#[derive(Deserialize, Serialize, Debug,Clone)]
pub struct MemoryDataVo {
    pub total: u64,
    pub used: u64,
    pub free: u64,
    pub used_percent: f64,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct DiskDataVo {
    pub total: u64,
    pub used: u64,
    pub free: u64,
    pub used_percent: f64,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct NetDataVo {
    pub recv_bytes: u64,
    pub send_bytes: u64,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct HostInfoVo {
    pub os: String,
    pub arch: String,
    pub hostname: String,
    pub ip: String,
}


#[derive(Deserialize, Serialize, Debug)]
pub struct MonitorInfoVo {
    pub(crate) cpu: Vec<CpuUseDataVo>,
    pub(crate) cpu_app: Vec<CpuUseDataVo>,
    pub(crate) cpu_core: HashMap<String, Vec<CpuUseDataVo>>,
    pub(crate) memory: MemoryDataVo,
    pub(crate) disk: DiskDataVo,
    pub(crate) net: Vec<NetDataVo>,
}
