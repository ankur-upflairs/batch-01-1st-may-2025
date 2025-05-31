
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

export default Navbar