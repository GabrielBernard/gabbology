import Image from "next/image";

export default function Home() {
  return (
    <main className="my-10 flex min-h-screen flex-col items-center px-24 font-sans">
      <div className="z-10 flex w-screen items-end justify-end gap-4 pr-6 sm:w-full sm:max-w-3xl sm:gap-12 sm:p-0 md:items-start md:justify-start">
        <Image
          src="/assets/containers.svg"
          alt="Containers"
          className="h-full w-24 dark:invert md:h-64 md:w-64"
          width={250}
          height={250}
        />
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2">
            <h1 className="py-6 text-3xl font-semibold text-gray-800 dark:text-gray-300">
              Gabbology
            </h1>
            <a
              className="dark:hidden"
              href="https://github.com/GabrielBernard/gabbology"
            >
              <Image
                src="/assets/github-mark/github-mark.svg"
                alt="GitHub Logo"
                className="aspect-square h-6 w-6 hover:rounded-full hover:bg-gray-400 sm:h-8 sm:w-8"
                width={8}
                height={8}
              />
            </a>
            <a
              className="hidden dark:block"
              href="https://github.com/GabrielBernard/gabbology"
            >
              <Image
                src="/assets/github-mark/github-mark-white.svg"
                alt="GitHub Logo"
                className="aspect-square h-6 w-6 hover:rounded-full hover:bg-gray-800 sm:h-8 sm:w-8 "
                width={8}
                height={8}
              />
            </a>
          </div>
          <ul className="list-none self-end text-right text-sky-700 dark:text-sky-600">
            <li>
              <a className="hover:underline" href="https://k3s.io/">
                K3s
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://cert-manager.io/">
                cert-manager
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://letsencrypt.org/">
                Let&apos;s Encrypt
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://www.cloudflare.com/">
                CloudFlare
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://argoproj.github.io/cd/"
              >
                Argo CD
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-screen flex-col justify-center p-6 text-justify font-sans text-gray-800 dark:text-gray-200 sm:w-full sm:max-w-3xl sm:p-0">
        <h2 className="py-6 text-lg text-teal-700 dark:text-teal-500 sm:text-xl">
          What are you seeing?
        </h2>
        <p className="pb-6">
          This page is served by a{" "}
          <a
            href="https://kubernetes.io/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            {" "}
            Kubernetes
          </a>{" "}
          cluster (
          <a
            href="https://k3s.io/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            K3s
          </a>
          ) running on an{" "}
          <a
            href="https://aws.amazon.com/ec2/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            AWS EC2 instance
          </a>
          . The certificate used by the cluster was issued by{" "}
          <a
            href="https://letsencrypt.org/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            Let&apos;s Encrypt
          </a>{" "}
          and is being kept updated by{" "}
          <a
            href="https://cert-manager.io/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            cert-manager
          </a>
          .
        </p>
        <p className="pb-6">
          The goal of this project is to configure a{" "}
          <a
            href="https://kubernetes.io/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            {" "}
            Kubernetes
          </a>{" "}
          environment serving an application with an{" "}
          <a
            href="https://kubernetes.io/docs/concepts/services-networking/ingress/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            Ingress
          </a>{" "}
          using a TLS certificate signed by an officially trusted authority, in
          our case{" "}
          <a
            href="https://letsencrypt.org/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            Let&apos;s Encrypt
          </a>
          .
        </p>
        <p className="pb-6">
          While the learning process of using{" "}
          <a
            href="https://cert-manager.io/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            cert-manager
          </a>{" "}
          to obtain a certificate signed by a trusted entity in itself was the
          goal of the project, it is now used to host a single-page application
          served by a server written in{" "}
          <a
            href="https://www.rust-lang.org/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            Rust
          </a>{" "}
          with the{" "}
          <a
            href="https://github.com/tokio-rs/axum"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            axum crate
          </a>
          . The application is packaged in a container image built automatically
          with{" "}
          <a
            href="https://docs.github.com/en/actions"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            GitHub actions
          </a>
          . The deployement on the cluster is managed by configurations hosted
          in{" "}
          <a
            href="https://github.com/GabrielBernard/gabbology"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            GitHub
          </a>{" "}
          and synchronized with{" "}
          <a
            href="https://argoproj.github.io/cd/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            Argo CD
          </a>
          .
        </p>
        <p className="pb-6">
          The project will grow and will serve as a showcase of my abilities and
          knowledge of{" "}
          <a
            href="https://kubernetes.io/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            Kubernetes
          </a>
          . All the code used for this project is accessible on my{" "}
          <a
            href="https://github.com/GabrielBernard/gabbology"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            personnal GitHub account
          </a>
          .
        </p>
        <Image
          src="/assets/diagram-light.svg"
          alt="Infrastructure Diagram"
          className="aspect-auto pb-6 dark:hidden"
          width={1024}
          height={512}
        />
        <Image
          src="/assets/diagram-dark.svg"
          alt="Infrastructure Diagram"
          className="hidden aspect-auto pb-6 dark:block"
          width={1024}
          height={512}
        />
        <ol className="list-decimal self-center p-6 sm:max-w-2xl sm:p-0">
          <li>
            <a
              href="https://cert-manager.io/"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              cert-manager
            </a>{" "}
            issues a certificate signing request to{" "}
            <a
              href="https://letsencrypt.org/"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              Let&apos;s Encrypt
            </a>
          </li>
          <li>
            <a
              href="https://letsencrypt.org/"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              Let&apos;s Encrypt
            </a>{" "}
            asks for a proof of control with a{" "}
            <a
              href="https://letsencrypt.org/docs/challenge-types/#dns-01-challenge"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              DNS-01 challenge
            </a>
          </li>
          <li>
            <a
              href="https://cert-manager.io/"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              cert-manager
            </a>{" "}
            responds to the challenge using the{" "}
            <a
              href="https://www.cloudflare.com/"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              CloudFlare
            </a>{" "}
            API
          </li>
          <li>
            The signed certificate is used by{" "}
            <a
              href="https://kubernetes.io/"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              Kubernetes
            </a>{" "}
            when serving the application
          </li>
          <li>
            <a
              href="https://www.cloudflare.com/"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              CloudFlare
            </a>{" "}
            proxy requests, using the{" "}
            <a
              href="https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              Full (strict) TLS encryption mode
            </a>
          </li>
          <li>
            Communication with the server is encrypted with trusted certificates
          </li>
        </ol>
      </div>
    </main>
  );
}
