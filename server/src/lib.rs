use std::path::PathBuf;

use axum::{routing::get, Router};
use tower_http::services::ServeDir;

pub mod routing;
pub mod templates;

pub fn app(assets: PathBuf) -> Router {
    let assets_dir = ServeDir::new(assets.clone());

    Router::new()
        .route("/", get(routing::index))
        .route("/about/description", get(routing::about_description))
        .route("/about/technologies", get(routing::about_technologies))
        .fallback_service(assets_dir)
}
