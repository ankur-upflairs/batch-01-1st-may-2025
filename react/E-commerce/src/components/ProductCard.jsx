import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const fallbackImage = 'https://via.placeholder.com/150?text=No+Image'

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={product.thumbnail || fallbackImage}
        className="card-img-top" 
        alt={product.title}
        style={{ height: '200px', objectFit: 'cover' }}
        onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted text-truncate">{product.brand} - {product.category}</h6>
        <p className="card-text flex-grow-1">${product.price.toFixed(2)}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="badge bg-warning text-dark">
            <i className="bi bi-star-fill"></i> {product.rating.toFixed(1)}
          </span>
          <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard