import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-sans">
      <div className="z-10 flex w-full max-w-3xl justify-end gap-12 md:justify-start">
        <Image
          src="/containers.svg"
          alt="Containers Logo"
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
      <div className="max-w-3xl text-justify font-sans text-gray-800 dark:text-gray-200">
        <h2 className="py-8 text-lg text-teal-700 dark:text-teal-500 sm:text-xl">
          What are you seeing?
        </h2>
        <p className="pb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
          tristique senectus et netus et malesuada. Diam volutpat commodo sed
          egestas egestas fringilla phasellus faucibus. Suscipit tellus mauris a
          diam maecenas sed enim ut sem. Consequat id porta nibh venenatis cras
          sed felis. Sed id semper risus in hendrerit gravida rutrum quisque
          non. A arcu cursus vitae congue mauris rhoncus aenean. Diam vulputate
          ut pharetra sit amet aliquam id diam maecenas. Pretium quam vulputate
          dignissim suspendisse in est ante. Maecenas sed enim ut sem viverra.
          Ultricies mi eget mauris pharetra et. Dis parturient montes nascetur
          ridiculus mus mauris vitae ultricies. Aliquam nulla facilisi cras
          fermentum. Justo donec enim diam vulputate. Augue neque gravida in
          fermentum. Faucibus et molestie ac feugiat sed. Sollicitudin nibh sit
          amet commodo. Ac turpis egestas sed tempus urna et pharetra. Vel
          pharetra vel turpis nunc. Posuere urna nec tincidunt praesent semper
          feugiat nibh sed.
        </p>
        <h2 className="py-8 text-xl text-teal-700 dark:text-teal-500">
          What are you seeing?
        </h2>
        <p className="pb-12">
          Scelerisque in dictum non consectetur a erat nam at. Etiam dignissim
          diam quis enim lobortis. Rhoncus est pellentesque elit ullamcorper.
          Neque vitae tempus quam pellentesque nec. Quam id leo in vitae turpis.
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim. Nunc aliquet bibendum enim facilisis gravida neque
          convallis. Egestas sed sed risus pretium quam. Bibendum enim facilisis
          gravida neque convallis a. Pellentesque diam volutpat commodo sed.
          Luctus venenatis lectus magna fringilla. Lorem dolor sed viverra ipsum
          nunc aliquet bibendum enim facilisis. Pulvinar pellentesque habitant
          morbi tristique senectus et. Montes nascetur ridiculus mus mauris.
          Urna id volutpat lacus laoreet non. Vel eros donec ac odio tempor orci
          dapibus. Semper eget duis at tellus at urna.
        </p>
      </div>

      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
