import React, { useState } from 'react';
import Header from '../components/Header';
import './ProductPage.css';
import { useCart } from '../context/CartContext';

import plant1 from '../assets/plant1.jpg';
import plant2 from '../assets/plant2.jpg';
import plant3 from '../assets/plant3.jpg';
import plant4 from '../assets/plant4.jpg';
import plant5 from '../assets/plant5.jpg';
import plant6 from '../assets/plant6.jpg';

const initialPlants = [
  { id: 1, name: 'Monstera', category: 'Indoor', price: 20, image: plant1 },
  { id: 2, name: 'Ficus', category: 'Indoor', price: 25, image: plant2 },
  { id: 3, name: 'Palm Tree', category: 'Outdoor', price: 30, image: plant3 },
  { id: 4, name: 'Bamboo', category: 'Outdoor', price: 15, image: plant4 },
  { id: 5, name: 'Cactus', category: 'Succulents', price: 10, image: plant5 },
  { id: 6, name: 'Aloe Vera', category: 'Succulents', price: 12, image: plant6 },
];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [disabledButtons, setDisabledButtons] = useState([]);

  const { cart, addToCart } = useCart();

  const handleAddToCart = (plant) => {
    if (!disabledButtons.includes(plant.id)) {
      addToCart(plant);
      setDisabledButtons([...disabledButtons, plant.id]);
    }
  };

  const filteredPlants =
    selectedCategory === 'All'
      ? initialPlants
      : initialPlants.filter((plant) => plant.category === selectedCategory);

  return (
    <div className="product-page">
      <Header cartCount={cart.length} />

      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Indoor')}>Indoor</button>
        <button onClick={() => setSelectedCategory('Outdoor')}>Outdoor</button>
        <button onClick={() => setSelectedCategory('Succulents')}>Succulents</button>
      </div>

      <div className="plant-list">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>Category: {plant.category}</p>
            <p>Price: ${plant.price}</p>
            <button
              onClick={() => handleAddToCart(plant)}
              disabled={disabledButtons.includes(plant.id)}
            >
              {disabledButtons.includes(plant.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
