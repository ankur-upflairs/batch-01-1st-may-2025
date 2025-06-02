import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Our Store</h1>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <p className="lead text-center mb-5">
            Welcome to our e-commerce store, your one-stop shop for high-quality products at unbeatable prices.
          </p>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Our Mission</h3>
              <p className="card-text">
                Our mission is to provide customers with a seamless and enjoyable online shopping experience.
                We are committed to offering a diverse range of products, ensuring top-notch quality,
                and delivering exceptional customer service.
              </p>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Our Values</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Customer Satisfaction:</strong> We prioritize our customers' needs and strive to exceed their expectations.
                </li>
                <li className="list-group-item">
                  <strong>Quality Products:</strong> We carefully select and curate our products to ensure they meet high standards.
                </li>
                <li className="list-group-item">
                  <strong>Integrity:</strong> We conduct our business with honesty, transparency, and ethical practices.
                </li>
                <li className="list-group-item">
                  <strong>Innovation:</strong> We continuously seek new ways to improve our services and product offerings.
                </li>
              </ul>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-3">Our Story</h3>
              <p className="card-text">
                Founded with a passion for bringing convenience and quality to online shoppers, our journey began in [Year Founded].
                Since then, we have grown into a trusted platform, serving thousands of satisfied customers worldwide.
                We believe in the power of e-commerce to connect people with the products they love, and we are dedicated to making that connection as smooth as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;