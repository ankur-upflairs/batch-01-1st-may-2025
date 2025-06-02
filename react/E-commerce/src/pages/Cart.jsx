import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import CartContext
import CartItem from '../components/CartItem';

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext); // Use useContext to get cart state and functions

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Your cart is empty. <Link to="/products" className="alert-link">Start shopping!</Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-danger" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/products" className="btn btn-secondary">
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <ul className="list-group list-group-flush">
                  {cart.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      {item.title} (x{item.quantity})
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center fs-5 fw-bold">
                    Total:
                    <span>${calculateTotal()}</span>
                  </li>
                </ul>
                <Link to="/checkout" className="btn btn-primary w-100 mt-3">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;