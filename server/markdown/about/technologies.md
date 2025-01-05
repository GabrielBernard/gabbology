1. [cert-manager](https://cert-manager.io/) issues a certificate signing request to [Let's Encrypt](https://letsencrypt.org/)
2. [Let's Encrypt](https://letsencrypt.org/) asks for a proof of control with a [DNS-01 challenge](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge)
3. [cert-manager](https://cert-manager.io/) responds to the challenge using the [CloudFlare](https://www.cloudflare.com/) API
4. The signed certificate is used by [Kubernetes](https://kubernetes.io/) when serving the application
5. [CloudFlare](https://www.cloudflare.com/) proxy requests, using the [Full (strict) TLS encryption mode](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/)
6. Communication with the server is encrypted with trusted certificates
