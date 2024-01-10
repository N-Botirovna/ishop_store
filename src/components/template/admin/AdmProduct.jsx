import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import './AdmProduct.css';
import "./admProducts.css"
function AdmProduct() {
//   const rows = [
//     { id: 1, number: 1, image: 'image1.jpg', productname: 'Product 1 Noutbuk HP intel core i5 13th 256/8GB', price: 10, quantity: 5, category: 'Category 1', adminName: 'Admin 1', createdTime: '2022-01-01', lastUpdated: '2022-01-03' },
//     { id: 2, number: 2, image: 'image2.jpg', productname: 'Product 2', price: 20, quantity: 10, category: 'Category 2', adminName: 'Admin 2', createdTime: '2022-01-02', Postavshik: '2022-01-04' },
//     { id: 3, number: 1, image: 'image1.jpg', productname: 'Product 1 Noutbuk HP intel core i5 13th 256/8GB', price: 10, quantity: 5, category: 'Category 1', adminName: 'Admin 1', createdTime: '2022-01-01', lastUpdated: '2022-01-03' },
//     { id: 4, number: 2, image: 'image2.jpg', productname: 'Product 2', price: 20, quantity: 10, category: 'Category 2', adminName: 'Admin 2', createdTime: '2022-01-02', Postavshik: '2022-01-04' },
    
//   ];

  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch("http://164.92.99.180:8000/pro/get/", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data.data));
  }, []);


    function handleDelete(id) {
        fetch(`http://164.92.99.180:8000/pro/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Item deleted successfully:", data);
            // Iltimos, o'chirilgan elementni qaytarmasdan sahifani yangilang
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            // Iltimos, xatolik xabarini foydalanuvchiga ko'rsating
          });
      }
 
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
        {/* <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.number}</td>
              <td>{row.image}</td>
              <td>{row.productname}</td>
              <td>{row.price}</td>
              <td>{row.quantity}</td>
              <td>{row.category}</td>
              <td>{row.adminName}</td>
              <td>{row.createdTime}</td>
              <td>{row.Postavshik}</td>
              <td>Edit</td>
              <td onClick={() => handleDelete(row.id)}>Del</td>              
            </tr>
          ))}
        </tbody> */}
        {order ? (
          order.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.image}</td>
                <td>{item.name}</td>
                <td>{item.cost}</td>
                <td>{item.quantity}</td>
                <td>{item.category}</td>
                <td>{item.admin}</td>
                <td>{item.time}</td>
                <td>{item.postavshik}</td>
                <td>Edit</td>
                <td onClick={() => handleDelete(item.id)}>Delete</td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody>
            <tr>
              <td>Ma'lumotlar yo'q</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default AdmProduct;