import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './categList.css';

function CategList({ name }) {
    const categories = [
        {
          name: 'Noutbooklar',
          subcategories: ['Macbook', 'HP', 'Lenova','Acer', 'Samsung',  'Dell','MSI','Asus', 'boshqa'],
        },
        {
          name: 'Smartfonlar',
          subcategories: ['Apple','Samsung', 'Honor', 'Xiaomi', 'Vivo', 'Realme', 'Huawei', 'OPPO', 'Tecno',  'Planshetlar', 'boshqa'],
        },
        {
          name: 'Aksesuarlar',
          subcategories: [
            'Microfon',
            'Klaviatura',
            'Sumka',
            'Sichqoncha',
            'Printer',
            'Quloqchin',
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

  let filteredCategories = categories.filter(category => category.name === name );

 

if (filteredCategories.length === 0) {
  const matchedCategory = categories.find(category => category.subcategories.includes(name));
  if (matchedCategory) {
    console.log(`Kategoriya topildi: ${matchedCategory.name}`);
    console.log(`Subkategoriyalar: ${matchedCategory.subcategories.join(', ')}`);
    filteredCategories = [matchedCategory];
    
  } else {
    console.log(`Kategoriya topilmadi: ${name}`);
  }
filteredCategories = [matchedCategory];
}


  return (
    <div className="categ-menu">
      <p className='p'>Kategoriyalar</p>
      {filteredCategories.map((category, index) => (
        <div key={index} className="category list-category">
          
          <ul className="subcategoriy">
              {category.subcategories.map((sub, i) => (
                <Link to={`/categories/${sub}`} key={i}>
                  <li >{sub}</li>
                </Link>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
}

export default CategList;