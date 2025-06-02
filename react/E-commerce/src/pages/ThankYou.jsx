import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container my-5 text-center">
      <div className="card p-5 shadow-sm">
        <h1 className="card-title text-success mb-4">
          <i className="bi bi-check-circle-fill me-2"></i>Thank You for Your Order!
        </h1>
        <p className="card-text lead mb-4">
          Your order has been placed successfully and will be processed shortly.
        </p>
        <p className="card-text mb-4">
          You will receive an email confirmation with your order details.
        </p>
        <div className="d-grid gap-2 col-md-6 mx-auto">
          <Link to="/" className="btn btn-primary btn-lg">
            Continue Shopping
          </Link>
          <Link to="/products" className="btn btn-outline-secondary btn-lg">
            Browse More Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;