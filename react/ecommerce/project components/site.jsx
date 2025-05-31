import React, { useState, useEffect } from 'react';

// Bootstrap CSS
const bootstrapLink = document.createElement('link');
bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
bootstrapLink.rel = 'stylesheet';
document.head.appendChild(bootstrapLink);

// Bootstrap JS
const bootstrapScript = document.createElement('script');
bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
document.head.appendChild(bootstrapScript);

// Navbar Component
const Navbar = ({ cartItems, currentPage, onNavigate }) => {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <button 
          className="navbar-brand fw-bold btn btn-link text-white text-decoration-none"
          onClick={() => onNavigate('home')}
        >
          🛍️ ShopHub
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <button 
                  className={`nav-link btn btn-link text-white text-decoration-none ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => onNavigate('cart')} 
            className="btn btn-outline-light position-relative"
          >
            🛒 Cart
            {cartItemCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = ({ onNavigate }) => (
  <footer className="bg-dark text-light py-4 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>ShopHub</h5>
          <p>Your one-stop destination for quality products at great prices.</p>
        </div>
        <div className="col-md-4">
          <h6>Quick Links</h6>
          <ul className="list-unstyled">
            <li>
              <button 
                onClick={() => onNavigate('products')} 
                className="btn btn-link text-light text-decoration-none p-0"
              >
                Products
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('about')} 
                className="btn btn-link text-light text-decoration-none p-0"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('contact')} 
                className="btn btn-link text-light text-decoration-none p-0"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6>Follow Us</h6>
          <p>Stay connected for updates and deals!</p>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p>&copy; 2025 ShopHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

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

// Cart Item Component
const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="row align-items-center border-bottom py-3">
    <div className="col-md-2">
      <img src={item.thumbnail} alt={item.title} className="img-fluid rounded" />
    </div>
    <div className="col-md-4">
      <h6>{item.title}</h6>
      <small className="text-muted">{item.brand}</small>
    </div>
    <div className="col-md-2">
      <h6 className="text-primary">${item.price}</h6>
    </div>
    <div className="col-md-2">
      <div className="input-group">
        <button 
          className="btn btn-outline-secondary btn-sm" 
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="form-control text-center" style={{ maxWidth: '60px' }}>
          {item.quantity}
        </span>
        <button 
          className="btn btn-outline-secondary btn-sm" 
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
    <div className="col-md-2 text-end">
      <h6>${(item.price * item.quantity).toFixed(2)}</h6>
      <button 
        className="btn btn-outline-danger btn-sm"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  </div>
);

// Toast Component
const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
      <div className="toast show" role="alert">
        <div className="toast-header">
          <strong className="me-auto">ShopHub</strong>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  );
};

// Home Page
const Home = ({ products, onAddToCart, onNavigate }) => {
  const featuredProducts = products.slice(0, 8);
  const categories = [...new Set(products.map(p => p.category))].slice(0, 6);

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="jumbotron bg-primary text-white rounded p-5 mb-5">
        <div className="container">
          <h1 className="display-4">Welcome to ShopHub!</h1>
          <p className="lead">Discover amazing products at unbeatable prices</p>
          <button onClick={() => onNavigate('products')} className="btn btn-light btn-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row">
          {categories.map(category => (
            <div key={category} className="col-md-4 col-sm-6 mb-3">
              <button 
                onClick={() => onNavigate('products', null, category)} 
                className="btn btn-outline-primary w-100 text-capitalize p-3"
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Products Page
const Products = ({ products, onAddToCart, onNavigate, initialCategory = '' }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const categories = [...new Set(products.map(p => p.category))];

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, searchTerm, selectedCategory]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">All Products</h1>
      
      {/* Search and Filter */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category} className="text-capitalize">
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">
        {currentProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            onNavigate={onNavigate}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button 
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button 
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

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

// Cart Page
const Cart = ({ cartItems, onUpdateQuantity, onRemoveFromCart, onClearCart, onNavigate }) => {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2>Your cart is empty</h2>
        <p>Add some products to get started!</p>
        <button onClick={() => onNavigate('products')} className="btn btn-primary">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Shopping Cart</h2>
            <button className="btn btn-outline-danger" onClick={onClearCart}>
              Clear Cart
            </button>
          </div>
          
          {cartItems.map(item => (
            <CartItem 
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemoveFromCart}
            />
          ))}
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button 
                  className="btn btn-primary"
                  onClick={() => onNavigate('checkout')}
                >
                  Proceed to Checkout
                </button>
                <button onClick={() => onNavigate('products')} className="btn btn-outline-secondary">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Checkout Page
const Checkout = ({ cartItems, onClearCart, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit'
  });
  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onClearCart();
      onNavigate('thank-you');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2>Your cart is empty</h2>
        <button onClick={() => onNavigate('products')} className="btn btn-primary">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>
      
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Shipping Information</h5>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Address *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Zip Code *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                    {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Payment Method</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    value="credit"
                    checked={formData.paymentMethod === 'credit'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Credit Card</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">PayPal</label>
                </div>
              </div>
            </div>
            
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Place Order - ${total.toFixed(2)}
              </button>
            </div>
          </form>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              
              {cartItems.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <small>{item.title}</small>
                    <br />
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Thank You Page
const ThankYou = ({ onNavigate }) => (
  <div className="container my-5 text-center">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body p-5">
            <div className="text-success mb-4" style={{ fontSize: '5rem' }}>
              ✓
            </div>
            <h2 className="text-success">Order Successful!</h2>
            <p className="lead">Thank you for your purchase. Your order has been placed successfully.</p>
            <p>You will receive a confirmation email shortly.</p>
            <div className="d-grid gap-2">
              <button onClick={() => onNavigate('products')} className="btn btn-primary">
                Continue Shopping
              </button>
              <button onClick={() => onNavigate('home')} className="btn btn-outline-secondary">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// About Page
const About = () => (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h1 className="text-center mb-4">About ShopHub</h1>
        
        <div className="card">
          <div className="card-body p-5">
            <p className="lead">
              Welcome to ShopHub, your premier destination for quality products at unbeatable prices!
            </p>
            
            <p>
              Founded with the mission to make online shopping simple, secure, and enjoyable, 
              ShopHub offers a carefully curated selection of products across multiple categories. 
              From electronics to fashion, home goods to beauty products, we have something for everyone.
            </p>
            
            <h4>Why Choose ShopHub?</h4>
            <ul>
              <li><strong>Quality Products:</strong> We partner with trusted brands and suppliers</li>
              <li><strong>Competitive Prices:</strong> Best prices guaranteed on all items</li>
              <li><strong>Fast Shipping:</strong> Free shipping on orders over $100</li>
              <li><strong>Customer Service:</strong> 24/7 support to help with any questions</li>
              <li><strong>Secure Shopping:</strong> Your privacy and security are our priority</li>
            </ul>
            
            <p>
              Our team is committed to providing you with an exceptional shopping experience. 
              If you have any questions or need assistance, don't hesitate to contact us!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Contact Page
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container my-5"></div>