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
export default CartItem