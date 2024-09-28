
import React from 'react';
import './Content.css'; 

const Content = () => {
  const foods = [
    {
      name: 'Kerupuk Ikan Pipih',
      description: 'Kerupuk yang terbuat dari ikan Pipih segar dengan rasa gurih dan renyah.',
      imageUrl: '/public/pipih.jpeg'
    },
    {
      name: 'Kerupuk Udang',
      description: 'Kerupuk dengan cita rasa udang yang kuat, cocok untuk makanan pendamping.',
      imageUrl: '/public/udang.jpg'
    },
    {
      name: 'Kerupuk Ikan Haruan',
      description: 'Kerupuk yang terbuat dari ikan Haruan segar dengan rasa gurih dan renyah.',
      imageUrl: '/public/pipih.jpeg'
    }
  ];

  return (
    <div className="content">
      {foods.map((food, index) => (
        <div className="food-item" key={index}>
          <img src={food.imageUrl} alt={food.name} className="food-image" />
          <h3 className="food-name">{food.name}</h3>
          <p className="food-description">{food.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
