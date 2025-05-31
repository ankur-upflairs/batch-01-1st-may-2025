
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
export default Home