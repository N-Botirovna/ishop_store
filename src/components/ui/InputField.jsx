import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import './InputField.css';

const InputField = ({ type, name, placeholder, btnType, onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="header-search">
      <div className="search-block">
        <input
          className="search-input-component"
          type={type || 'text'}
          placeholder={placeholder || ''}
          name={name || ''}
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <button className="header-search-button" type={btnType || 'submit'} onClick={onSearch}>
        <UilSearch className="search" />
      </button>
    </div>
  );
};

export default InputField;