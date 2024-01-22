import React from 'react';
import { Link } from "react-router-dom";
import { UilHeart } from '@iconscout/react-unicons';
import { UilShoppingCart } from '@iconscout/react-unicons';
import "./card.css";

function MyCard({ data }) {
  if (!data) {
    return null; // or display a loading state or placeholder component
  }
  const { id, quantity, cost,credit_12ga, time, prosent, images, info } = data;
  console.log(data);

  return (
    <>
      <Link to={`/single-page/${id}`}>
        <li>
          <div className="product-card">
            <div className="product-card-image">
              <img className="product-card-image-item" src={images} alt="rasm" />
              <button className="product-card-like">
                <UilHeart />
              </button>
            </div>
            <div className="card-info-block">
              <p className="product-card-subtitle">{info.name}</p>
              <div className="price-credit">
                <p>{Math.floor(credit_12ga).toLocaleString()} so'mdan 12 oyga</p>
              </div>
              <div className="product-card-price-info-wrapper">
                <h4 className="product-card-price-info">{cost}</h4>
                <button className="product-add-to-cart">
                  <UilShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </li>
      </Link>
      
    </>
  );
}

export default MyCard;


