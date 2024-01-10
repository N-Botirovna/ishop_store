import React from 'react'
import Footer from '../../components/template/footer/Footer'
import Header from '../../components/template/header/Header'
import Accessuar from '../../components/ui/Accessuar'
import Section from '../../components/template/section/Section'
import Carousel2 from '../../components/ui/Carousel2'
import MyCard from '../../components/ui/MyCard'
import ProductCarousel from '../../components/ui/ProductCarousel'
import "./home.css"


const Home = () => {
  return (
   <>
   <Header/>
   <Section/>
   <Section/>
   <div className='container'>
        <ProductCarousel item = {<Accessuar/>}/>
    </div>
   <Carousel2/>
   <Section/>
   <Section/>
   <Section/>
   <Section/>
    <div className='container'>
        <ProductCarousel item={<MyCard/>}/>
    </div>
   <Footer/>
   </>
  )
}

export default Home