use rdkafka::producer::{FutureProducer, FutureRecord, Producer};
use rdkafka::ClientConfig;
use std::time::Duration;

fn producer_client() -> FutureProducer {
    let producer: FutureProducer = ClientConfig::new()
        .set("bootstrap.servers", "localhost:9092")
        .create()
        .expect("Producer creation failed");

    producer
}
#[tokio::test]
async fn test_produce_msg() {
    let msg = vec!["A", "B", "C", "D", "E", "F", "G"];
    let mut job_handler = vec![];
    for item in msg.iter() {
        let job = tokio::spawn(async {
            send_msg(item).await;
        });
        job_handler.push(job);
    }

    for job in job_handler.iter_mut() {
        job.await.unwrap();
    }
}

async fn send_msg(item: &str) {
    let producer = producer_client();
    let msg = item;
    let topic = "A";
    for index in 0..100 {
        let key = format!("key-{}", index);
        let msg = format!("{} {}", msg, index);
        match producer
            .send(
                FutureRecord::to(topic).key(&key).payload(&msg),
                Duration::from_secs(0),
            )
            .await
        {
            Ok(delivery) => {
                println!("Sent: {:?}", delivery);
            }
            Err((e, _)) => {
                eprintln!("Failed to send message: {}", e);
            }
        }
    }
}
