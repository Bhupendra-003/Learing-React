import React from 'react'

function Card({user, index, handleRemove}) {
    return (
        <div className='w-52 h-full flex flex-col gap-1 items-center rounded-md p-4 bg-white shadow-md'>
            <div className='flex flex-col items-center gap-2'>
                <div className='w-16 h-16 rounded-full overflow-hidden bg-red-600'>
                    <img className='w-full h-full object-cover' src={user.image} alt="" />
                </div>
                <h3 className='text-xs text-zinc-500'>{user.email}</h3>
            </div>
            <h2 className='font-bold'>{user.name}</h2>
            <p className='text-xs text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, nulla porro. Doloribus.</p>
            <button onClick={()=>handleRemove(index)} className='w-24 rounded-md h-8 p-1 mt-2 text-white font-bold bg-[#ff0909]'>Remove it</button>
        </div>
    )
}

export default Card
