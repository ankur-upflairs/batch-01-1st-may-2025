import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes ,Route} from 'react-router'
import Home from './pages/Home'
import AddTask from './pages/AddTask'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addtask' element={<AddTask />} />

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
