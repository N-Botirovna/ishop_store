import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import './AdmProduct.css';
import "./admProducts.css"
function AdmProduct() {

  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch("http://164.92.99.180:8000/pro/get/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setOrder(data.products));
  }, []);
  console.log('order', order);
  
  console.log(order);


    function handleDelete(id) {
        fetch(`http://164.92.99.180:8000/pro/one/${id}`, {
          method: "DELETE",
          
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Item deleted successfully:", data);
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
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
        
        {order ? (
          order.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td><img src={`http://164.92.99.180:8000${item.image.split("'")[5]}`}/></td>
                <td>{item.info.name}</td>
                <td>{item.cost}</td>
                <td>{item.quantity}</td>
                <td>{item.info.category}</td>
                <td>{item.admin}</td>
                <td>{item.time}</td>
                <td>{item.postavshik}</td>
                <td>Edit</td>
                <td onClick={() => handleDelete(item.id)}>Delete</td>
                {console.log(item.image.split("'")[5])}


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


// import React, { useState, useEffect } from 'react';

// const AdmProduct = () => {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch('http://164.92.99.180:8000/pro/get/');
//         const data = await response.json();
//         setProduct(data.products[0]);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     fetchProduct();
//   }, []);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   let imageUrl = '';
//   try {
//     const imagesArray = JSON.parse(product.image);
//     imageUrl = imagesArray[0].image;
//   } catch (error) {
//     console.error('Error parsing image:', error);
//   }

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <img src={`http://164.92.99.180:8000${imageUrl}`} alt="Product" />
//       <p>ID: {product.id}</p>
//       <p>Quantity: {product.quantity}</p>
//       <p>Cost: {product.cost}</p>
//       {/* Add other product details rendering here */}
//     </div>
//   );
// };

// export default AdmProduct;
