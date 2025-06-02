import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import CartContext

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext); // Use useContext to get addToCart

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5">
        <div className="alert alert-warning" role="alert">
          Product not found.
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.thumbnail} className="img-fluid rounded shadow-sm" alt={product.title} />
          <div className="row mt-3">
            {product.images && product.images.map((image, index) => (
              <div key={index} className="col-3 mb-3">
                <img src={image} className="img-fluid rounded border" alt={`Product image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="mb-3">{product.title}</h1>
          <p className="lead text-muted">{product.brand}</p>
          <h2 className="text-primary mb-4">${product.price.toFixed(2)}</h2>
          <p>{product.description}</p>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item"><strong>Category:</strong> {product.category}</li>
            <li className="list-group-item"><strong>Rating:</strong> {product.rating} <i className="bi bi-star-fill text-warning"></i></li>
            <li className="list-group-item"><strong>Stock:</strong> {product.stock} units</li>
          </ul>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;