import React, { useState, useEffect } from 'react';
import './Carousel.css';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      id: 1,
      src: img1,
      alt: 'Image 1',
    },
    {
      id: 2,
      src: img2,
      alt: 'Image 2',
    },
    {
      id: 3,
      src: img3,
      alt: 'Image 3',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={image.id}
          className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
          src={image.src}
          alt={image.alt}
        />
      ))}
      <button className="carousel-button previous" onClick={goToPreviousSlide}>
      &lsaquo;
      </button>
      <button className="carousel-button next" onClick={goToNextSlide}>
      &rsaquo;
      </button>
    </div>
  );
};

export default Carousel;