use axum::{Router, ServiceExt};
use axum::routing::{get, get_service, post};
use crate::index::root;
use tracing_subscriber;
use tracing_subscriber::fmt::init;
use key::keyword;
use crate::init::{handle_error, serve_static};
use app::manage::build_route;
use app::view::index_view;
use crate::app::init_app;

mod index;
mod key;
mod init;
mod rbac;
mod orm;
mod app;
mod bean;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt().with_env_filter("info").init();
    init_app().await;
    let mut app_router = Router::new()
        .route("/static/*path", get(serve_static))
        .route("/keyword", post(keyword::keyword))
        .route("/keyword/synonym", post(keyword::keyword_synonym));
    app_router = app_router.merge(build_route());
    let listener = tokio::net::TcpListener::bind("0.0.0.0:40002").await.unwrap();
    tracing::info!("run app....");
    axum::serve(listener, app_router).await.unwrap();
}