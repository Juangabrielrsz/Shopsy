import React from 'react'
import Logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='bg-primary/40 py-3 sm:py-2'>
        <div className='container flex justify-between items-center'>
            <div>
                <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2s'>
                    <img src={Logo} alt="Logo" className='w-10 uppercase'/>Shopsy
                 </a>
                </div>
                <div className=' realative group hidden sm:block'>
                 <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary' />
                 <IoMdSearch className=' text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-40'/>
             </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar