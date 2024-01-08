import { Link } from "react-router-dom";
import { UilHeart } from '@iconscout/react-unicons'
import { UilShoppingCart } from '@iconscout/react-unicons'
import "./card.css"

function MyCard({ name, darkMode }) {
    return (
        <Link to={`/single-page/${name}`} className={`text-gray-600  ${darkMode ? 'dark' : ''}`}>
            <li className={`mb-5 ${darkMode ? 'bg-[#2B3743] text-white' : 'bg-white'}`}
            >
                <div className="product-card">
                            <div className="product-card-image">
                                <img className="product-card-image-item" src="https://picsum.photos/400" alt="rasm"/>
                                <button className="product-card-like"><UilHeart/></button>

                            </div>
                            <div className="card-info-block">
                                <p className="product-card-subtitle">NOUTBUK LENOVO IP3 15IGL05 CEL N4020</p>
                            
                                <div className="price-credit"> <p>528 000 so'mdan 12 oyga</p> </div> 
                                <div className="product-card-price-info-wrapper">
                                <h4 className="product-card-price-info">2 885 000 so'm</h4>
                                   <button className="product-add-to-cart"><UilShoppingCart/></button>
                                </div>

                            </div> 

                            

                        </div> 
            </li>
        </Link>
    );
}

export default MyCard;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { UilHeart } from '@iconscout/react-unicons';
// import { UilShoppingCart } from '@iconscout/react-unicons';
// import "./Card.css";

// function Card({ product }) {
//     const { id, name, about, cost, category, color, image } = product;

//     return (
//         <Link to={`/single-page/${id}`} className="text-gray-600">
//             <li className="mb-5">
//                 <div className="product-card">
//                     <div className="product-card-image">
//                         <-img className="product-card-image-item" src={image} alt={name} />
//                         <button className="product-card-like"><UilHeart /></button>
//                     </div>
//                     <div className="card-info-block">
//                         <p className="product-card-subtitle">{name}</p>
//                         <h4 className="product-card-price-info">{cost} so'm</h4>
//                         <div className="price-credit"> <p>100 so'mdan 12 oyga</p> </div>
//                         <div className="product-card-price-info-wrapper">
//                             <button className="product-purchase">Xarid qilish</button>
//                             <button className="product-add-to-cart"><UilShoppingCart /></button>
//                         </div>
//                     </div>
//                 </div>
//             </li>
//         </Link>
//     );
// }

// export default Card;