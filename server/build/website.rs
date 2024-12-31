//! Package the website with tailwindcss and minified JavaScripte libraries.

use std::{path::Path, process::Command};

pub fn package() {
    Command::new("npm")
        .args(["run", "build"])
        .current_dir(Path::new("..").join("website"))
        .status()
        .expect("should have compiled the website");
}
