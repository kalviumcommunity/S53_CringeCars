import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SignUp from './components/Signup'
import Login from './components/Login'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import CarForm from './components/CarForm'
import About from './components/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carform" element={<CarForm />} />
      </Routes>
    </div>
  );
}

export default App




