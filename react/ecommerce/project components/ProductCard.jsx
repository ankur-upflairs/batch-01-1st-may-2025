
// Product Card Component
const ProductCard = ({ product, onAddToCart, onNavigate }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src={product.thumbnail} 
          className="card-img-top" 
          alt={product.title}
          style={{ height: '200px', objectFit: 'cover' }}
          onError={handleImageError}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title text-truncate">{product.title}</h6>
          <p className="card-text text-muted small">{product.brand} • {product.category}</p>
          <div className="mb-2">
            <span className="text-warning">
              {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <small className="text-muted ms-1">({product.rating})</small>
          </div>
          <div className="mt-auto">
            <h5 className="text-primary">${product.price}</h5>
            <div className="d-grid gap-2">
              <button 
                className="btn btn-outline-primary btn-sm"
                onClick={() => onNavigate('product-detail', product.id)}
              >
                View Details
              </button>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard