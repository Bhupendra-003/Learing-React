import React from 'react'
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'
import {Routes, Route } from 'react-router-dom';
import UserDetail from '../components/UserDetail';
export function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User  />} >
                    <Route path="/user/:user" element={<UserDetail />} />
                </Route>
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

