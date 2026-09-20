import './App.css'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    
    </>
  )
}

export default App
 