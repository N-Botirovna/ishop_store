import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  const categories = [
    {
      name: 'Noutbooklar',
      subcategories: ['Macbook', 'HP', 'Lenova','Acer', 'Samsung',  'Dell','MSI','Asus', 'boshqa'],
    },
    {
      name: 'Smartfonlar',
      subcategories: ['Apple','Samsung', 'Honor', 'Xiaomi', 'Vivo', 'Realme', 'Huawei', 'OPPO', 'Tecno', 'Infinix', 'Noney', 'Planshetlar', 'boshqa'],
    },
    {
      name: 'Aksesuarlar',
      subcategories: [
        'Microfon',
        'Klaviatura',
        'Sumka',
        'Mish',
        'Printer',
        'Naushnik',
        'boshqa',
      ],
    },
    {
      name: 'Maishiy texnika',
      subcategories: ['Changyutgich', 'Kuller', 'Dazmol', 'Televizor', 'Muzlatgich', 'Kir yuvish mashinasi', 'konditsioner', 'Gaz plita', 'boshqa'],
    },

    
    {
      name: 'Atir',
      subcategories: ['Ayol', 'Erkak'],
    },
    {
      name: 'Kitoblar',
      subcategories: ['Diniy', 'Badiiy'],
    },
    {
      name: 'Avtobar',
      subcategories: ['Avtobar'],
    },
   
  ];

   const [categ, setCateg] = useState();
   const [subcateg, setSubcateg] = useState();


   const handleCategSelect = (c_name)=>{
        setCateg(c_name)
        
   }
   const handleSubCategSelect = (c_name)=>{
    setSubcateg(c_name)
}

return (
  <div className='header-menu'>
    {categories.map((category, index) => (
      <div key={index} className={`category `}>
        <Link to={`/categories/${category.name}`}>
          <p onClick={() => handleCategSelect(category.name)}>{category.name}</p>
        </Link>
        <ul className="subcategories">
          {category.subcategories.map((sub, i) => (
            <Link to={`/categories/${sub}`}>
            <li key={i} onClick={() => handleSubCategSelect(sub)}>{sub}</li>
            </Link>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
};

export default Menu;