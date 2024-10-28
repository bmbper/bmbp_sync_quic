use std::collections::HashMap;
use std::ops::Deref;
use crate::app::manage::topic::bean::BmbpTopic;
use rdkafka::admin::{AdminClient, AdminOptions, NewTopic, TopicReplication};
use rdkafka::client::DefaultClientContext;
use rdkafka::consumer::{CommitMode, Consumer, StreamConsumer};
use rdkafka::error::{KafkaError, KafkaResult, RDKafkaErrorCode};
use rdkafka::{ClientConfig, Message};
use redis::Commands;
use std::time::Duration;
use futures::StreamExt;
use rdkafka::error::RDKafkaErrorCode::UnknownTopic;
use rdkafka::metadata::MetadataTopic;

pub fn consumer_client(group_name: String, server: String) -> KafkaResult<StreamConsumer> {
    ClientConfig::new()
        .set("group.id", group_name)
        .set("bootstrap.servers", server)
        .set("enable.auto.commit", "false")
        .set("auto.offset.reset", "earliest")
        .create()
}
pub fn admin_client(group_name: String, server: String) -> KafkaResult<AdminClient<DefaultClientContext>> {
    ClientConfig::new().set("group.id", group_name)
        .set("bootstrap.servers", server)
        .create()
}
async fn create_topic(admin_client: &AdminClient<DefaultClientContext>, topic: String, partition: i32, replication: i32) -> KafkaResult<usize> {
    match create_topics(admin_client, &[&topic], partition, replication).await {
        Ok(del_result) => {
            if let Some((topic, result, msg)) = del_result.get(0) {
                if *result {
                    Ok(1usize)
                } else {
                    Err(KafkaError::AdminOpCreation(format!("{}:{}", topic, msg.to_string())))
                }
            } else {
                Err(KafkaError::AdminOp(RDKafkaErrorCode::UnknownTopic))
            }
        }
        Err(e) => Err(e)
    }
}
async fn create_topics(admin_client: &AdminClient<DefaultClientContext>, topic: &[&str], partitions: i32, replication: i32) -> KafkaResult<Vec<(String, bool, String)>> {
    let mut topics = vec![];
    for t in topic {
        topics.push(NewTopic::new(t, partitions, TopicReplication::Fixed(replication)));
    }
    match admin_client.create_topics(topics.as_slice(), &AdminOptions::new()).await {
        Ok(results) => {
            let mut create_result = vec![];
            for topic_result in results {
                match topic_result {
                    Ok(topic) => {
                        create_result.push((topic, true, "".to_string()))
                    }
                    Err((topic, err)) => {
                        if err == RDKafkaErrorCode::TopicAlreadyExists {
                            create_result.push((topic, true, "topic already exists".to_string()))
                        } else {
                            create_result.push((topic, false, format!("error:{}", err.to_string())))
                        }
                    }
                }
            }
            Ok(create_result)
        }
        Err(err) => Err(err),
    }
}
async fn query_topics(consumer_client: &StreamConsumer) -> KafkaResult<Vec<BmbpTopic>> {
    let metadata = consumer_client.fetch_metadata(None, Duration::from_secs(5));
    match metadata {
        Ok(md) => {
            let mut topic_vec: Vec<BmbpTopic> = vec![];
            for tme in md.topics() {
                let topic = BmbpTopic {
                    topic_id: tme.name().to_string(),
                    topic_name: tme.name().to_string(),
                    topic_desc: tme.name().to_string(),
                };
                topic_vec.push(topic);
            }
            Ok(topic_vec)
        }
        Err(e) => Err(e)
    }
}
async fn delete_topic(admin_client: &AdminClient<DefaultClientContext>, topic: String) -> KafkaResult<usize> {
    let result = delete_topics(admin_client, &[topic.as_str()]).await;
    match result {
        Ok(del_result) => {
            if let Some((topic, result, msg)) = del_result.get(0) {
                if *result {
                    Ok(1)
                } else {
                    Err(KafkaError::AdminOp(RDKafkaErrorCode::UnknownTopic))
                }
            } else {
                Err(KafkaError::AdminOp(RDKafkaErrorCode::UnknownTopic))
            }
        }
        Err(e) => Err(e)
    }
}
async fn delete_topics(admin_client: &AdminClient<DefaultClientContext>, topics: &[&str]) -> KafkaResult<Vec<(String, bool, String)>> {
    match admin_client.delete_topics(topics, &AdminOptions::new()).await {
        Ok(del_result) => {
            let mut delete_result = vec![];
            for result in del_result {
                match result {
                    Ok(su) => {
                        delete_result.push((su, true, "".to_string()))
                    }
                    Err(err) => {
                        delete_result.push((err.0.to_string(), false, format!("error:{}", err.1.to_string())))
                    }
                }
            }
            Ok(delete_result)
        }
        Err(e) => {
            Err(e)
        }
    }
}
async fn query_topic_msg_count(consumer_client: &StreamConsumer) -> KafkaResult<HashMap<String, i64>> {
    let metadata = consumer_client.fetch_metadata(None, Duration::from_secs(5))?;
    // 遍历所有主题
    let mut topic_count_map = HashMap::new();
    for topic in metadata.topics() {
        let mut topic_msg_count = query_topic_count_by_metadata(consumer_client, topic).await?;
        topic_count_map.insert(topic.name().to_string(), topic_msg_count);
    }
    Ok(topic_count_map)
}
async fn query_topic_msg_count_by_topic(consumer_client: &StreamConsumer, topic_name: String) -> KafkaResult<i64> {
    let metadata = consumer_client.fetch_metadata(None, Duration::from_secs(5))?;
    // 遍历所有主题
    for topic in metadata.topics() {
        if topic_name == topic.name().to_string() {
            return query_topic_count_by_metadata(consumer_client, topic).await;
        }
    }
    Err(KafkaError::AdminOp(UnknownTopic))
}
async fn query_topic_count_by_metadata(consumer_client: &StreamConsumer, topic: &MetadataTopic) -> KafkaResult<i64> {
    let mut topic_msg_count = 0;
    // 遍历每个分区，获取偏移量并计算消息数量
    for partition in topic.partitions() {
        let partition_id = partition.id();
        // 获取每个分区的起始和最新偏移量
        let (low, high) = consumer_client.fetch_watermarks(topic.name(), partition_id, Duration::from_secs(5))?;
        topic_msg_count += high - low;
    }
    Ok(topic_msg_count)
}

pub async fn read_topic<F>(consumer_client: &StreamConsumer, topic_name: &str, callback: F) -> KafkaResult<()>
where
    F: Fn(String, String, String) -> bool,
{
    consumer_client.subscribe(&[topic_name])?;
    loop {
        match consumer_client.recv().await {
            Ok(msg) => {
                let msg_key = match msg.key() {
                    Some(key) => String::from_utf8_lossy(key).to_string(),
                    None => "".to_string(),
                };
                let msg_value = match msg.payload_view::<str>() {
                    Some(Ok(value)) => String::from(value),
                    Some(Err(e)) => {
                        "".to_string()
                    }
                    None => "".to_string(),
                };
                let msg_topic = msg.topic().to_string();
                if callback(msg_topic, msg_key, msg_value) {
                    match consumer_client.commit_message(&msg, CommitMode::Sync) {
                        Ok(_) => {}
                        Err(e) => {
                            // TODO 补救措施
                        }
                    }
                }
            }
            Err(err) => {
                //TODO 补救措施
            }
        }
    }
}

#[cfg(test)]
mod test {
    use crate::app::manage::topic::client::kafka::{admin_client, consumer_client, create_topics, delete_topics, query_topic_msg_count, query_topics, read_topic};
    #[tokio::test]
    pub async fn test_query_all_topic() {
        let consumer_client = consumer_client("example".to_string(), "localhost:9092".to_string());
        match consumer_client {
            Ok(client) => {
                let topics = query_topics(&client).await;
                match topics {
                    Ok(topics) => {
                        println!("{:?}", topics);
                    }
                    Err(e) => {
                        println!("{:?}", e);
                    }
                }
            }
            Err(e) => {
                println!("{:?}", e);
            }
        }
    }
    #[tokio::test]
    pub async fn test_create_topic() {
        let admin_client = admin_client("example".to_string(), "localhost:9092".to_string());
        match admin_client {
            Ok(client) => {
                let result = create_topics(&client, &["test_topic_2"], 1, 1).await;
                match result {
                    Ok(topics) => {
                        println!("{:?}", topics);
                    }
                    Err(e) => {
                        println!("{:?}", e);
                    }
                }
            }
            Err(e) => {
                println!("{:?}", e);
            }
        }
    }
    #[tokio::test]
    pub async fn test_delete_topic() {
        let admin_client = admin_client("example".to_string(), "localhost:9092".to_string());
        match admin_client {
            Ok(client) => {
                let result = delete_topics(&client, &["test_topic_1"]).await;
                match result {
                    Ok(topics) => {
                        println!("{:?}", topics);
                    }
                    Err(e) => {
                        println!("{:?}", e);
                    }
                }
            }
            Err(e) => {
                println!("{:?}", e);
            }
        }
    }

    #[tokio::test]
    pub async fn test_query_topic_count() {
        let consumer_client = consumer_client("example".to_string(), "localhost:9092".to_string());
        match consumer_client {
            Ok(client) => {
                let topics = query_topic_msg_count(&client).await;
                match topics {
                    Ok(topics) => {
                        println!("{:?}", topics);
                    }
                    Err(e) => {
                        println!("{:?}", e);
                    }
                }
            }
            Err(e) => {
                println!("{:?}", e);
            }
        }
    }
    #[tokio::test]
    pub async fn test_read_topic() {
        let consumer_client = consumer_client("example".to_string(), "localhost:9092".to_string());
        let callback = |topic: String, key: String, msg: String| -> bool{
            println!("topic:{},key:{},msg:{}", topic, key, msg);
            true
        };
        match consumer_client {
            Ok(client) => {
                println!("=======>准备订阅消息");
                let result = read_topic(&client, "A", callback).await;
                match result {
                    Ok(_) => {
                        println!("success");
                    }
                    Err(e) => {
                        println!("{:?}", e);
                    }
                }
            }
            Err(e) => {
                println!("{:?}", e);
            }
        }
    }
}