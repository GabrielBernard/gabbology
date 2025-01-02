use std::path::PathBuf;

use gabbology_server::TestTemplate;

use axum::{http::Request, response::IntoResponse, routing::get, Router};
use clap::Parser;
use tower_http::{services::ServeDir, trace::TraceLayer};
use tracing::Span;
use tracing_subscriber::{prelude::__tracing_subscriber_SubscriberExt, util::SubscriberInitExt};

mod cli;

const ENV_LOG: &str = "GABBOLOGY_LOG";

#[tokio::main]
async fn main() {
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
    let assets_dir = ServeDir::new(assets.clone());

    Router::new()
        .route("/", get(test))
        .fallback_service(assets_dir)
}

async fn test() -> impl IntoResponse {
    let t = TestTemplate {};

    askama_axum::IntoResponse::into_response(t)
}
