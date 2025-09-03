


import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = () => {
    
    return (

        <header className='header-books'>

            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',
                
                })}
                className="nav-link"
            >
                HOME PAGE
            </NavLink>



            <NavLink
                to="/books"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',
                })}
                 className="nav-link"
            >
                BOOKS PAGE
            </NavLink>

        </header>

    )
}
export default Navbar
