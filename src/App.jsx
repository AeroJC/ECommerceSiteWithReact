import './App.css'
import HomePage from './pages/HomePage.jsx'
import CheckOut from './pages/CheckOut.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>

    </>
  )
}

export default App
 