//! Compute the version of the application from git tag and short commit sha.

/// Computes the version of the application
pub fn compute() {
    println!("cargo::rustc-env=CARGO_PKG_VERSION=1.2.3");
    println!("cargo::rustc-env=CARGO_PKG_VERSION_MAJOR=1");
    println!("cargo::rustc-env=CARGO_PKG_VERSION_MINOR=2");
    println!("cargo::rustc-env=CARGO_PKG_VERSION_PATCH=3");
    println!("cargo::rustc-env=CARGO_PKG_VERSION_PRE=prod");
}
