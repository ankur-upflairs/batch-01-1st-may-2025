
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

export default Cart