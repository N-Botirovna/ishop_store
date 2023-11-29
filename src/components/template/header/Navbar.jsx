import React from 'react';
import { Link } from 'react-router-dom';
import { UilHeart } from '@iconscout/react-unicons';
import { UilCube } from '@iconscout/react-unicons';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilBars } from '@iconscout/react-unicons';
import InputField from '../../ui/InputField';
import './navbar.css';

const Navbar = () => {
  let icons = {
    "Saralangan": <UilHeart />,
    "Buyurtmalar": <UilCube />,
    "Savat": <UilShoppingCartAlt />,
    "Kirish": <UilUser />
  };

  const handleClick = (key) => {
    switch (key) {
      case "Kirish":
        window.location.href = "/register";
        break;
      case "Savat":
        window.location.href = "/shopping-cart";
        break;
      case "Buyurtmalar":
        window.location.href = "/orders";
        break;
      case "Saralangan":
        window.location.href = "/like";
        break;
      default:
        break;
    }
  };

  return (
    <div className="head">
      <div className="header-logo">
        <Link to="/" className="brand-logo">ishopstore</Link>
      </div>
      <div className="middle-header">
        <div className="header-catalog">
          <button className="header-bars"><UilBars /></button>
        </div>
        <InputField />
      </div>
      <div className="store-action-buttons">
        {Object.entries(icons).map(([key, value]) => (
          <div key={key} className="action-buttons">
            <div onClick={() => handleClick(key)}>
              {value}
              <p>{key}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;