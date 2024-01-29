import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/template/header/Navbar';
import Menu from '../../components/template/header/Menu';
import Footer from '../../components/template/footer/Footer';
import MyCard from '../../components/ui/MyCard';
import './categories.css';
import CategList from '../../components/ui/CategList';
import Pagination from '@mui/material/Pagination';

function Categories(props) {
  const { categoryname } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://164.92.99.180:8000/pro/get?page=${page}`);
        const data = await response.json();
        console.log(data);

        const filtered = data.products.filter((item) => {
          const {
            category,
            subcategory,
            categ_at,
            categ_a,
            categ_k,
            categ_m,
            categ_n,
            categ_s,
            categ_t,
          } = item.info;

          return (
            category === categoryname ||
            subcategory === categoryname ||
            categ_at === categoryname ||
            categ_a === categoryname ||
            categ_k === categoryname ||
            categ_m === categoryname ||
            categ_n === categoryname ||
            categ_s === categoryname ||
            categ_t === categoryname
          );
        });

        setFilteredData(filtered);
        console.log('fil', filtered);

        const uniqueCategories = Array.from(
          new Set(data.products.map((item) => item.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categoryname, page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const cardsPerPage = 20;
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  console.log('miune0', filteredData);

  return (
    <div>
      <Navbar />
      <Menu />
      <div className="container category-wrapper">
        <div className="categories-list">
          <h3>{categoryname}</h3>
          <CategList name= {categoryname}/>
        </div>
        <div className="left-holder">
          
          <ul className="pro-list">
            {paginatedData.length > 0 ? (
              paginatedData.map((product) => (
                <li className="li" key={product.id}>
                  <MyCard data={product} />
                </li>
              ))
            ) : (
              <p>No products found</p>
            )}
          </ul>
          <div className="pagnation">
            <Pagination
            count={Math.ceil(filteredData.length / cardsPerPage)}
            page={page}
            onChange={handleChangePage}
          />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Categories;
