import React from 'react';
import './admProModal.css';

function AdmProductModal({ complete, isComplete }) {
  function handlePost(e) {
    e.preventDefault();

    const formData = new FormData();
    const formData1 = new FormData();
    const formData2 = new FormData();
    const imagesInput = document.getElementById('images');
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('price');
    const categoryInput = document.getElementById('category');

    formData1.append('image', imagesInput.files[0]);
    formData1.append('color', "black");
    formData1.append('pro_id', 1);
    formData2.append('language', 'uz')
    formData2.append('name', "name");
    formData2.append('about', 'about');
    formData2.append('category', categoryInput.value);
    formData2.append('model', 'model')

    fetch('http://164.92.99.180:8000/pro/images', {
      method: 'POST',
      body: formData1
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Image posted successfully:', data);

      })
      .catch((error) => {
        console.error('Error posting image:', error);

      });

    fetch('http://164.92.99.180:8000/pro/info/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173'
      },
      body: formData2,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product info posted successfully:', data);
      })
      .catch((error) => {
        console.error('Error posting product info:', error);

      });

    const postData = {
      quantity: 10,
      cost: priceInput.value,
      prosent: 0,
      tasdiq: true,
      admin: 1,
    };

    fetch('http://164.92.99.180:8000/pro/post/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173'
      },
      body: JSON.stringify(           ),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product posted successfully:', data);

      })
      .catch((error) => {
        console.error('Error posting product:', error);

      });

    const category = categoryInput.value;
    const productCategoryData = {
      image: imagesInput.files[0],
      is_rec: false,
      product: 12,
      category: 'Elektronika',
      admin: 1
    };

    formData.append("image", imagesInput.files[0])
    formData.append("is_rec", false)
    formData.append("product", 12)
    formData.append("category", 'Elektronika')
    formData.append("admin", 1)

    fetch(`http://164.92.99.180:8000/pro/products/Elektronika/`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product posted successfully by category:', data);
      })
      .catch((error) => {
        console.error('Error posting product by category:', error);
      });
  }

  console.log('v', complete, isComplete);

  return (
    <div className={isComplete ? 'none' : 'completed'}>
      <form onSubmit={handlePost}>
        <div className="adm-product-modal">
          <h2>Fotosuratlarni yuklash</h2>

          <div>
            <label htmlFor="images">Fotosuratlarni yuklash:</label>
            <input type="file" id="images" />
          </div>
          <div>
            <label htmlFor="productNameUz">Tovar nomi (o'zbek tili):</label>
            <input type="text" id="productNameUz" />
          </div>
          <div>
            <label htmlFor="productNameRu">Tovar nomi (rus tili):</label>
            <input type="text" id="productNameRu" />
          </div>
          <div>
            <label htmlFor="productDescriptionUz">Tovar tavsifi (o'zbektili):</label>
            <input type="text" id="productDescriptionUz" />
          </div>
          <div>
            <label htmlFor="productDescriptionRu">Tovar tavsifi (rus tili):</label>
            <input type="text" id="productDescriptionRu" />
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" />
          </div>
          <div>
            <label htmlFor="price">Narxi:</label>
            <input type="number" id="price" />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select id="category">
              <option value="Elektronika">Elektronika</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdmProductModal;