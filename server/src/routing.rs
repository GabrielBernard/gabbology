use axum::response::{Html, IntoResponse};

use crate::templates::{AboutTemplate, Technology};

const TECHNOLOGIES: &[Technology] = &[
    Technology {
        href: "https://k3s.io/",
        name: "K3s",
    },
    Technology {
        href: "https://cert-manager.io/",
        name: "cert-manager",
    },
    Technology {
        href: "https://letsencrypt.org/",
        name: "Let's Encrypt",
    },
    Technology {
        href: "https://www.cloudflare.com/",
        name: "CloudFlare",
    },
    Technology {
        href: "https://argoproj.github.io/cd/",
        name: "Argo CD",
    },
];

pub async fn index() -> impl IntoResponse {
    let t = AboutTemplate {
        technologies: TECHNOLOGIES,
        version: env!("CARGO_PKG_VERSION"),
    };

    askama_axum::IntoResponse::into_response(t)
}

const ABOUT_DESCRIPTION_MD: &str = include_str!("../markdown/about/description.md");

pub async fn about_description() -> Html<String> {
    // Set up options and parser. Strikethroughs are not part of the CommonMark standard
    // and we therefore must enable it explicitly.
    let mut options = pulldown_cmark::Options::empty();
    options.insert(pulldown_cmark::Options::ENABLE_STRIKETHROUGH);
    let parser = pulldown_cmark::Parser::new_ext(ABOUT_DESCRIPTION_MD, options);

    // Write to String buffer.
    let mut html_output = String::new();
    pulldown_cmark::html::push_html(&mut html_output, parser);

    Html(html_output)
}

const ABOUT_TECHNOLOGIES_MD: &str = include_str!("../markdown/about/technologies.md");

pub async fn about_technologies() -> Html<String> {
    // Set up options and parser. Strikethroughs are not part of the CommonMark standard
    // and we therefore must enable it explicitly.
    let mut options = pulldown_cmark::Options::empty();
    options.insert(pulldown_cmark::Options::ENABLE_STRIKETHROUGH);
    let parser = pulldown_cmark::Parser::new_ext(ABOUT_TECHNOLOGIES_MD, options);

    // Write to String buffer.
    let mut html_output = String::new();
    pulldown_cmark::html::push_html(&mut html_output, parser);

    Html(html_output)
}
