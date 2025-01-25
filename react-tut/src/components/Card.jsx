import React from 'react'

function Card({data}) {
    const {name, artist, image, added} = data;
    return (
        <>
            {/* Card Body */}
            <div className='relative w-72 h-28 p-4 bg-white flex gap-8 rounded-md hover:border-orange-500 border-2'>

                {/* Image Container */}
                <div className='w-16 bg-blue-300 h-16 rounded-md overflow-hidden'>
                    <img src={`${image}`} alt="" className='w-full h-full object-cover' />
                </div>

                {/* Name and description */}
                <div>
                    <h2 className='font-bold text-lg'>{name}</h2>
                    <h2 className='text-sm mt-1'>{artist}</h2>
                </div>

                {/* Add to favourites button */}
                <button onClick={()=>alert('Added to Favourites!')} className={`add_fav_button absolute px-8 text-[0.75rem] py-2 top-[85%] left-[22%] ${added ? 'bg-[#1675a1]' : 'bg-[#FF5E00]'} rounded-full text-white font-bold`}>{added ? 'Added' : 'Add to favourites'}</button>
            </div>
        </>
    )
}

export default Card
