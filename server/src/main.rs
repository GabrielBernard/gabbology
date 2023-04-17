use std::path::PathBuf;

use axum::Router;
use clap::Parser;
use tower_http::services::{ServeDir, ServeFile};

mod cli;

#[tokio::main]
async fn main() {
    let args = cli::Arguments::parse();

    axum::Server::bind(&format!("0.0.0.0:{}", args.port).parse().unwrap())
        .serve(
            using_serve_dir_with_assets_fallback(args.next_path, args.assets_path)
                .into_make_service(),
        )
        .await
        .unwrap();
}

fn using_serve_dir_with_assets_fallback(next_path: PathBuf, assets: PathBuf) -> Router {
    let not_found = ServeFile::new(next_path.join("server/pages/404.html"));

    let serve_next_dir = ServeDir::new(next_path.clone());

    let serve_index = ServeDir::new(next_path.join("server/pages"))
        .append_index_html_on_directories(true)
        .not_found_service(not_found.clone());

    let assets_dir = ServeDir::new(assets.clone());

    let favicon = ServeFile::new(assets.join("favicon.ico"));

    Router::new()
        .nest_service("/", serve_index)
        .nest_service("/assets", assets_dir)
        .nest_service("/_next", serve_next_dir)
        .nest_service("/favicon.ico", favicon)
        .fallback_service(not_found)
}
