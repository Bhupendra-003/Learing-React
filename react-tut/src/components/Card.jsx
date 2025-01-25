import React from 'react'

function Card({data, setData, index}) {
    const {name, artist, image, added} = data;

    return (
        <>
            {/* Card Body */}
            <div className='relative w-72 h-28 p-4 bg-white flex-col flex gap-8 items-center rounded-md hover:shadow-lg hover:scale-110 duration-500 hover:rounded-none transition-all'>

                <div className='flex gap-4 w-full'>
                    {/* Image Container */}
                    <div className='w-16 bg-blue-300 h-16 rounded-md overflow-hidden'>
                        <img src={`${image}`} alt="" className='w-full h-full object-cover' />
                    </div>
    
                    {/* Name and description */}
                    <div>
                        <h2 className='font-bold text-lg'>{name}</h2>
                        <h2 className='text-sm mt-1'>{artist}</h2>
                    </div>
                </div>

                {/* Add to favourites button */}
                <button onClick={()=>{setData(index)}} className={`add_fav_button relative px-8 text-[0.75rem] py-2 -top-5 ${added ? 'bg-[#1675a1]' : 'bg-[#FF5E00]'} rounded-full text-white font-bold hover:scale-110 transition-transform duration-500 ease-in-out`}>{added ? 'Added' : 'Add to favourites'}</button>
            </div>
        </>
    )
}

export default Card
