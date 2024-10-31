
import React from 'react';

const Cart = ({ items, onRemove }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
