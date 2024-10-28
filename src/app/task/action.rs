use rdkafka::error::KafkaResult;
use crate::app::manage::{consumer_client, read_topic};
use crate::bean::{BmbpDataError, BmbpResp, BmbpRespVo};

pub async fn read_topic_action() -> BmbpResp<BmbpRespVo<String>> {
    let topic_name = "A";
    match consumer_client("test".to_string(), "127.0.0.1:9092".to_string()) {
        Ok(client) => {
            let callback = |name: String, key: String, msg: String|->bool {
                println!("data:{}", msg);
                return true;
            };
            let topic_data = read_topic(&client, topic_name, callback).await;
        }
        Err(e) => {
            return Err(BmbpDataError::new(e.to_string()).into());
        }
    }
    Ok(BmbpRespVo::new(200, "success".to_string(), "2222".to_string()))
}