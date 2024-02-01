import React, { useEffect, useState } from 'react';
import MyCard from '../../ui/MyCard';
import "./Cards.css";

const Cards = ({ category }) => {
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://164.92.99.180:8000/pro/get/");
        const data = await response.json();
        setState({
          isFetched: true,
          data: data.products,
          error: false
        });
        console.log('data', data);
      } catch (error) {
        setState({
          isFetched: true,
          data: [],
          error: true
        });
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (state.isFetched && state.data.length === 0 && !state.error) {
      console.log('No products found');
    }
  }, [state.isFetched, state.data, state.error]);

  const filteredProducts = state.isFetched && !state.error && Array.isArray(state.data)
  ? state.data.filter(product => {
      return product.info[0].category === category;
    })
  : [];

  

  const sortedProducts = [...filteredProducts];
sortedProducts.sort((a, b) => {
  if (a.id < b.id) return 1;
  if (a.id > b.id) return -1;
  return 0;
});

const cheapestProducts = [...filteredProducts];
cheapestProducts.sort((a, b) => a.cost - b.cost);

const expensiveProducts = [...filteredProducts];
expensiveProducts.sort((a, b) => b.cost - a.cost);

const mergedProducts = [...sortedProducts.slice(0, 4), ...cheapestProducts.slice(0, 2), ...expensiveProducts.slice(0, 2)];

const uniqueMergedProducts = mergedProducts.filter((product, index, self) => {
  return self.findIndex((p) => p.id === product.id) === index;
});

console.log(uniqueMergedProducts);


  return (
    <>
      {state.isFetched && !state.error ? (
        <ul className='products'>
          {uniqueMergedProducts.length > 0 ? (
            uniqueMergedProducts.map((product) => (
              <MyCard
                key={product.id}
                data={product}
              />
            ))
          ) : null}
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