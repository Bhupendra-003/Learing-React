import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='h-[100px] w-full text-[#D1CFC0] font-bold flex justify-between px-60 items-center'>
            <p className='w-36 text-xl text-nowrap'>zen browser</p>
            <nav className='w-full h-full flex items-center justify-center gap-6 '>
                <Link to='/home'>
                    <p className='px-4 py-2 text-lg transition-all duration-200'>Home</p>
                </Link>
                <Link to='/products'>
                    <p className='px-4 py-2 text-lg transition-all duration-200'>Products</p>
                </Link>
            </nav>
            <div className='cursor-pointer px-8 py-4 rounded-2xl font-medium text-black bg-[#D1CFC0]'>Download </div>
        </div>
    )
}

export default Nav
