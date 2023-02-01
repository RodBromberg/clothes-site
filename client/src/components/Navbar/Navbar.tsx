import React from 'react'
import { Router, Route, NavLink, Link } from 'react-router-dom'
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/products">Products</NavLink>
        </p>
        <p>
          <NavLink to="/cart">Cart</NavLink>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;

