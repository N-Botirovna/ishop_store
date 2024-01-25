import React, { useState } from 'react';
import InputField from '../../ui/InputField';
import { UilUser } from '@iconscout/react-unicons';
import image from '../../../images/logo/logoLast.png'
import './Header.css';

import i18n from '../../../i18n';
import { Link } from 'react-router-dom';

const AdmHeader = ({ onSearch, onChangeLanguage }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleChangeLanguage = (e) => {
    const language = e.target.value;
    onChangeLanguage(language);
  };

  return (
    <div className="header">
      <div className="logo header-logo">
        <Link to="/" className="brand-logo"><img className='logo' src={image} alt="ishopstore" /></Link>
      </div>
      <div className="search">
        <InputField
          value={searchText}
          onChange={handleInputChange}
          onSearch={handleSearch}
        />
      </div>
      <div className="personal-cabinet">
        <UilUser />
      </div>
      <div className="language language-selector">
        <select
          value={i18n.language}
          onChange={handleChangeLanguage}
          className="custom-select"
        >
          <option value="ru">Rus</option>
          <option value="uz-latn">Latin</option>
          <option value="uz-cyrl">Krill</option>
        </select>
      </div>
    </div>
  );
};

export default AdmHeader;