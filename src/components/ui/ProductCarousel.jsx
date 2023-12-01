import React, { useState, useEffect } from 'react';
import CarouselSlideItem from './CarouselSlideItem';
import "./proCarousel.css"

const slideWidth = 30;

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const prevClick = (jump = 1) => {
    setActiveIdx((prevIdx) => (prevIdx - jump + products.length) % products.length);
  };

  const nextClick = (jump = 1) => {
    setActiveIdx((prevIdx) => (prevIdx + jump) % products.length);
  };

  const items = products.map((product, idx) => {
    const position = idx < activeIdx ? idx : idx - activeIdx;
    const item = {
      styles: {
        transform: `translateX(${position * slideWidth}rem)`,
      },
      ...product,
    };

    if (position === products.length - 1 || position === products.length + 1) {
      item.styles = { ...item.styles, filter: 'grayscale(1)' };
    } else if (position !== products.length) {
      item.styles = { ...item.styles, opacity: 0 };
    }

    return item;
  });

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((item, idx) => (
              <CarouselSlideItem key={idx} item={item} />
            // console.log(item.style)
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;