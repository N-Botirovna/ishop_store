import React from 'react';
import InputField from '../../ui/InputField';
import { UilUser } from '@iconscout/react-unicons';
import './Header.css';

import i18n from '../../../i18n';
import { Link } from 'react-router-dom';

function AdmHeader() {
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };
  return (
    <div className="header">
      
        <div className="logo header-logo">
            <Link to="/" className="brand-logo">ishopstore</Link>
        </div>
        <div className="search">
          <InputField/>
        </div>
        <div className="personal-cabinet">
            <UilUser/>
        </div>
        <div className="language language-selector">
        <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="custom-select"
          >
            <option value="ru">Rus</option>
            <option value="uz-latn">Latin</option>
            <option value="uz-cyrl">Krill</option>
          </select>
        </div>
      
    </div>
  );
}

export default AdmHeader;