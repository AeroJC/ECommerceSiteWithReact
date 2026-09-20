import './App.css'
import HomePage from './pages/HomePage.jsx'
import CheckOut from './pages/CheckOut.jsx'
import Orders from './pages/Orders.jsx'
import Tracking from './pages/Tracking.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/CheckOut" element={<CheckOut />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Tracking" element={<Tracking />} />
    </Routes>

    </>
  )
}

export default App
 