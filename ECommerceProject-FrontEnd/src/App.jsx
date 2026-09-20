import './App.css'
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage.jsx'
import CheckOut from './pages/CheckOut.jsx'
import Orders from './pages/Orders.jsx'
import Tracking from './pages/Tracking.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import axios from 'axios'

function App() {
     const [cartItems, setCartItems] = useState([]);
     useEffect(() => {
         axios.get('/api/cart-items')
            .then((response) => {
                setCartItems(response.data);
            }
            )  
          },[]);

  return (
    <>
    <Routes>
      <Route index element={<HomePage cartItems={cartItems} />} />
      <Route path="/CheckOut" element={<CheckOut cartItems={cartItems} />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Tracking" element={<Tracking />} />
    </Routes>

    </>
  )
}

export default App
 