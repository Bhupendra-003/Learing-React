import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
function App() {

    const raw = [
        {name: 'Isq hai', artist: 'Anurag Saikia', image: 'https://cdn.pixabay.com/audio/2024/10/18/19-17-44-643_200x200.png', added: false},
        {name: 'Pashmina', artist: 'Jubin Nautiyal', image: 'https://cdn.pixabay.com/audio/2024/09/17/10-46-15-772_200x200.png', added: false},
        {name: 'Baby John', artist: 'Thaman s', image: 'https://cdn.pixabay.com/audio/2024/09/09/18-40-47-52_200x200.png', added: false},
        {name: 'Jo tum mere ho', artist: 'Anuv Jain', image: 'https://cdn.pixabay.com/audio/2024/08/19/01-12-14-352_200x200.png', added: false},
        {name: 'Azad', artist: 'Amit Trivedi', image: 'https://cdn.pixabay.com/audio/2024/06/17/18-00-00-760_200x200.jpg', added: false},  
        {name: 'Baat Nirali', artist: 'Lokeshwar Idara', image: 'https://cdn.pixabay.com/audio/2024/04/14/22-20-51-951_200x200.jpg', added: false},
    ]
    const [data, setData] = useState(raw);

    const handleclick = (recIndex) => {
        setData(prev => 
            prev.map((item, index) => {
                if (index === recIndex) {
                    console.log('Added Item', recIndex+1)
                    return { ...item, added: !item.added };
                }
                return item;
            })
        );
    }


    return (
        <>
            <div className='w-full h-screen bg-zinc-200'>
                <Navbar data={data} />
                <div className='w-full p-8 flex-wrap flex gap-8 items-center justify-start'>
                    {data.map((item, index)=>(
                        <Card key={index} data={item} setData={handleclick} index={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
