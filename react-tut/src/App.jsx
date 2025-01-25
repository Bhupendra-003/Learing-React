import React, { useRef } from 'react'

function App() {
    const name = useRef(null)
    const age = useRef(null)
    const email = useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name.current.value, age.current.value, email.current.value)
    }
    return (
            <form action='' onSubmit={handleSubmit} className='m-7 bg-zinc-300 p-4 flex gap-4 rounded-md'>
                <input className='rounded-md px-4 py-1 outline-none' ref={name} placeholder='name' type="text" />
                <input className='rounded-md px-4 py-1 outline-none' ref={age} placeholder='age' type="text" />
                <input className='rounded-md px-4 py-1 outline-none' ref={email} placeholder='email' type="text" />
                <button className='rounded-md bg-black text-white px-8 py-2' type="submit"> Submit </button>
            </form>
    )
}

export default App
