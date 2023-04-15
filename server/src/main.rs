use axum::Router;
use tower_http::services::{ServeDir, ServeFile};

#[tokio::main]
async fn main() {
    axum::Server::bind(&"0.0.0.0:8000".parse().unwrap())
        .serve(using_serve_dir_with_assets_fallback().into_make_service())
        .await
        .unwrap();
}

fn using_serve_dir_with_assets_fallback() -> Router {
    let not_found = ServeFile::new("../app/.next/server/pages/404.html");

    let serve_next_dir = ServeDir::new("../app/.next");

    let serve_index = ServeDir::new("../app/.next/server/pages")
        .append_index_html_on_directories(true)
        .not_found_service(not_found.clone());

    let assets_dir = ServeDir::new("../app/public/assets");

    let favicon = ServeFile::new("../app/public/favicon.ico");

    Router::new()
        .nest_service("/", serve_index)
        .nest_service("/assets", assets_dir)
        .nest_service("/_next", serve_next_dir)
        .nest_service("/favicon.ico", favicon)
        .fallback_service(not_found)
}
