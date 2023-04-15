import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-sans">
      <div className="z-10 flex w-screen justify-end gap-12 p-6 sm:w-full sm:max-w-3xl sm:p-0 md:justify-start">
        <Image
          src="/containers.svg"
          alt="Containers"
          className="hidden dark:invert md:block"
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
                src="/github-mark/github-mark.svg"
                alt="GitHub Logo"
                className="aspect-square h-6 w-6 sm:h-8 sm:w-8"
                width={8}
                height={8}
              />
            </a>
            <a
              className="hidden dark:block"
              href="https://github.com/GabrielBernard/gabbology"
            >
              <Image
                src="/github-mark/github-mark-white.svg"
                alt="GitHub Logo"
                className="aspect-square h-6 w-6 sm:h-8 sm:w-8"
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
          </a>
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
          environment serving an application with an Ingress using a TLS
          certificate signed by an officially trusted authority, in our case{" "}
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
          served by the cluster. The project will grow and will serve as a
          showcase of my abilities and knowledge of{" "}
          <a
            href="https://kubernetes.io/"
            className="text-sky-700 hover:underline dark:text-sky-600"
          >
            {" "}
            Kubernetes
          </a>{" "}
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
          src="diagram-light.svg"
          alt="Infrastructure Diagram"
          className="aspect-auto pb-6 dark:hidden"
          width={1024}
          height={512}
        />
        <Image
          src="diagram-dark.svg"
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
            asks for a prof of control with a DNS-01 challenge
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
            The signed certificate is used by Kubernetes when serving the
            application
          </li>
          <li>
            <a
              href="https://www.cloudflare.com/"
              className="text-sky-700 hover:underline dark:text-sky-600"
            >
              CloudFlare
            </a>{" "}
            proxy requests, using the strict trusted certificate policy
          </li>
          <li>
            Client&apos;s communicating with the server can expect full TLS
            encryption
          </li>
        </ol>
      </div>
    </main>
  );
}
