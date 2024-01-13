import React, { useState, useRef } from 'react';
import './admProModal.css';

function AdmProductModal({ complete, isComplete }) {
  const [postID, setPostID] = useState(null);
  const imagesRef = useRef(null);
  const quantityRef = useRef(null);
  const costRef = useRef(null);
  const prosentRef = useRef(null);
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const modelRef = useRef(null);

  function handlePost(e) {
    e.preventDefault();

    const formData1 = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();

    const imagesInput = imagesRef.current;
    const quantityInput = quantityRef.current;
    const costInput = costRef.current;
    const prosentInput = prosentRef.current;
    const nameInput = nameRef.current;
    const aboutInput = aboutRef.current;
    const modelInput = modelRef.current;

    formData3.append('quantity', quantityInput.value);
    formData3.append('cost', costInput.value);
    formData3.append('prosent', prosentInput.value);
    formData3.append('tasdiq', true);
    formData3.append('admin', 1);

    fetch('http://164.92.99.180:8000/pro/post/', {
      method: 'POST',
      body: formData3,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Pro/post posted successfully:', data);
        const postID = data.id;
        console.log(data.id);
        setPostID(postID);

        formData2.append('language', 'Uzbek');
        formData2.append('name', nameInput.value);
        formData2.append('about', aboutInput.value);
        formData2.append('category', 'Elektronika');
        formData2.append('model', modelInput.value);
        formData2.append('product', postID);

        return fetch('http://164.92.99.180:8000/pro/info', {
          method: 'POST',
          body: formData2,
        });
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product info posted successfully:', data);
        const productID = data.product;


        formData1.append('image', imagesInput.files[0]);
        formData1.append('color', 'black');
        formData1.append('pro_id', productID);


        return fetch('http://164.92.99.180:8000/pro/images', {
          method: 'POST',
          body: formData1,
        });
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Image posted successfully:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
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
            <input type="file" id="images" ref={imagesRef} />
          </div>

          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" ref={quantityRef} />
          </div>

          <div>
            <label htmlFor="cost">Cost:</label>
            <input type="number" id="cost" ref={costRef} />
          </div>

          <div>
            <label htmlFor="prosent">Prosent:</label>
            <input type="number" id="prosent" ref={prosentRef} />
          </div>

          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" ref={nameRef} />
          </div>

          <div>
            <label htmlFor="about">About:</label>
            <input type="text" id="about" ref={aboutRef} />
          </div>

          <div>
            <label htmlFor="model">Model:</label>
            <input type="text" id="model" ref={modelRef} />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdmProductModal;