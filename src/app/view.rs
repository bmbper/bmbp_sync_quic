use axum::response::{Html, IntoResponse, Redirect};
use futures::future::err;
use serde_json::Value;
use tera::Context;
use crate::app::home::get_app_menu;
use crate::bean::{BmbpDataError, BmbpResp, BmbpRespVo};
use crate::init::DAMP_TERA;

pub async fn root_view() -> Redirect {
    Redirect::to("/home.view")
}
pub async fn index_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/home/index.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn home_view() -> impl IntoResponse {
    let mut ctx = Context::new();
    ctx.insert("AppTitle", "消息同步工具");
    ctx.insert("AppIcon", "/static/img/app.png");
    ctx.insert("AppVersion", "0.0.1");
    ctx.insert("AppDesc", "基于kafka的消息同步工具");
    ctx.insert("AppCopyright", "Copyright © 2023 bmbp");
    let app_menu = get_app_menu().await;
    ctx.insert("AppMenuData", &serde_json::to_string(&app_menu).unwrap_or("[]".to_string()));
    match DAMP_TERA.render("app/home/home.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn config_kafka_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/config/kafka.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn config_datasource_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/config/datasource.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn manage_topic_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/manage/topic.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn manage_table_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/manage/table.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn task_task_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/task/task.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn task_monitor_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/task/monitor.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn report_topic_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/report/topic.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn report_table_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/report/table.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            eprintln!("Template rendering error: {}", err);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "Internal Server Error").into_response()
        }
    }
}
pub async fn history_table_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/history/table.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, err.to_string()).into_response()
        }
    }
}
pub async fn history_topic_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/history/topic.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, err.to_string()).into_response()
        }
    }
}
pub async fn monitor_table_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/monitor/table.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, err.to_string()).into_response()
        }
    }
}
pub async fn monitor_topic_view() -> impl IntoResponse {
    let ctx = Context::new();
    match DAMP_TERA.render("app/monitor/topic.html", &ctx) {
        Ok(html) => Html(html).into_response(),
        Err(err) => {
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, err.to_string()).into_response()
        }
    }
}