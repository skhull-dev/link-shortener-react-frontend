import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className='bg-slate-900 md:p-5 px-3 py-5 flex justify-between items-center fixed left-0 w-full top-0 z-50 gap-2 flex-wrap'>
        <Link to={"/"} id="logo" className='underline underline-offset-2 md:text-lg px-2 py-1'>
            small.it
        </Link>
        <nav id="navigation" className='flex gap-2 overflow-x-auto whitespace-nowrap'>
            <Link to={"/"} className='hover:bg-sky-400 hover:text-slate-900 px-2 py-1 rounded-md'>Home</Link>
            <Link to={"/links"} className='hover:bg-sky-400 hover:text-slate-900 px-2 py-1 rounded-md'>My Links</Link>
            <Link to={"/login"} className='hover:bg-sky-400 hover:text-slate-900 px-2 py-1 rounded-md'>Login</Link>
        </nav>
    </header>
  )
}

export default Header