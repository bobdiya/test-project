import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, dispatch } = useContext(CartContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    dispatch({ type: 'CLEAR_CART' });
    navigate('/');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handleCheckout}>Confirm Purchase</button>
    </div>
  );
};

export default Checkout;
