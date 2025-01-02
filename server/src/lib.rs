use std::path::PathBuf;

use axum::{routing::get, Router};
use tower_http::services::ServeDir;

pub mod routing;
pub mod templates;

pub fn app(assets: PathBuf) -> Router {
    let assets_dir = ServeDir::new(assets.clone());

    Router::new()
        .route("/", get(routing::about))
        .fallback_service(assets_dir)
}
