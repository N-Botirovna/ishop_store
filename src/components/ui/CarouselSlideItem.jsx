import React from 'react';
import "./proCarousel.css"

const CarouselSlideItem = ({ item }) => {
  return (
    <li className="carousel__slide-item" >
      <div className="carousel__slide-item-img-link">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </li>
  );
};

export default CarouselSlideItem;