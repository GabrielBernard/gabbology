import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useEffect, useState } from 'react'

// import { MdDarkMode } from 'react-icons/md'
// import { MdLightMode } from 'react-icons/md'

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
    <div className='h-screen bg-white dark:bg-black'>
      <div className='group relative flex justify-center'>
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
      </div>
    </div>

    //     <main className='my-10 flex min-h-screen flex-col px-24 font-sans'>
    //       <div className='flex overflow-hidden'>
    //         <img
    //           className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
    //           src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    //           alt=''
    //         />
    //         <div>
    //           <span className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'>
    //             Badge
    //           </span>
    //         </div>
    //       </div>

    //       {/* <div class="flex -space-x-1 overflow-hidden">
    //   <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">

    //   <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
    //   <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    // </div> */}
    //     </main>
  )
}
