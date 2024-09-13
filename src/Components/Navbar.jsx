import React, { useState } from 'react'
import assets from '../assets/assets'
import Btn from './Btn'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [menu, setMenu]=useState(true);
  return (
    <nav className='fixed top-0 right-0 left-0 z-20 max-w-[1200px] w-full mx-auto bg-white flex p-3 justify-between items-center flex-wrap md:flex-nowrap'>
        <a href="/" className='flex justify-center items-center mx-2'>
            <img src={assets.logo} alt="logo" className='h-16 md:h-24'/>
        </a>
        <div className={`${menu ? 'hidden' : 'flex'} my-3 mx-auto gap-2 md:flex flex-col md:justify-around md:items-center order-1 w-full md:w-1/2 md:flex-row md:order-0 *:p-2 *:rounded-md *:cursor-pointer hover:*:hover:bg-slate-300`}>
            <a href='/'>Home</a>
            <a href='/'>Pages</a>
            <a href='/'>About</a>
            <a href='/'>Services</a>
        </div>
        <Btn title='Login' styl='bg-blue-800 text-white ml-auto hover:bg-blue-900 hover:text-red md:order-2' />
        <div onClick={()=>{setMenu(!menu)}} className='mx-2 block md:hidden transition-all ease-in-out duration-300'>
            {
                menu ? <FaBars size={24} />
                    : <FaTimes size={24} />
            }
        </div>
    </nav>
  )
}

export default Navbar