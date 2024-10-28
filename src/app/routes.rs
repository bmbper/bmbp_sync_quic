use axum::Router;
use axum::routing::{get};
use crate::app::monitor::{get_monitor_data};
use crate::app::view::{config_datasource_view, config_kafka_view, history_table_view, history_topic_view, home_view, index_view, manage_table_view, manage_topic_view, monitor_table_view, monitor_topic_view, report_table_view, report_topic_view, root_view, task_monitor_view, task_task_view};
pub fn build_route() -> Router {
    let mut router = Router::new();
    router = router
        .route("/", get(root_view))
        .route("/home.view", get(home_view))
        .route("/index.view", get(index_view))
        .route("/config/kafka/index.view", get(config_kafka_view))
        .route("/config/datasource/index.view", get(config_datasource_view))
        .route("/manage/topic/index.view", get(manage_topic_view))
        .route("/manage/table/index.view", get(manage_table_view))
        .route("/task/task/index.view", get(task_task_view))
        .route("/task/monitor/index.view", get(task_monitor_view))
        .route("/report/table/index.view", get(report_table_view))
        .route("/report/topic/index.view", get(report_topic_view))
        .route("/history/topic/index.view", get(history_topic_view))
        .route("/history/table/index.view", get(history_table_view))
        .route("/monitor/table/index.view", get(monitor_table_view))
        .route("/monitor/topic/index.view", get(monitor_topic_view))
        .route("/monitor/host", get(get_monitor_data));
    router
}