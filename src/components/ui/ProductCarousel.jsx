import React, { useEffect, useRef } from 'react';
import { Rerousel } from 'rerousel';
import './ProductCarousel.css';

const ProductCarousel = ({ item }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardRef.current) {
        cardRef.current.next();
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <Rerousel>
        {Array.from({ length: 15 }).map((_, index) => (
          <div className="myDiv" key={index}>
            {index === 0 ? React.cloneElement(item, { ref: cardRef }) : item}
          </div>
        ))}
      </Rerousel>
    </div>
  );
};

export default ProductCarousel;