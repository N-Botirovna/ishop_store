import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SinglePage.css";
import Navbar from "../../components/template/header/Navbar";
import ProductCarousel from "../../components/ui/ProductCarousel";
import Footer from "../../components/template/footer/Footer";
import MyCard from "../../components/ui/MyCard";
import { UilHeart } from "@iconscout/react-unicons";
function SinglePage() {
  const { id } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: {},
    error: false,
  });

  const [selectedOption, setSelectedOption] = useState(3);

  const handleSliderChange = (e) => {
    setSelectedOption(parseInt(e.target.value));
  };

  useEffect(() => {
    axios
      .get(`http://164.92.99.180:8000/pro/one/${id}`)
      .then((res) => {
        setState({
          isFetched: true,
          data: res.data,
          error: false,
        });
      })
      .catch((err) => {
        setState({
          isFetched: true,
          data: {},
          error: true,
        });
      });
  }, [id]);

  const { isFetched, data, error } = state;

  if (!isFetched) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching data.</p>;
  }

  const { image, name, cost } = data;
  console.log(data);

  return (
    <>
      <Navbar />
      <div className="single-page">
        <div className="carousel">
          {data.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
        <div className="product-details">
          <h2>{data.info[0].name}</h2>
          <ul className="color-options">
            {image.map((img, index) => (
              <li
                key={index}
                className={`color-option ${index === 0 ? "selected" : ""}`}
                style={{ backgroundColor: img }}
              ></li>
            ))}
          </ul>
          <p className="info-paragraph">Narxi</p>
          <p className="price">{data.pro.cost} UZS</p>
          <div className="credit-div">
            <h4 className="info-paragraph">Bo'lib to'lash:</h4>
            <h4 className="credit-price">170 000 so'm oyiga</h4>
            <div className="payment-options">
              <input
                type="range"
                min={3}
                max={12}
                step={1}
                value={selectedOption}
                onChange={handleSliderChange}
              />
              <button
                className={`payment-button ${
                  selectedOption === 3 ? "selected" : ""
                }`}
                onClick={() => setSelectedOption(3)}
              >
                {selectedOption} oylik
              </button>
            </div>
          </div>
          <div className="buy-now">
            <button className="buy-button">Hozir sotib olish</button>
            <button className="buy-button">
              {" "}
              <UilHeart /> Sevimliga qo'shish
            </button>
          </div>
        </div>
      </div>
      <div className="product-info ">
        <p>Tovar ma'lumotlari:</p>
        <p>Kategoriya: {data.info[0].category}</p>
        <p>Model: {data.info[0].model}</p>
        <p>Qo'shimcha ma'lumotlar: </p>
        <p>{data.info[0].about}</p>
      </div>

      <ProductCarousel item={<MyCard />} />
      <Footer />
    </>
  );
}

export default SinglePage;
