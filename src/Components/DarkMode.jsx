import { useState } from 'react'
import React from 'react'
import darkbutton from '../assets/website/dark-mode-button.png'
import lightbutton from '../assets/website/light-mode-button.png'

export default function DarkMode() {
    const [Theme, setTheme] = useState(localStorage.getItem('Theme')?localStorage.getItem('Theme'):"light")
    const element=document.documentElement;
    React.useEffect(()=>{
     if(Theme==='dark'){
        element.classList.add("dark");
        localStorage.setItem("Theme","dark");
     }   
     else{
        element.classList.remove("dark");
        localStorage.setItem("theme","light");
     }
    },[Theme])

    const changeTheme=()=>{
        if(Theme==='light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }

  return (
    <div className='relative'>
      <img  src={darkbutton} onClick={changeTheme} alt="DarkModeButton" className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px 1px 1px rgba(0,0,0,1)] transition-all duration-300 ${Theme==='light'? "opacity-0":"opacity-100"}`}/>
      <img src={lightbutton} onClick={changeTheme} alt="LightModeButton" className='w-12  drop-shadow-[1px 1px 1px rgba(0,0,0,1)] transition-all duration-300'/>
    </div>
  )
}
