use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct BmbpTopic {
    pub topic_id: String,
    pub topic_name: String,
    pub topic_desc: String,
}