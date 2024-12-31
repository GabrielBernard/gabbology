use std::path::PathBuf;

use axum::{http::Request, Router};
use clap::Parser;
use tower_http::{services::ServeDir, trace::TraceLayer};
use tracing::Span;
use tracing_subscriber::{prelude::__tracing_subscriber_SubscriberExt, util::SubscriberInitExt};

mod cli;

const ENV_LOG: &str = "GABBOLOGY_LOG";

#[tokio::main]
async fn main() {
    // println!("{}", env!("CARGO_PKG_VERSION"));
    // println!("{}", env!("CARGO_PKG_VERSION_MAJOR"));
    // println!("{}", env!("CARGO_PKG_VERSION_MINOR"));
    // println!("{}", env!("CARGO_PKG_VERSION_PATCH"));
    // println!("{}", env!("CARGO_PKG_VERSION_PRE"));
    let args = cli::Arguments::parse();

    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_env(ENV_LOG)
                .unwrap_or_else(|_| "gabbology_server=info,tower_http=info".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    tracing::info!("listening on port {}", args.port);

    let listener = tokio::net::TcpListener::bind(&format!("0.0.0.0:{}", args.port))
        .await
        .unwrap();

    axum::serve(
        listener,
        using_serve_dir_with_assets_fallback(args.assets_path)
            .layer(
                TraceLayer::new_for_http().on_request(|request: &Request<_>, _span: &Span| {
                    tracing::info!("{} {}", request.method(), request.uri())
                }),
            )
            .into_make_service(),
    )
    .await
    .unwrap();
}

fn using_serve_dir_with_assets_fallback(assets: PathBuf) -> Router {
    // let not_found = ServeFile::new(next_path.join("server/pages/404.html"));

    // let serve_next_dir = ServeDir::new(next_path.clone());

    // let serve_index = ServeDir::new(next_path.join("server/pages"))
    //     .append_index_html_on_directories(true)
    //     .not_found_service(not_found.clone());

    let assets_dir = ServeDir::new(assets.clone()).append_index_html_on_directories(true);

    // let favicon = ServeFile::new(assets.join("favicon.ico"));

    Router::new().nest_service("/", assets_dir)
    // .nest_service("/assets", assets_dir)
    // .nest_service("/_next", serve_next_dir)
    // .nest_service("/favicon.ico", favicon)
    // .fallback_service(not_found)
}
