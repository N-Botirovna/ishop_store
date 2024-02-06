import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SinglePage.css";
import Navbar from "../../components/template/header/Navbar";
import ProductCarousel from "../../components/ui/ProductCarousel";
import Footer from "../../components/template/footer/Footer";
import MyCard from "../../components/ui/MyCard";
import { UilHeart } from "@iconscout/react-unicons";
import uzum from "../../images/logo/uzum.png";
import BasketIcon from "../../components/ui/Basket";
import Heart from "../../components/ui/Heart";

function SinglePage() {
  const { id } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: {},
    error: false,
  });

  const [selectedMonths, setSelectedMonths] = useState(3);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedMonths(value);
  };
  const [mainImage, setMainImage] = useState("");

  const [selectedMonth, setSelectedMonth] = useState("12oy");

  const handleClick = (event) => {
    const selectedMonthValue = event.target.textContent.replace(/\s/g, '');
    setSelectedMonth(selectedMonthValue);
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
        setMainImage(res.data.image[0].image);
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

  const images = data.image;

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  console.log("need", selectedMonth[0]);

  return (
    <>
      <Navbar />
      <div className="single-page container">
        <div className="single-carousel">
          <div className="wrapper">
            <img
              src={mainImage}
              alt="Main Image"
              className="single-image main-image"
            />
            <div className="thumbnails">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`single-image thumbnail ${
                    image.image === mainImage ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(image.image)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="info-holder">
          <div className="holder">
            <h2>{data.info[0].name}</h2>
            {data.info[0].description.split("\r\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="product-details">
          <div className="inner-details">
            <p className="info-paragraph">Narxi</p>

            <p className="price">
              {data.pro.cost.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")}{" "}
              so'm
            </p>
            <div className="credit-div method">
              <h4 className="info-paragraph">Rasmiy ish joyi bilan:</h4>
              <h4 className="credit-price">
                {(
                  Math.ceil(data.cre_narxla[selectedMonths] / 1) * 1
                ).toLocaleString()}{" "}
                so'm
              </h4>
              <div className="payment-options">
                <input
                  type="range"
                  min={3}
                  max={12}
                  step={1}
                  value={selectedMonths}
                  onChange={handleChange}
                />
                <span className="credit-span">{selectedMonths} oy</span>
              </div>
            </div>

            <div className="uzum-blok method">
              <div className="uzums">
                <img src={uzum} alt="uzum-logo" className="uzumLogo" />
                <h2>Plastik karta bilan</h2>
              </div>
              <div className="narxlar">
                <h4 className="credit-price">
                {(
                  Math.ceil(data.uzum[selectedMonth.replace(/\s/g, '')] / 1) * 1
                ).toLocaleString()} so'm
                </h4>
                <div className="payment-options">
                  <span
                    className={`credit-month ${
                      selectedMonth === "3oy" ? "selected-month" : ""
                    }`}
                    onClick={handleClick}
                  >
                    3 oy
                  </span>
                  <span
                    className={`credit-month ${
                      selectedMonth === "6oy" ? "selected-month" : ""
                    }`}
                    onClick={handleClick}
                  >
                    6 oy
                  </span>
                  <span
                    className={`credit-month ${
                      selectedMonth === "12oy" ? "selected-month" : ""
                    }`}
                    onClick={handleClick}
                  >
                    12 oy
                  </span>
                </div>
              </div>
            </div>
            <div className="naqd method">
              <div className="naqd-holder">
                <div className="solfy">
                  <input type="radio" name="naqd" id="solfy" value="solfy" />
                  <label htmlFor="solfy">Solfy</label>
                </div>
                <div className="terminal">
                  <input
                    type="radio"
                    name="naqd"
                    id="terminal"
                    value="terminal"
                  />
                  <label htmlFor="terminal">Terminal</label>
                </div>
                <div className="naqdga">
                  <input type="radio" name="naqd" id="naqd" value="naqd" />
                  <label htmlFor="naqd">Naqd</label>
                </div>
              </div>
            </div>
            <div className="buy-now">
              <button className="buy-button"> <BasketIcon p={"Buyurtma berish"}/></button>
              <button className="buy-button">
                {" "}
                <Heart p={"Sevimliga qo'shish"}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="info-div container">
        <div className="about">
          <h2>Tavsifi:</h2>
          <p>{data.info[0].about}</p>
        </div>
      </div>

      <ProductCarousel item={<MyCard />} />
      <Footer />
    </>
  );
}

export default SinglePage;
