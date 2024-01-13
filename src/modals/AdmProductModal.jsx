import React from 'react';
import './admProModal.css';

function AdmProductModal({ complete, isComplete }) {
  function handlePost(e) {
    e.preventDefault();

    const formData = new FormData();
    const formData1 = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();

    const imagesInput = document.getElementById('images');

    formData3.append('quantity', 45);
    formData3.append('cost', 20000);
    formData3.append('prosent', 3);
    formData3.append('tasdiq', true);
    formData3.append('admin', 1);



    fetch('http://164.92.99.180:8000/pro/post/', {
      method: 'POST',
      body: formData3,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Pro/post posted successfully:', data);

      })
      .catch((error) => {
        console.error('Error posting product:', error);

      });
    formData2.append('language', 'Uzbek')
    formData2.append('name', "name");
    formData2.append('about', 'about');
    formData2.append('category', 'Elektronika');
    formData2.append('model', 'model')

    fetch('http://164.92.99.180:8000/pro/info', {
      method: 'POST',

      body: formData2,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product info posted successfully:', data);
      })
      .catch((error) => {
        console.error('Error posting product info:', error);

      });

    formData1.append('image', imagesInput.files[0]);
    formData1.append('color', "black");
    formData1.append('pro_id[]', 1);


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

    formData.append("image", imagesInput.files[0])
    formData.append("is_rec", false)
    formData.append("product[]", 12)
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdmProductModal;