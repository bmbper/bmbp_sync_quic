mod history;
mod home;
pub mod manage;
mod setting;
mod report;
pub mod view;
mod routes;
mod task;
mod init;
mod monitor;

pub use init::init_app;
pub use monitor::monitor_host;