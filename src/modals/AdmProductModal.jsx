import React, { useState, useRef } from 'react';
import './admProModal.css';

function AdmProductModal({ complete, isComplete }) {
  const [postID, setPostID] = useState(null);
  const [colors, setColors] = useState([]);

  const imagesRefs = useRef([]);
  const quantityRef = useRef(null);
  const costRef = useRef(null);
  const prosentRef = useRef(null);
  const nameRef = useRef(null);
  const nameRefRu = useRef(null);
  const aboutRef = useRef(null);
  const aboutRefRu = useRef(null);
  const modelRef = useRef(null);
  const modelRefRu = useRef(null);

  function handlePost(e) {
    e.preventDefault();
    const formData2 = new FormData();
    const formData3 = new FormData();
    const numColors = colors.length;

    formData3.append('quantity', quantityRef.current.value);
    formData3.append('cost', costRef.current.value);
    formData3.append('prosent', prosentRef.current.value);
    formData3.append('tasdiq', true);
    formData3.append('admin', 2);

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
        formData2.append('name', nameRef.current.value);
        formData2.append('about', aboutRef.current.value);
        formData2.append('category', 'Noutbooklar');
        formData2.append('model', modelRef.current.value);
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

        for (let i = 0; i < numColors; i++) {
          const color = colors[i];
          const imagesInput = imagesRefs.current[i];

          for (let j = 0; j < imagesInput.files.length && j < 5; j++) {
            const imageFormData = new FormData();
            imageFormData.append('image', imagesInput.files[j]);
            imageFormData.append('color', color);
            imageFormData.append('pro_id', productID);

            fetch('http://164.92.99.180:8000/pro/images', {
              method: 'POST',
              body: imageFormData,
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Image posted successfully:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          }
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleColorChange = (index, event) => {
    const updatedColors = [...colors];
    updatedColors[index] = event.target.value;
    setColors(updatedColors);
  };

  const handleImageChange = (index, event) => {
    const updatedImagesRefs = [...imagesRefs.current];
    updatedImagesRefs[index] = event.target;
    imagesRefs.current = updatedImagesRefs;
  };

  const renderColorInputs = () => {
    const colorInputs = [];
    for (let i = 0; i < 3; i++) {
      colorInputs.push(
        <div key={i}>
          <label htmlFor={`color${i}`}>Rang {i + 1}:</label>
          <input
            type="text"
            id={`color${i}`}
            value={colors[i] || ''}
            onChange={(e) => handleColorChange(i, e)}
            className= "color"
          />
          <div className="images-div">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="custom-file-container">
                <label htmlFor={`image${i}`} className="custom-file-label"> + </label>
                <input
                  type="file"
                  accept="image/*"
                  id={`image${i}`}
                  ref={(ref) => (imagesRefs.current[i] = ref)}
                  onChange={(e) => handleImageChange(i, e)}
                  className="images"
                />
                
              </div>
            ))}
          </div>
        </div>
      );
    }
    return colorInputs;
  };

  console.log('v', complete, isComplete);

  return (
    <div className={isComplete ? 'none' : 'completed'}>
      <form onSubmit={handlePost}>
        <div className="adm-product-modal">

          <div>
            <label htmlFor="images" className='addImages'>Fotosuratlarni yuklash:</label>
            {renderColorInputs()}
          </div>

          <h2>Tovar ma'lumotlari</h2>

          <div className="abouts">
            <div className="abouts-right">
              <div>
                <label htmlFor="name">Mahsulot nomi:</label>
                <input type="text" id="name" ref={nameRef} />
              </div>

              <div>
                <label htmlFor="model">Model:</label>
                <input type="text" id="model" ref={modelRef} />
              </div>

              <div>
                <label htmlFor="about">Tavsifi:</label>
                <input type="text" id="about" placeholder='UZBEK' ref={aboutRef} />
              </div>
            </div>
            <div className="abouts-left">
              <div>
                <label htmlFor="name">Mahsulot nomi(rus tilida):</label>
                <input type="text" id="name" ref={nameRefRu} />
              </div>

              <div>
                <label htmlFor="model">Model(rus tilida):</label>
                <input type="text" id="model" ref={modelRefRu} />
              </div>

              <div>
                <label htmlFor="about">Tavsifi(rus tilida):</label>
                <input type="text" id="about" placeholder='UZBEK' ref={aboutRefRu} />
              </div>
            </div>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdmProductModal;