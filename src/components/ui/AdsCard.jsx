import { Link } from "react-router-dom";
import { UilHeart } from '@iconscout/react-unicons'
import { UilShoppingCart } from '@iconscout/react-unicons'
import "./card.css"
import acer from "../../../src/images/offers/redmi.png"

function AdsCard({ name, darkMode }) {
    return (
        <Link to={`/single-page/${name}`} className={`text-gray-600  ${darkMode ? 'dark' : ''}`}>
            <li className={`mb-5 ${darkMode ? 'bg-[#2B3743] text-white' : 'bg-white'}`}
            >
                <div className="product-card offers">
                            <div className="product-card-image">
                                <img className="product-card-image-item" src={acer} alt="rasm"/>
                                <button className="product-card-like"><UilHeart/></button>

                            </div>
                            <div className="card-info-block">
                                <p className="product-card-subtitle">Noutbuk Lenovo IP3 15IGL05 CEL N4020</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium voluptate nostrum consectetur, cupiditate laboriosam.</p>
                                <div className="price-credit"> <p>100 so'mdan 12 oyga</p> </div> 

                            
                            </div>
                            

                        </div> 
            </li>
        </Link>
    );
}

export default AdsCard;