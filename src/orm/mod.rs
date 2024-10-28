use std::sync::LazyLock;
use r2d2::Pool;
use r2d2_sqlite::SqliteConnectionManager;

pub static ORM_POOL:LazyLock<Pool<SqliteConnectionManager>> = LazyLock::new(||{
    let manager = SqliteConnectionManager::file("bmbp_msg.db");
    let poo_rs = Pool::new(manager);
    match poo_rs{
        Ok(pool)=>pool,
        Err(e)=>panic!("{}",e)
    }
});