import React, { useState } from 'react'
import Form from './components/Form'
import Cards from './components/Cards'

function App() {
    const [users, setUsers] = useState([])
    const HandleFormData = (data) => {
        setUsers([...users, data])
    }
    const handleRemove = (i) => {
        setUsers(users.filter((user, index) => index !== i));
        console.log(i)
    }

    return (
        <div className="w-full h-screen bg-zinc-100 flex items-center justify-center">
            <div className='container mx-auto'>
                <Cards users={users} handleRemove={handleRemove} />
                <Form HandleFormData={HandleFormData} />
            </div>
        </div>
    )
}

export default App
