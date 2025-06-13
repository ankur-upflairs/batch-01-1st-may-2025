import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateCourse from './pages/CreateCourse'
import { BrowserRouter,Routes,Route } from 'react-router'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import ProtectedRoute from './pages/Protected'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <CreateCourse />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App
