// src/components/Header.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'; // Pour la navigation

const Header = () => {
  const { cart } = useCart();

  return (
    <header>
      <h1>Bienvenue</h1>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Accueil</Link>
        <Link to="/products">Produits</Link>
        <Link to="/Cart">  Carts</Link>

      </nav>
      <p>🛒 Panier : {cart.length} article(s)</p>
    </header>
  );
};

export default Header;
