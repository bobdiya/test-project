import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h3>{item.model}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice}</h3>
          <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
