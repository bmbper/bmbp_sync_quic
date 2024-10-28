use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BmbpMenu {
    pub id: String,
    pub id_path: String,
    pub name: String,
    pub name_path: String,
    pub parent_id: String,
    pub url: String,
    pub icon: String,
    pub sort_order: i32,
    pub children: Vec<BmbpMenu>,
}

impl BmbpMenu {
    pub(crate) fn new(id: &str, id_path: &str, name: &str, name_path: &str, parent_id: &str, url: &str, icon: &str, sort_order: i32) -> Self {
        BmbpMenu{
            id: id.to_string(),
            id_path: id_path.to_string(),
            name: name.to_string(),
            name_path: name_path.to_string(),
            parent_id: parent_id.to_string(),
            url: url.to_string(),
            icon: icon.to_string(),
            sort_order,
            children: vec![],
        }
    }
}