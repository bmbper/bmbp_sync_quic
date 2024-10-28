use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize,Serialize,Clone)]
pub struct KeyReq{
    pub(crate) text: String,
}

#[derive(Debug, Deserialize,Serialize,Clone)]
pub struct RespVo{
    pub(crate) code: String,
    pub(crate) data: Vec<String>,
    pub(crate) msg: String
}