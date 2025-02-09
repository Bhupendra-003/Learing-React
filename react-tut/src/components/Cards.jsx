import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
    return (
        <div className='w-full h-[34vh] flex-wrap gap-8 flex items-center justify-center p-4'>
            {users.map((user, index) => (
                <Card user={user} key={index} index={index} handleRemove={handleRemove} />
            ))}
        </div>
    )
}

export default Cards
