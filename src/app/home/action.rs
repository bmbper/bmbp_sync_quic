use uuid::uuid;
use crate::app::home::bean::BmbpMenu;

pub async fn get_app_menu() -> Vec<BmbpMenu> {
    let index_menu = BmbpMenu::new("1", "1", "服务端配置", "服务端配置", "#", "/index.view", "", 0);
    let setting_menu = BmbpMenu::new("2", "2", "客户端管理", "客户端管理", "#", "#", "", 1);
    let mut task_menu = BmbpMenu::new("4", "4", "任务管理", "任务管理", "#", "#", "", 3);
    let task_list_menu = BmbpMenu::new("4-1", "4-1", "任务列表", "任务管理/任务列表", "4", "/task/task/index.view", "", 0);
    let task_monitor_menu = BmbpMenu::new("4-2", "4-2", "任务监控", "任务管理/任务监控", "4", "/task/monitor/index.view", "", 1);
    task_menu.children = vec![task_list_menu, task_monitor_menu];
    let mut report_menu = BmbpMenu::new("5", "5", "统计报表", "统计报表", "#", "#", "", 4);
    let report_topic_menu = BmbpMenu::new("5-1", "5-1", "文件传输", "统计报表/文件传输", "5", "/report/topic/index.view", "", 0);
    report_menu.children = vec![report_topic_menu];
    let mut history_menu = BmbpMenu::new("6", "6", "历史数据", "历史数据", "#", "#", "", 5);
    let history_topic_menu = BmbpMenu::new("6-1", "6-1", "文件历史", "历史数据/文件历史", "6", "/history/topic/index.view", "", 0);
    history_menu.children = vec![history_topic_menu];
    let mut monitor_menu = BmbpMenu::new("7", "7", "资源监控", "资源监控", "#", "#", "", 6);
    let monitor_system_menu = BmbpMenu::new("7-1", "7-1", "传输监控", "资源监控/传输监控", "7", "/monitor/topic/index.view", "", 0);
    monitor_menu.children = vec![monitor_system_menu];
    vec![index_menu, setting_menu, task_menu, report_menu, history_menu, monitor_menu]
}