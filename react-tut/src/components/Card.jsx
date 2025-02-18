import React from 'react'

function Card({product}) {
    const {title, price} = product;
    return (
        <div className='w-64 h-52 bg-[#D1CFC0] rounded-3xl flex flex-col justify-between overflow-hidden'>
            <div className='px-6 pt-6 flex flex-col gap-1'>
                <div className='text-xl font-bold text-nowrap overflow-x-hidden'>{title}</div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, vitae.</div>
                <p className='text-xl ml-auto'>${price}</p>
            </div>
            <div className='bg-[#F76F53] w-full h-10 text-black flex justify-center items-center font-bold text-xl'>Purchase</div>
        </div>
    )
}

export default Card
