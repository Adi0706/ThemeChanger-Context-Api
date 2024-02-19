import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Body from '../Components/Homebody'

function Home() {

  const {themeMode,setThemeMode} = useState("light");

  const darkTheme =()=>{
    setThemeMode("dark")
  }
  const lightTheme=()=>{
    setThemeMode("light")
  }
  return (
   <>
         <Navbar/>
         <div className=''><Body/></div>
        
   </>
  )
}

export default Home