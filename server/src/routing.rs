use axum::response::IntoResponse;

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

pub async fn about() -> impl IntoResponse {
    let t = AboutTemplate {
        technologies: TECHNOLOGIES,
        version: env!("CARGO_PKG_VERSION"),
    };

    askama_axum::IntoResponse::into_response(t)
}
