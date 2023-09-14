import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Store from './pages/store/Store'
import About from './pages/about/About'
import Home from './pages/home/Home'
import { useState } from 'react'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
