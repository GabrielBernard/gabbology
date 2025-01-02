//! The website files could be bundled entirely by this build
//! script following steps akin to:
//!
//! - downloading the JavaScript libraries
//! - calling the typescript compiler
//! - calling a JavaScript minifier
//! - invoking the tailwind css compiler
//! - bundling the HTML, JavaScript, and public assets
//!
//! Files could be bundled using a separate bash script,
//! called or not by this build script.
//!
//! Automation could be achieved with something different like [cargo-make](https://sagiegurari.github.io/cargo-make/).
//!
//! The bundled files could be assumed to already exist.
//!
//! That being said, the [Node.js](https://nodejs.org) ecosytstem is
//! omnipresent when discussing web. All technologies assume the use
//! of [Node.js](https://nodejs.org). Dependencies can be managed with
//! `package.json`. A bundle can be made with [vite](https://vite.dev/)
//! or [webpack](https://webpack.js.org/), which will automatically
//! integrate with tailwind css, postcss, TypeScript, including
//! the minification of JavaScript code and libraries.
//!
//! Since the rust build script is "needed" for dynamic versioning with
//! git (because of the need to replace rustc-defined environment variables
//! for it to work) and since bundling the website is as easy as `npm run build`,
//! why not have the rust build script do it directly.

use std::{path::Path, process::Command};

/// Bundles the website's HTML, CSS, JavaScript/TypeScript with tailwindcss
/// and minified JavaScripte libraries using the [Node.js](https://nodejs.org) ecosystem.
pub fn bundle() {
    println!("cargo::rerun-if-changed=../website/assets");
    println!("cargo::rerun-if-changed=../website/src");
    println!("cargo::rerun-if-changed=../website/templates");
    println!("cargo::rerun-if-changed=../website/package-lock.json");
    println!("cargo::rerun-if-changed=../website/postcss.config.js");
    println!("cargo::rerun-if-changed=../website/tailwind.config.js");
    println!("cargo::rerun-if-changed=../website/tsconfig.json");
    println!("cargo::rerun-if-changed=../website/vite.config.js");

    let npm_i = Command::new("npm")
        .args(["install"])
        .current_dir(Path::new("..").join("website"))
        .output()
        .expect("npm install");

    if !npm_i.status.success() {
        panic!("failed to install npm packages")
    }

    let npm_run = Command::new("npm")
        .args(["run", "build"])
        .current_dir(Path::new("..").join("website"))
        .output()
        .expect("npm run build");

    if !npm_run.status.success() {
        panic!("faild to build website bundle")
    }
}
