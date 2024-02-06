import React from 'react';
import { Link } from "react-router-dom";
import "./card.css";
import BasketIcon from './Basket';
import Heart from './Heart';

function MyCard({ data }) {
  if (!data) {
    return null; 
  }
  const { id, quantity, cost,credit_12ga, time, prosent, images, info } = data;

  return (
    <>
      <Link to={`/single-page/${id}` } >
        <li>
          <div className="product-card">
            <div className="product-card-image">
            <img className="product-card-image-item" src={images.length > 0 ? images[0].image : ''} alt="rasm" />
              <button className="product-card-like" >
                <Heart p={""}/>
              </button>
            </div>
            <div className="card-info-block">
              <p className="product-card-subtitle">{info[0].name}</p>
              <div className="bottom">
                <div className="price-credit">
                <p>{Math.floor(credit_12ga).toLocaleString()} so'mdan 12 oyga</p>
              </div>
              <div className="product-card-price-info-wrapper">
                <h4 className="product-card-price-info">{cost}</h4>
                <button className="product-add-to-cart" >
                  <BasketIcon p={""}/>
                </button>
              </div>
              </div>
            </div>
          </div>
        </li>
      </Link>
      
    </>
  );
}

export default MyCard;


