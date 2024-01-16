import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useEffect, useState } from 'react'

import AboutMe from './components/AboutMe'

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
    <main className='bg-paynes_gray-900 dark:bg-paynes_gray-100 flex h-screen flex-col space-y-6'>
      {/* Dark / Light mode toggle */}
      <section className='group relative flex justify-center'>
        <button
          className='bg-alice_blue-500 text-white hover:bg-alice_blue-400 dark:bg-alice_blue-100 dark:hover:bg-alice_blue-200 rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4'
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
        <span className='bg-davys_gray-900 text-davys_gray-100 absolute top-10 scale-0 rounded p-2 text-xs group-hover:scale-100'>
          {darkTheme ? 'Light Mode' : 'Dark Mode'}
        </span>
      </section>

      <AboutMe />

      {/* Experience */}
      {/* relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 */}
      <section className=' text-davys_gray-100 dark:text-davys_gray-900 ring-platinum-900/5 px-6 pb-8 pt-2 shadow-xl ring-1 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
        <h1 className='text-platinum-100 space-y-6 py-4 text-base leading-7'>
          Experience
        </h1>
        <div>
          <p>Something</p>
        </div>
      </section>
    </main>
  )
}
