import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import Routing from '../util/Routing';

function Nav() {
    const activePage = (e, color) => {
        if(e.isActive){
            return {
                color: color,
                borderBottom: `2px solid ${color}`
            }
        }
    }
    return (
        <>
            <nav className='flex gap-12 p-8 justify-center items-center '>
                <NavLink style={e => activePage(e, 'green')} className='text-xl font-bold' to="/"><span>Home</span></NavLink>
                <NavLink style={e => activePage(e, 'red')} className='text-xl font-bold' to="/user">User </NavLink>
                <NavLink style={e => activePage(e, 'blue')} className='text-xl font-bold' to="/about">About</NavLink>
            </nav>
            <Routing />
        </>
    );
}

export default Nav;
