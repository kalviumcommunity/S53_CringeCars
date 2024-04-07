import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SignUp from './components/Signup'
import Login from './components/Login'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import LandingPage from './components/LandingPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <LandingPage/>
    </div>
  );
}

export default App




