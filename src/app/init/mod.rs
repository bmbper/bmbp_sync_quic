use std::error::Error;
use axum::http::header::HOST;
use futures::future::ok;
use mime_guess::mime::TEXT;
use r2d2::PooledConnection;
use r2d2_sqlite::SqliteConnectionManager;
use crate::app::init::ctx::{BMBP_MSG_SOURCE_TABLE, BMBP_MSG_TARGET_TABLE};
use crate::app::monitor_host;
use crate::orm::ORM_POOL;

pub mod ctx;

pub async fn init_app() {
    /// init_database
    match init_database() {
        Ok(_) => {
            tracing::info!("数据库初始化成功！")
        }
        Err(e) => {
            tracing::error!("数据库初始化失败：{}",e.to_string())
        }
    }
    monitor_host().await;
}

fn init_database() -> Result<(), String> {
    let create_table_sql = build_init_table_sql();
    match ORM_POOL.get() {
        Ok(conn) => {
            for item in create_table_sql.iter() {
                let ex_rs = match conn.execute(item, []) {
                    Ok(v) => {
                        Ok(())
                    }
                    Err(e) => {
                        Err(e.to_string())
                    }
                };
                if ex_rs.is_err() {
                    return Err(ex_rs.err().unwrap());
                }
            }
            tracing::info!("数据库初始化成功！");
            Ok(())
        }
        Err(e) => Err(e.to_string())
    }
}

fn build_init_table_sql() -> Vec<String> {
    let mut init_vec = vec![];
    init_vec.push(build_bmbp_msg_source_table());
    init_vec.push(build_bmbp_msg_target_table());
    init_vec
}

fn build_bmbp_msg_target_table() -> String {
    format!("
     CREATE TABLE IF NOT EXISTS {} (
        ID TEXT PRIMARY KEY,
        HOST TEXT NOT NULL,
        PORT INTEGER NOT NULL,
        USER TEXT,
        PASSWORD TEXT,
        SCHEMA_ TEXT
    )", BMBP_MSG_TARGET_TABLE)
}

fn build_bmbp_msg_source_table() -> String {
    format!("
    CREATE TABLE IF NOT EXISTS {} (
        ID TEXT PRIMARY KEY,
        HOST TEXT NOT NULL,
        PORT INTEGER NOT NULL,
        USER TEXT,
        PASSWORD TEXT,
        APIKEY TEXT
    )
    ", BMBP_MSG_SOURCE_TABLE)
}