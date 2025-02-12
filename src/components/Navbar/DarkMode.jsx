import React from 'react'
import LightButton from "../../assets/lightButton.png"
import DarkButton from "../../assets/darkButton.png"


const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme")? localStorage.getItem("theme"): "light"
    );
    const elemet= document.documentElement;


    React.useEffect(()=>{
      if(theme === "dark"){
        elemet.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        elemet.classList.remove("dark");
        localStorage.setItem("theme","light");
      }
    }, [theme]);

  return (
    <div className='relative'>
        <img 
        src={LightButton} 
        alt=""
        onClick={()=> setTheme (theme ==="light"? "dark" : "light")}
         className={`w-12 curosor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>
        <img 
        src={DarkButton}
        alt="" 
         onClick={()=> setTheme (theme ==="light" ? "dark" : "light")}
        className='w-12 curosors-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' />
    </div>
  )
}

export default DarkMode