import React from 'react'
import Footer from '../../components/template/footer/Footer'
import Hero from '../../components/template/header/Hero'
import Menu from '../../components/template/header/Menu'
import Navbar from '../../components/template/header/Navbar'
import ProductCarousel from '../../components/ui/ProductCarousel'
import "./liked.css"

const Liked = () => {
  return (
    <>
    <Navbar/>
    <Menu/>
    <div className='container liked'>
        <h3>There is nothing!</h3>
        </div>
    <Hero/>
    <div className='container'>
        <h1>Sizga tavsiya qilamiz:</h1>
        <ProductCarousel/>
    </div>
    <Footer/>
    </>
  )
}

export default Liked