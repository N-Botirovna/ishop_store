import React from 'react'
import Footer from '../../components/template/footer/Footer'
import Header from '../../components/template/header/Header'
import Section from '../../components/template/section/Section'
import Carousel2 from '../../components/ui/Carousel2'
import ProductCarousel from '../../components/ui/ProductCarousel'
import "./home.css"

const Home = () => {
  return (
   <>
   <Header/>
   <Section/>
   <Section/>
   <Carousel2/>
    <div className='container'>
       
        <ProductCarousel/>
    </div>
   <Footer/>
   </>
  )
}

export default Home