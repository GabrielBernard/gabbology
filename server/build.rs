#[path = "build/version.rs"]
mod version;
#[path = "build/website.rs"]
mod website;

fn main() {
    version::compute();
    website::package();
}
