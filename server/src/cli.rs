use std::path::PathBuf;

use clap::Parser;

#[derive(Parser)]
pub struct Arguments {
    #[arg(short, long, env = "ASSETS_PATH")]
    pub assets_path: PathBuf,
    #[arg(short, long, env = "NEXT_PATH")]
    pub next_path: PathBuf,
    #[arg(short, long, env = "PORT", default_value_t = 8000)]
    pub port: u16,
}
