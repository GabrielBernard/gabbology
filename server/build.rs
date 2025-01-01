//! Automates the versioning and packaging of the application.
//!
//! gabbology-server is a simple axum http server. It serves
//! the static files for a website that is built with the
//! Node ecosystem, see the website folder of this project.

#[path = "build/version.rs"]
mod version;
#[path = "build/website.rs"]
mod website;

fn main() {
    println!("cargo:rerun-if-changed=build.rs");
    println!("cargo:rerun-if-changed=Cargo.lock");

    version::compute();
    website::bundle();
}
