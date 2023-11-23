import { Link } from "react-router-dom";
import { UilHeart } from '@iconscout/react-unicons'
import { UilShoppingCart } from '@iconscout/react-unicons'
import "./card.css"

function Card({ name, darkMode }) {
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
                                <p className="product-card-subtitle">Qalam</p>
                                <div className="price-credit"> <p>100 so'mdan 12 oyga</p> </div> 
                                <div className="product-card-price-info-wrapper">
                                   <h4 className="product-card-price-info">10000 so'm</h4>
                                   <button className="product-add-to-cart"><UilShoppingCart/></button>
                                </div>

                            </div>
                            

                        </div> 
            </li>
        </Link>
    );
}

export default Card;