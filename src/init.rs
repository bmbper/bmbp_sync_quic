use axum::body::Body;
use axum::{
   http::{header, Response, StatusCode, Uri},
   response::IntoResponse
};
use once_cell::sync::Lazy;
use rust_embed::RustEmbed;
use tera::Tera;
use tower::ServiceExt;
#[derive(RustEmbed)]
#[folder = "web/template/"]
struct TemplateAsset;
pub(crate) static DAMP_TERA: Lazy<Tera> = Lazy::new(|| {
   let mut tera = Tera::default();
   // 加载嵌入的模板文件
   for file in TemplateAsset::iter() {
      if let Some(content) = TemplateAsset::get(file.as_ref()) {
         let content_str = std::str::from_utf8(content.data.as_ref()).expect("读取模板内容失败");
         tera.add_raw_template(file.as_ref(), content_str)
             .expect("加载模板内容到模板引擎失败");
      }
   }
   tera.autoescape_on(vec![]);
   tera
});


#[derive(RustEmbed)]
#[folder = "web/static/"]
struct WebAsset;
pub async fn serve_static(uri: Uri) -> Result<impl IntoResponse, StatusCode> {
   let path = uri.path().trim_start_matches("/static/");
   if let Some(content) = WebAsset::get(path) {
      let body = Body::from(content.data);
      let mime_type = mime_guess::from_path(path).first_or_octet_stream();
      let response = Response::builder()
          .header(header::CONTENT_TYPE, mime_type.as_ref())
          .body(body)  // Use `Body` instead of `Bytes`
          .unwrap();
      Ok(response)
   } else {
      Err(StatusCode::NOT_FOUND)
   }
}

pub async fn handle_error(_error: std::io::Error) -> impl IntoResponse {
   (StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error")
}