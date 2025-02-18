import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../components/Product'
import Home from '../components/Home'

function Routing() {
    return (
        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/products' element={<Product />}/>
        </Routes>
    )
}

export default Routing
