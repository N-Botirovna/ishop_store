// import React, { useState, useRef } from "react";
// import "./admProModal.css";

// function AdmProductModal({ complete, isComplete }) {
//   const [images, setImages] = useState([]);

//   const imagesRef = useRef(null);
//   const imageFormData = new FormData();

//   if (imagesRef.current && imagesRef.current.files.length > 0) {
//     imageFormData.append("image", imagesRef.current.files[0]);
//   }
//   imageFormData.append("color", "oq");
//   imageFormData.append("pro_id", 1);

//   function handlePost(e) {
//     e.preventDefault();

//     fetch("http://164.92.99.180:8000/pro/images", {
//       method: "POST",
//       body: imageFormData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Image posted successfully:", data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handlePost}
//         action="/upload"
//         method="post"
//         encType="multipart/form-data"
//       >
//         <div className="adm-product-modal">
//           <div className="images-div">
//             <div className="custom-file-container">
//               <label htmlFor="image" className="custom-file-label">
//                 +
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
                
//                 name="image"
//                 id="image"
//                 className="images"
//                 ref={imagesRef}
//               />
//             </div>
//           </div>

//           <button className="adm-submit" type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AdmProductModal;

import React, { useState, useRef } from "react";
import "./admProModal.css";

function AdmProductModal({ complete, isComplete }) {
  const [postID, setPostID] = useState(null);
  // const [images, setImages] = useState(null);

  // const handleFileInputChange = (event) => {
  //   const files = event.target.files[0];
  //   const newImages = null;

  //   for (let i = 0; i < files.length; i++) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       newImages.push(e.target.result);
  //       setImages([...newImages]);
  //     };
  //     reader.readAsDataURL(files[i]);
  //   }
  // };

  const imagesRef = useRef(null);
  const quantityRef = useRef(null);
  const costRef = useRef(null);
  const nameRef = useRef(null);
  const nameRefRu = useRef(null);
  const aboutRef = useRef(null);
  const aboutRefRu = useRef(null);
  const modelRef = useRef(null);
  const modelRefRu = useRef(null);
  const categoryRef = useRef(null);
  console.log("images c v", imagesRef);
  function handlePost(e) {
    e.preventDefault();
    const formData2 = new FormData();
    const formData3 = new FormData();

    formData3.append("quantity", quantityRef.current.value);
    formData3.append("cost", costRef.current.value);
    formData3.append("prosent", 3);
    formData3.append("tasdiq", true);
    formData3.append("admin", 1);

    fetch("http://164.92.99.180:8000/pro/post/", {
      method: "POST",
      body: formData3,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Pro/post posted successfully:", data);
        const postID = data.id;
        console.log(data.id);
        setPostID(postID);

        formData2.append("language", "Uzbek");
        formData2.append("name", nameRef.current.value);
        formData2.append("about", aboutRef.current.value);
        formData2.append("category", categoryRef.current.value);
        formData2.append("model", modelRef.current.value);
        formData2.append("product", postID);

        return fetch("http://164.92.99.180:8000/pro/info", {
          method: "POST",
          body: formData2,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Product info posted successfully:", data);

            const formDataRu = new FormData();
            formDataRu.append("language", "Rus");
            formDataRu.append("name", nameRefRu.current.value);
            formDataRu.append("about", aboutRefRu.current.value);
            formDataRu.append("category", categoryRef.current.value);
            formDataRu.append("model", modelRefRu.current.value);
            formDataRu.append("product", postID);

            console.log('product', postID);

            return fetch("http://164.92.99.180:8000/pro/info", {
              method: "POST",
              body: formDataRu,
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Pro/post posted successfully:", data);

                const productID = data.product;
                const imageFormData = new FormData();
                imageFormData.append("image", imagesRef.current.files[0]);
                imageFormData.append("color", "oq");
                imageFormData.append("pro_id", productID);

                fetch("http://164.92.99.180:8000/pro/images", {
                  method: "POST",
                  body: imageFormData,
                })
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("Image posted successfully:", data);

                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // const deleteImage = (idx) => {
  //   setImages(images.filter((y, idxY) => idxY !== idx));
  // };
  return (
    <div className={isComplete ? "none" : "completed"}>
      <form onSubmit={handlePost}  action="/upload" method="post" encType="multipart/form-data">
        <div className="adm-product-modal">
          <div>
            <label htmlFor="images" className="addImages">
              Fotosuratlarni yuklash:
            </label>
          </div>
          {/* <div style={{ backgroundColor: "#ccc", display: "flex" }}>
            {!!images &&
              !!(images.length > 0) &&
              images.map((x, idx) => (
                <div
                  style={{
                    position: "relative",
                  }}
                  key={"image-preview-index" + idx}
                >
                  <img
                    style={{
                      objectFit: "cover",
                      borderRadius: "20px",
                      marginRight: "20px",
                    }}
                    width={200}
                    height={200}
                    src={x}
                  />
                  <button
                    onClick={() => deleteImage(idx)}
                    style={{
                      backgroundColor: "#FF0000",
                      position: "absolute",
                      color: "#fff",
                      top: "-10px",
                      right: "10px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "none",
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
          </div> */}
          <div className="images-div">
            <div className="custom-file-container">
              <label htmlFor="image" className="custom-file-label">
                +
              </label>
              <input
                type="file"
                accept="image/*"
                
                name="image"
                id="image"
                className="images"
                // onChange={handleFileInputChange}
                ref={imagesRef}
              />
            </div>
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
                <textarea id="about" ref={aboutRef} />
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
                <textarea id="about" ref={aboutRefRu} />
              </div>
            </div>
          </div>
          <div className="bottom-entries">
            <div>
              <label htmlFor="category">Kategoriya: </label>
              <select name="category" id="category" ref={categoryRef}>
                <option value="Noutbooklar">Noutbuklar</option>
                <option value="Smartfonlar">Smartfonlar</option>
                <option value="Planshetlar">Planshetlar</option>
                <option value="Aksesuarlar">Aksessuarlar</option>

                <option value="Maishiy_texnika">Maishiy texnika</option>
                <option value="Atir">Atirlar</option>
                <option value="Kitoblar">Kitoblar</option>
                <option value="Texnika">Texnika</option>

                <option value="planshetlar">Avtobar</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity">Soni: </label>
              <input type="number" id="quantity" ref={quantityRef} />
            </div>

            <div>
              <label htmlFor="cost">Narx:</label>
              <input type="number" id="cost" ref={costRef} />
            </div>
          </div>

          <button className="adm-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdmProductModal;
