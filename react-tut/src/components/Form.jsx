import React from 'react'
import { useForm } from 'react-hook-form'
function Form({HandleFormData}) {
    const {register, handleSubmit, reset} = useForm()
    const handleFormSubmit = (data) => {
        HandleFormData(data)
        reset()
    }
    return (
        <div>
            <form className='mt-10 flex gap-8 justify-center' onSubmit={handleSubmit(handleFormSubmit)} method=''>
                <input {...register('name')} type="text" className='outline-none w-64 h-8 p-2 rounded-md border border-gray-300' placeholder='Enter your name' />
                <input {...register('email')} type="text" className='outline-none w-64 h-8 p-2 rounded-md border border-gray-300' placeholder='Enter your Email' />
                <input {...register('image')} type="text" className='outline-none w-64 h-8 p-2 rounded-md border border-gray-300' placeholder='Image Url' />
                <button className='w-24 h-8 p-1 text-white font-bold bg-black rounded-md'>Add it</button>
            </form>
        </div>
    )
}

export default Form
