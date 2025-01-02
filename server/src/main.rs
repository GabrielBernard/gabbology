use axum::http::Request;
use clap::Parser;
use tower_http::trace::TraceLayer;
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

    let app = gabbology_server::app(args.assets_path);

    axum::serve(
        listener,
        app.layer(
            TraceLayer::new_for_http().on_request(|request: &Request<_>, _span: &Span| {
                tracing::info!("{} {}", request.method(), request.uri())
            }),
        )
        .into_make_service(),
    )
    .await
    .unwrap();
}
