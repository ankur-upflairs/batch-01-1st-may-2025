import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={item.thumbnail}
            className="img-fluid rounded-start"
            alt={item.title}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/products/${item.id}`} className="text-decoration-none text-dark">
                {item.title}
              </Link>
            </h5>
            <p className="card-text mb-1">Price: ${item.price.toFixed(2)}</p>
            <div className="d-flex align-items-center mb-2">
              <label htmlFor={`quantity-${item.id}`} className="form-label me-2 mb-0">Quantity:</label>
              <input
                type="number"
                id={`quantity-${item.id}`}
                className="form-control w-25"
                value={item.quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>
            <p className="card-text">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;