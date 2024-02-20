import React, { useState } from 'react'
import Body from '../Components/Homebody'
import { ThemeProvider } from '../Context/Theme';
import ThemeToggle from '../Components/ThemeToggle';
import { useEffect } from 'react';

function Home() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto p-7">
              
               <p className='m-2 text-xl'>LIGHT-DARK THEME CONTEXT API </p>
                
               <ThemeToggle/>
              </div>

              <div className="w-full max-w-lg mx-auto">
                  <Body />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default Home