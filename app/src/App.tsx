import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useEffect, useState } from 'react'

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkTheme])

  return (
    <main className='h-screen bg-white dark:bg-black'>
      {/* Dark / Light mode toggle */}
      <section className='group relative flex justify-center'>
        <button
          className='rounded-lg bg-blue-300 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800'
          aria-label={darkTheme ? 'toggle dark' : 'toggle light'}
          onClick={() => {
            setDarkTheme(!darkTheme)
          }}
        >
          {darkTheme ? (
            <MdLightMode color='white' />
          ) : (
            <MdDarkMode color='black' />
          )}
        </button>
        <span className='absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100'>
          {darkTheme ? 'Light Mode' : 'Dark Mode'}
        </span>
      </section>

      {/* About Me */}
      <section className='dark:text-white'>
        <h1>About Me</h1>
        <p>
          I am a creative developer who does not shy away from challenging
          tasks. My main experience has been with the design and coding of cloud
          applications. I have experience with Kubernetes deployments using Helm
          Charts, container image creation, CI/CD pipelines in GitLab, and more.
        </p>
        <p>
          My programing language of predilection is Rust, but I also have
          experience with TypeScript, Python, C/C++, and Java.
        </p>
      </section>

      {/* Experience */}
      <section className='dark:text-white'>
        <h1>Experience</h1>
        <div>
          <p>Something</p>
        </div>
      </section>
    </main>
  )
}
