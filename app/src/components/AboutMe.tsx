export default function AboutMe() {
  return (
    <section className='text-davys_gray-100 dark:text-davys_gray-900 ring-platinum-900/5 px-6 pb-8 pt-4 shadow-xl ring-1 sm:mx-auto sm:max-w-4xl sm:rounded-lg sm:px-10'>
      <h1 className='text-platinum-100 py-4 text-xl'>About Me</h1>
      <div className='text-davys_gray-100 dark:text-davys_gray-900 text-justify'>
        <p>
          I am a creative developer who does not shy away from challenging
          tasks. My main experience has been with the design and coding of cloud
          applications. I have experience with Kubernetes deployments using Helm
          Charts, container image creation, CI/CD pipelines in GitLab, and more.
        </p>
        <p className='py-2'>
          My programing language of predilection is Rust, but I also have
          experience with TypeScript, Python, C/C++, and Java.
        </p>
      </div>
    </section>
  )
}
