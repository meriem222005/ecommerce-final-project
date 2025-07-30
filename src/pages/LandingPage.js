// src/pages/LandingPage.js
import React from 'react';
import './LandingPage.css';
import backgroundImage from '../assets/img1.jpg';

function LandingPage() {
  return (
    <div className="landing-page" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1>MyShop</h1>
      <p>Welcome to MyShop, your favorite place to find great products at great prices!</p>
      <a href="/products">
        <button style={{ padding: '10px 20px', fontSize: '18px' }}>Get Started</button>
      </a>
    </div>
  );
}

export default LandingPage;
