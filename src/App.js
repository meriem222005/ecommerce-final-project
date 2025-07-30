import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';  // <-- ton composant Cart ici
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
</CartProvider>

  );
}

export default App;
