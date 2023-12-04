
import React, { useEffect, useRef } from 'react';
import { Rerousel } from 'rerousel';
import Card from './Card';
import './ProductCarousel.css';

const ProductCarousel = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardRef.current) {
        cardRef.current.next();
      }
    }, 500); //

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <Rerousel>
        {Array.from({ length: 15 }).map((_, index) => (
          <div className="myDiv" key={index}>
            {index === 0 ? <Card ref={cardRef} /> : <Card />}
          </div>
        ))}
      </Rerousel>
    </div>
  );
};

export default ProductCarousel;