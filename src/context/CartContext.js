// src/context/CartContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(item => item.id === product.id);
      if (productIndex !== -1) {
        // produit déjà dans le panier, on incrémente la quantité
        const newCart = [...prevCart];
        newCart[productIndex].quantity += 1;
        return newCart;
      } else {
        // produit nouveau, on l'ajoute avec quantité 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Ajouter une fonction pour incrémenter la quantité (utile pour le bouton +)
  const incrementQuantity = (productId) => {
    setCart(prevCart => {
      return prevCart.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };
  const decrementQuantity = (productId) => {
  setCart(prevCart => {
    return prevCart
      .map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0); // supprime si quantité tombe à 0
  });
};

const removeFromCart = (productId) => {
  setCart(prevCart => prevCart.filter(item => item.id !== productId));
};


  const totalCost = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  return (
 <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart, totalCost, totalItems }}>
  {children}
</CartContext.Provider>

);

};

export const useCart = () => useContext(CartContext);
