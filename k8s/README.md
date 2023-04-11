# ArgoCD deployment

Kubernetes deployment are made declaratively, using `yaml` manifests to describe the state a deployment and Kubernetes ensuring that the cluster reflects what the user asked. [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) uses this declarative approach to synch Kubernetes deployments directly from Git repositories. This helps maintain a GitOps approach where all the configurations are threated as code, versioned and kept in a Git repository.

## `argocd`

The [`argocd`](./argocd/) folder uses a pattern called [App of apps](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#app-of-apps). It contains an ArgoCD [`application`](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/) with the configuration for ArgoCD to know it needs to track other `applicaiton`s (`cert-manager`)

## `traefik`

The `traefik` folder keeps track of the `HelmChartConfig` manually created and managed by the `k3s` cluster on the `EC2` instance. Unfortunatelly, manual keeping of this is necessary for now, but the configuration is simple enough. It only instructs the [Traefik Ingress Controller](https://doc.traefik.io/traefik/providers/kubernetes-ingress/) to redirect any `http` connections to `https` automatically, and should not change often.
