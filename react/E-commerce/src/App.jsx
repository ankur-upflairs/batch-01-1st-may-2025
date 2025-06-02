import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'; // Import CartProvider

// Import pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ThankYou from './pages/ThankYou'
import About from './pages/About'
import Contact from './pages/Contact'

// Import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './pages/Layout';

function App() {

    return (
    <Router>
      <CartProvider> {/* Wrap the application with CartProvider */}
        
            <Routes>
              <Route path='/' element={<Layout />}>          
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} /> {/* Remove addToCart prop */}
                <Route path="/cart" element={<Cart />} /> {/* Remove cart, updateQuantity, removeFromCart props */}
                <Route path="/checkout" element={<Checkout />} /> {/* Remove cart, clearCart props */}
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Routes>          
      </CartProvider>
    </Router>
  )
  // return (
  //   <Router>
  //     <CartProvider> {/* Wrap the application with CartProvider */}
  //       <div className="d-flex flex-column min-vh-100">
  //         <Navbar cartItemCount={/* Use context for cart item count */ 0} /> {/* cartItemCount will be updated in the next step */}
          
  //         <main className="flex-grow-1">
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             <Route path="/products" element={<Products />} />
  //             <Route path="/products/:id" element={<ProductDetail />} /> {/* Remove addToCart prop */}
  //             <Route path="/cart" element={<Cart />} /> {/* Remove cart, updateQuantity, removeFromCart props */}
  //             <Route path="/checkout" element={<Checkout />} /> {/* Remove cart, clearCart props */}
  //             <Route path="/thank-you" element={<ThankYou />} />
  //             <Route path="/about" element={<About />} />
  //             <Route path="/contact" element={<Contact />} />
  //           </Routes>
  //         </main>

  //         <Footer />
  //       </div>
  //     </CartProvider>
  //   </Router>
  // )
}

export default App