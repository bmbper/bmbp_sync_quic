use axum::response::{IntoResponse, Response};
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct BmbpRespVo<T>
where
    T: Serialize,
{
    pub code: i32,
    pub msg: String,
    pub data: T,
}
impl<T> BmbpRespVo<T>
where
    T: Serialize,
{
    pub fn new(code: i32, msg: String, data: T) -> Self {
        BmbpRespVo {
            code,
            msg,
            data,
        }
    }
}

impl<T> IntoResponse for BmbpRespVo<T>
where
    T: Serialize,
{
    fn into_response(self) -> Response {
        let json_str = serde_json::to_string(&self).unwrap();
        json_str.into_response()
    }
}
#[derive(Serialize, Deserialize, Clone)]
pub struct BmbpDataError {
    msg: String,
    kind: BmbpErrorKind,
}

#[derive(Default, Debug, PartialEq, Deserialize, Serialize, Clone)]
#[serde(untagged)]
pub enum BmbpErrorKind {
    #[default]
    OTHER,
}
impl BmbpDataError {
    pub fn new(msg: String) -> Self {
        BmbpDataError { msg, kind: Default::default() }
    }
}
impl IntoResponse for BmbpDataError {
    fn into_response(self) -> Response {
        BmbpRespVo {
            code: -1,
            msg: self.msg,
            data: "".to_string(),
        }.into_response()
    }
}
impl From<String> for BmbpDataError {
    fn from(value: String) -> Self {
        BmbpDataError::new(value)
    }
}

pub type BmbpResp<T> = Result<T, BmbpDataError>;

