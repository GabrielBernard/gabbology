//! The versioning of the gabbology-server is determined
//! dynamically by fetching a git tag or defaulting to using
//! the development branch name and short commit hash. To do
//! this without modifying the Cargo.toml file, a build.rs
//! script must change the rustc environment variables:
//!
//! - `CARGO_PKG_VERSION``
//! - `CARGO_PKG_VERSION_MAJOR`
//! - `CARGO_PKG_VERSION_MINOR`
//! - `CARGO_PKG_VERSION_PATCH`
//! - `CARGO_PKG_VERSION_PRE`

use std::process::Command;

/// Compute the version of the application from git tag and short commit sha.
pub fn compute() {
    println!("cargo::rerun-if-changed=../.git");

    let version = git_tag().unwrap_or_else(dev_version);

    println!("cargo::rustc-env=CARGO_PKG_VERSION={}", version);
    println!("cargo::rustc-env=CARGO_PKG_VERSION_MAJOR={}", version.major);
    println!("cargo::rustc-env=CARGO_PKG_VERSION_MINOR={}", version.minor);
    println!("cargo::rustc-env=CARGO_PKG_VERSION_PATCH={}", version.patch);
    println!("cargo::rustc-env=CARGO_PKG_VERSION_PRE={}", version.pre);
}

fn git_tag() -> Option<semver::Version> {
    let git_tag = Command::new("git")
        .args(["describe", "--exact-match", "--tags"])
        .output()
        .expect("git describe --exact-match --tags");

    if !git_tag.status.success() && !git_tag.stdout.starts_with(b"v") {
        return None;
    }

    let version = &git_tag.stdout[1..];
    let version = String::from_utf8_lossy(version);

    semver::Version::parse(version.trim()).ok()
}

fn dev_version() -> semver::Version {
    let git_short_hash = Command::new("git")
        .args(["rev-parse", "--short", "HEAD"])
        .output()
        .expect("git rev-parse --short HEAD");
    assert!(matches!(git_short_hash.status.code(), Some(0)));
    let git_short_hash = String::from_utf8_lossy(&git_short_hash.stdout);

    let git_branch = Command::new("git")
        .args(["rev-parse", "--abbrev-ref", "HEAD"])
        .output()
        .expect("git rev-parse --abbrev-ref HEAD");
    assert!(matches!(git_branch.status.code(), Some(0)));
    let git_branch = String::from_utf8_lossy(&git_branch.stdout);

    let mut version = semver::Version::new(0, 0, 0);
    version.pre =
        semver::Prerelease::new(&format!("{}-{}", git_branch.trim(), git_short_hash.trim()))
            .expect("prerelease");

    version
}
