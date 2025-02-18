import React from 'react'
import Nav from './components/Nav'
import Routing from './util/Routing'

function App() {
    return (
        <div className='bg-[#1F1F1F] w-full h-fit'>
            <Nav />
            <Routing />
        </div>
    )
}

export default App
