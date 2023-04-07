# gabbology

This repository comprises of:

- [server](server/), a simple web server written in Rust
- [app](app/) a single-page application writtein in React
- [docker](docker/) for the creation of the containerized application
- [k8s](k8s/) the configuration as code for the deployment in Kubernetes

The application's domain name will be [gabbology.com](gabbology.com), bought and managed by [Cloudflare](https://www.cloudflare.com/). [cert-manager](https://cert-manager.io/) and [Let's Encrypt](https://letsencrypt.org/) will be used to generate and upgrade the TLS certificates of the website.

The application will be hosted with [k3s](https://k3s.io/) on a small [EC2](https://aws.amazon.com/ec2/) instance. The principal component will be a [Rust](https://www.rust-lang.org/) web server using the [axum](https://github.com/tokio-rs/axum) framework. The single-page application is written in [TypeScript](https://www.typescriptlang.org/) using the [React](https://react.dev/) framework. Finally, the application will be packaged as a [container](https://www.docker.com/).

The deployment will be automatically managed by [ArgoCD](https://argo-cd.readthedocs.io/en/stable/), synched from the appropriate repositories in GitHub.
