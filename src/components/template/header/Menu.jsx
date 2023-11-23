import React from 'react';
import "./menu.css"
const Menu = () => {
  const renderLaptops = () => {
    const laptops = [];
    for (let i = 0; i < 10; i++) {
      laptops.push(<p key={i}>Noutbuk</p>);
    }
    return laptops;
  };

  return <div className='header-menu'>{renderLaptops()}</div>;
};

export default Menu;