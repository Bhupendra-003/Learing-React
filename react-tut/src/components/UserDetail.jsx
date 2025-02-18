import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
    const {user} = useParams();
    const navigate = useNavigate(); 
    
    const goBackHandle = () => {
        console.log('Go back clicked');
        navigate('/user');
    }

    return (
        <>
            <div className='w-full h-screen flex px-16 mt-8'>
                <div className='px-8'>
                    <h1 className='text-3xl font-bold'>User Details</h1>
                    <div className='mt-8 text-lg'>
                        <p className='py-2 rounded-lg text-xl font-bold'>{user}</p>
                    </div>
                    <div className='py-2'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quod architecto, consectetur quia rerum temporibus est illo asperiores animi magni fugiat iure numquam quisquam aliquid officia dolore maxime assumenda dolorem?</p>
                    </div>
                    <button onClick={()=>{
                        goBackHandle();
                    }} className='mt-8 bg-black text-white px-4 py-2 rounded-lg'>
                        Go Back
                    </button>

                </div>
            </div>
        </>
    )
}

export default UserDetail
