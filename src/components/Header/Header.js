import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bolder",
        color: "yellow"
    }
return (
    <nav className='router-url'>
        <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
        <NavLink activeStyle={activeStyle} to="/friends">Friends</NavLink>
        <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
        <NavLink activeStyle={activeStyle} to="/culture">Culture</NavLink>
    </nav>
);
};

export default Header;