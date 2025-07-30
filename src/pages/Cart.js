import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, totalCost, totalItems } = useCart();

  const handleCheckout = () => {
    alert("Coming Soon !");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Mon Panier</h2>

      <Link to="/products">
        <button
          style={{
            marginBottom: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Continuer vos achats
        </button>
      </Link>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id + '-' + item.quantity}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px',
                  borderBottom: '1px solid #ccc',
                  paddingBottom: '10px',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '15px' }}
                />
                <div style={{ flexGrow: 1 }}>
                  <strong>{item.name}</strong>
                  <div>Prix unitaire : {item.price.toFixed(2)} TND</div>
                  <div>Quantité : {item.quantity}</div>
                  <div>Sous-total : {(item.price * item.quantity).toFixed(2)} TND</div>
                </div>
                <button
                  onClick={() => decrementQuantity(item.id)}
                  style={{ padding: '5px 10px', marginLeft: '10px', fontSize: '20px', cursor: 'pointer' }}
                >
                  -
                </button>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  style={{ padding: '5px 10px', marginLeft: '10px', fontSize: '20px', cursor: 'pointer' }}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: '5px 10px',
                    marginLeft: '10px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#ff4d4d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                  }}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <hr />
          <p><strong>Articles totaux :</strong> {totalItems}</p>
          <p><strong>Coût total :</strong> {totalCost.toFixed(2)} TND</p>

          <button
            onClick={handleCheckout}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '18px',
              cursor: 'pointer',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
