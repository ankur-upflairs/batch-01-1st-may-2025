import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
        <div className="d-flex flex-column min-vh-100">
          <Navbar cartItemCount={/* Use context for cart item count */ 0} /> {/* cartItemCount will be updated in the next step */}
          
          <main className="flex-grow-1">           
             <Outlet />
          </main>

          <Footer />
        </div>
    </div>
  )
}

export default Layout