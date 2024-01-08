import React from 'react';
import { UilHeart } from '@iconscout/react-unicons';
import { UilShoppingCart } from '@iconscout/react-unicons'

import Quloqchin from "../../images/Новая папка/quloqchin.jpg"
import "./card.css"

function Accessuar() {
    return (
        
            <div className="product-card">
                            <div className="product-card-image">
                                <img className="product-card-image-item" src={Quloqchin} alt="rasm"/>
                                <button className="product-card-like"><UilHeart/></button>

                            </div>
                            <div className="card-info-block">
                                <p className="product-card-subtitle">Aweir N760BD</p>
                            
                                <div className="price-credit"> <p>528 000 so'mdan 12 oyga</p> </div> 
                                <div className="product-card-price-info-wrapper">
                                <h4 className="product-card-price-info">2 885 000 so'm</h4>
                                   <button className="product-add-to-cart"><UilShoppingCart/></button>
                                </div>

                            </div> 

                            

                        </div> 
        
    );
}

export default Accessuar;


