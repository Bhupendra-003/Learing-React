import React from 'react'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div>
            <nav className='flex justify-between w-full h-16 px-8 items-center border-b-2 border-gray-900'>
                <div className='flex gap-10'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/user'>User</Link>
                </div>
                <div className='flex gap-10'>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav
