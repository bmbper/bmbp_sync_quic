use axum::{response, Json};
use crate::key::bean::{KeyReq, RespVo};

pub async fn keyword(Json(req): Json<KeyReq>) -> Json<RespVo> {
    let text = req.text.clone();
    tracing::info!("请求分词的内容为:===={}",text);
    let resp = RespVo {
        code: "0".to_string(),
        msg: "success".to_string(),
        data: vec!["测试分词".to_string(),text],
    };
    Json(resp)
}
pub async fn keyword_synonym(Json(req): Json<KeyReq>) -> Json<RespVo> {
    let text = req.text.clone();
    tracing::info!("请求分词的内容为:==近义词=={}",text);
    let resp = RespVo {
        code: "0".to_string(),
        msg: "success".to_string(),
        data: vec!["测试分词近义词".to_string(),text],
    };
    Json(resp)
}