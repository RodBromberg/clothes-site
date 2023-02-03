import { useState, useEffect, useCallback, useMemo } from 'react'
import { RouterProvider, createBrowserRouter, BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Products } from './components/Products/Products'

const Home = () => {
  return <div>Home</div>
}


const Cart = () => {
  return <div>Cart</div>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}


export default App
