import React, { useEffect, useState } from 'react';
import "./AdmProducts.css";
import Pagination from '@mui/material/Pagination';

function AdmProduct({ searchText }) {
  const [order, setOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);


 

  useEffect(() => {
    fetch("http://164.92.99.180:8000/pro/get/", {
      method: "GET",
    })
      .then((res) => res.json()) 
      .then((data) => setOrder(data.products))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Haqiqatan ham ushbu elementni o'chirmoqchimisiz?");
    if (confirmed) {
      fetch(`http://164.92.99.180:8000/pro/one/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Element muvaffaqiyatli o'chirildi:", data);
        })
        .catch((error) => {
          console.error("Elementni o'chirishda xato yuz berdi:", error);
        });
    }
  };

 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = order ? order.slice(indexOfFirstProduct, indexOfLastProduct) : [];

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = () => {
    const filteredProducts = order.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredOrder(filteredProducts);
    setCurrentPage(1);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Admin Name</th>
            <th>Created Time</th>
            <th>Postavshik</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        {currentProducts.length > 0 ? (
          <tbody>
            {currentProducts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.images[0]?.image} alt="Product" />
                </td>
                <td>{item.info.name}</td>
                <td>{item.cost} so'm</td>
                <td>{item.quantity}</td>
                <td>{item.info.category}</td>
                <td>{item.admin}</td>
                <td>{item.time}</td>
                <td>{item.postavshik}</td>
                <td>Edit</td>
                <td onClick={() => handleDelete(item.id)}>Delete</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="11">Ma'lumotlar yo'q</td>
            </tr>
          </tbody>
        )}
      </table>

      {order && (
        <Pagination
        sx={{display: 'flex', justifyContent: 'flex-end', marginBlockStart: '20px'}}
          count={Math.ceil(order.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          className="pagination"
        />
      )}
    </div>
  );
}

export default AdmProduct;


