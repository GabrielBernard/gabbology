import { IconButton, ThemeProvider, Tooltip, createTheme } from '@mui/material'
import { lime, purple } from '@mui/material/colors'
import { useEffect, useState } from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

// const lime = {
//   main: '#194D33',
//   light: '#42a5f5',
//   dark: '#DB3E00',
//   contrastText: '#fff',
// }

// const purple = {
//   main: '#F78DA7',
//   light: '#42a5f5',
//   dark: '#1565c0',
//   contrastText: '#fff',
// }

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
})

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
    <ThemeProvider theme={theme}>
      <div className='h-screen bg-white dark:bg-black'>
        <Tooltip title={darkTheme ? 'Switch to Light' : 'Switch to Dark'}>
          <IconButton
            className='dark:text-white'
            color={darkTheme ? 'primary' : 'secondary'}
            aria-label={darkTheme ? 'toggle dark' : 'toggle light'}
            onClick={() => {
              setDarkTheme(!darkTheme)
            }}
          >
            {darkTheme ? (
              <LightModeIcon></LightModeIcon>
            ) : (
              <DarkModeIcon></DarkModeIcon>
            )}
          </IconButton>
        </Tooltip>
      </div>
    </ThemeProvider>
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
