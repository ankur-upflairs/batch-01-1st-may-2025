
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

export default Footer

