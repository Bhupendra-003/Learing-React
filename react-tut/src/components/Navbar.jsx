import React from 'react'

function Navbar() {
    return (
        <div className='w-full px-8 py-5 flex items-center justify-between'>
            <h1 className='text-3xl text-[#f73218]'>Orange</h1>
            <div className='flex gap-3 px-3 py-1 rounded-lg text-white items-center bg-[#FF5E00] shadow-sm shadow-[#f12c12] hover:-translate-x-2 cursor-pointer transition-transform'>
                <h4>favourites</h4>
                <h4 className='px-3 py-1 rounded-full bg-orange-600 text-sm'>4</h4>
            </div>
        </div>
    )
}

export default Navbar
