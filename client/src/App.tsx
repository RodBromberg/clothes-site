import { useState, useEffect, useCallback, useMemo } from 'react'
import { RouterProvider, createBrowserRouter, BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import Test from './components/Navbar/Test'
import { Products } from './components/Products/Products'
import HomePage from './pages/HomePage/HomePage'



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
      {/* <Navbar /> */}
      <Test />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}


export default App
