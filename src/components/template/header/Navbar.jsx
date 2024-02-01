import React from 'react';
import { Link } from 'react-router-dom';
import { UilHeart } from '@iconscout/react-unicons';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilBars } from '@iconscout/react-unicons';
import InputField from '../../ui/InputField';
import { useTranslation } from 'react-i18next';
import './navbar.css';
import i18n from '../../../i18n';
import image from '../../../../src/images/logo/logoLast.png'

const Navbar = () => {
  const { t } = useTranslation();

  let icons = {
    "Saralangan": <UilHeart />,

    "Savat": <UilShoppingCartAlt />,
    "Kirish": <UilUser />
  };

  const handleClick = (key) => {
    switch (key) {
      case "Kirish":
        window.location.href = "/register";
        break;
      case "Savat":
        window.location.href = "/basket";
        break;
      case "Saralangan":
        window.location.href = "/like";
        break;
      default:
        break;
    }
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="head">
      <div className="header-logo">
        <Link to="/" className="brand-logo"><img className='logo' src={image} alt="ishopstore" /></Link>
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
              <p>{t(key)}</p> 
            </div>
          </div>
        ))}
        <div className="language-selector">
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="custom-select"
          >
            <option value="ru">Русский</option>
            <option value="uz-latn">O'zbek</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;