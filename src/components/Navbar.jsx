import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)

    return (

        <div className='md:mx-20 flex items-center justify-between 
        text-sm py-4 mb-5'>
           <div className='flex gap-5'>
           <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
            <ul className="hidden md:flex items-end gap-5 font-medium">

                <NavLink to='/'>
                    <li className='py-1 text-white text-base'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' hidden />
                </NavLink>
                <NavLink to='/pages'>
                    <li className='py-1 text-white text-base'>Pages</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' hidden />
                </NavLink>
                <NavLink to='/portfolio'>
                    <li className='py-1 text-white text-base'>Portfolio</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' hidden />
                </NavLink>
                <NavLink to='/blog'>
                    <li className='py-1 text-white text-base'>Blog</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' hidden />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1 text-white text-base'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' hidden />
                </NavLink>

            
                <img src={assets.search_icon} alt="" />

            </ul>
            </div>

            <div>
                <button onClick={()=>navigate('#')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light md:block'>Let's Talk</button>
            </div>
        



        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden ' src={assets.menu_icon} alt="" />
    
        {/** Mobile Menu */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white`}>
        <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
        </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to='/page'><p className='px-4 py-2 rounded inline-block'>Page</p></NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to='/portfolio'><p className='px-4 py-2 rounded inline-block'>Portfolio</p></NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to='/blog'><p className='px-4 py-2 rounded inline-block'>Blog</p></NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
                <button onClick={()=>navigate('#')} className='bg-green-400 text-white px-8 py-3 rounded-full font-light md:block'>Let's Talk</button>
            </ul>
        </div>

        </div>
        

  )
}

export default Navbar
