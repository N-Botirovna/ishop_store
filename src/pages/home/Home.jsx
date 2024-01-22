import React, { useEffect, useState } from 'react';
import Footer from '../../components/template/footer/Footer';
import Header from '../../components/template/header/Header';
import Accessuar from '../../components/ui/Accessuar';
import Section from '../../components/template/section/Section';
import Carousel2 from '../../components/ui/Carousel2';
import MyCard from '../../components/ui/MyCard';
import ProductCarousel from '../../components/ui/ProductCarousel';
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Section category="Noutbooklar" />
      <Section category="Smartfonlar" />
      <div className='container'>
        {<ProductCarousel item={<Accessuar />} />}
      </div>
      <Carousel2 />
      <Section category="SomeOtherCategory" />
      <Section category="Planshetlar" />
      <Section category="YetAnotherCategory" />
      <Section category="Maishiy_texnika" />
      <div className='container'>
        {<ProductCarousel item={<MyCard />} />}
      </div>
      <Footer />
    </>
  );
};

export default Home;