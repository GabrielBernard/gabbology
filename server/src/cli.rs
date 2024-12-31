use std::path::PathBuf;

use clap::Parser;

#[derive(Parser)]
#[command(version, about)]
/// Serves the static files and API of the gabbology.com website
pub struct Arguments {
    #[arg(short, long, env = "GABBOLOGY_SERVER_ASSETS_PATH")]
    /// Path to the assets folder for static serving
    pub assets_path: PathBuf,
    #[arg(short, long, env = "GABBOLOGY_SERVER_PORT", default_value_t = 8000)]
    /// Port the server listens on for incoming requests
    pub port: u16,
}
