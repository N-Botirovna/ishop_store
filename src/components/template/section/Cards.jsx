import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyCard from '../../ui/MyCard';
import "./Cards.css";

const Cards = ({ category }) => {
  const [state, setState] = useState({
    isFetched: false,
    data: {},
    error: false
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://164.92.99.180:8000/pro/get/', {
          params: {
            category: category 
          }
        });
        setState({
          isFetched: true,
          data: response.data,
          error: false
        });
      } catch (error) {
        setState({
          isFetched: true,
          data: {},
          error: true
        });
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, [category]);

  const filteredProducts = state.isFetched && !state.error && Array.isArray(state.data.products)
    ? state.data.products.filter(product => product.info.category === category)
    : [];

    console.log('filter', filteredProducts);

  const sortedProducts = [...filteredProducts];
  sortedProducts.sort((a, b) => {
    if (a.id < b.id) return 1;
    if (a.id > b.id) return -1;
    return 0;
  });
  console.log('sort', sortedProducts);

  const cheapestProducts = [...filteredProducts];
  cheapestProducts.sort((a, b) => a.cost - b.cost);
  console.log('cheap', cheapestProducts);

  const expensiveProducts = [...filteredProducts];
  expensiveProducts.sort((a, b) => b.cost - a.cost);
  console.log('exp ', expensiveProducts);

  const mergedProducts = [...sortedProducts.slice(0, 4), ...cheapestProducts.slice(0, 2), ...expensiveProducts.slice(0, 2)];

  console.log('mergedProducts:', mergedProducts);

  return (
    <>
      {state.isFetched && !state.error ? (
        <ul className='products'>
          {mergedProducts.length > 0 ? (
            mergedProducts.map((product) => (
              <MyCard
                key={product.id} // Use the product's ID as the key
                data={product}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </ul>
      ) : state.isFetched && state.error ? (
        <p>Error fetching data</p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Cards;