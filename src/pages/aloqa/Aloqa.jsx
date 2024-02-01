import Menu from "../../components/template/header/Menu";
import React, { useEffect } from "react";
import logo from "../../images/logo/logoLast.png";
import "./aloqa.css";
import { Key } from "@mui/icons-material";

const API_KEY = 'AIzaSyB-Yqh-qdddBV-YnC4mnERTI9ktiS7CNi4';

function Aloqa() {
  useEffect(() => {
    const loadMap = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => {
        // Mapning ishlatish kodlarini joylashtirish
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 41.3851, lng: 2.1734 }, // Map markazining koordinatlari
          zoom: 12, // Mapning zoom darajasi
        });
        // Boshqa map funktsiyalarini qo'shish
      };
      document.head.appendChild(script);
    };

    loadMap();
  }, []);

  return (
    <div className="container">
      <div className="aloqa">
        <img src={logo} alt="logo" />
        <Menu />
      </div>
      <div id="map" className="map"></div>
    </div>
  );
}

export default Aloqa;


