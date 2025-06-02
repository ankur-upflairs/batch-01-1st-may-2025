function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto py-3">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">E-Shop</h5>
            <p>
              Your one-stop shop for all your needs. We offer a wide range of products with great quality and affordable prices.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/about" className="text-dark">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-dark">Contact Us</a>
              </li>
              <li>
                <a href="/products" className="text-dark">Products</a>
              </li>
              <li>
                <a href="/cart" className="text-dark">Cart</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Connect</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Facebook</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Twitter</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer