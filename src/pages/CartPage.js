// src/pages/CartPage.js
import React from 'react';
import Header from '../components/Header';
import './CartPage.css';

const CartPage = ({ cartItems }) => {
  return (
    <div className="cart-page">
      <Header cartCount={cartItems.length} />
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span> - <strong>${item.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
