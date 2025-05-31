
// Product Detail Page
const ProductDetail = ({ products, onAddToCart, onNavigate, productId }) => {
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h2>Product not found</h2>
        <button onClick={() => onNavigate('products')} className="btn btn-primary">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <button className="btn btn-outline-secondary mb-3" onClick={() => onNavigate('products')}>
        ← Back to Products
      </button>
      
      <div className="row">
        <div className="col-md-6">
          <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {product.images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={image} className="d-block w-100 rounded" alt={product.title} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
        
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">{product.brand} • {product.category}</p>
          
          <div className="mb-3">
            <span className="text-warning h5">
              {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="text-muted ms-2">({product.rating} rating)</span>
          </div>
          
          <h2 className="text-primary mb-3">${product.price}</h2>
          
          <p className="lead">{product.description}</p>
          
          <div className="mb-3">
            <span className="badge bg-success me-2">In Stock</span>
            <span className="badge bg-info">Free Shipping</span>
          </div>
          
          <div className="d-grid gap-2">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
            <button onClick={() => onNavigate('products')} className="btn btn-outline-secondary">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
