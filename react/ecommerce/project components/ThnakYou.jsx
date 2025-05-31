
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

export default ThankYou