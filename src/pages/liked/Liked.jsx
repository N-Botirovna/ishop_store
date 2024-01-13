import React from 'react'
import Footer from '../../components/template/footer/Footer'

import Menu from '../../components/template/header/Menu'
import Navbar from '../../components/template/header/Navbar'
import Carousel2 from '../../components/ui/Carousel2'
import MyCard from '../../components/ui/MyCard'
import ProductCarousel from '../../components/ui/ProductCarousel'
import "./liked.css"

const Liked = () => {
  return (
    <>
      <Navbar />
      <Menu />

      <div className="container">
        <h3 className='liked-heading'>Saralanganlar:</h3>
        <div className='liked'>
          <div className="liked-card">
            <MyCard />
          </div>
          <div className="liked-card">
            <MyCard />
          </div>
        </div>
      </div>
      <Carousel2 />
      <div className='container'>
        {/* <h1>Sizga tavsiya qilamiz:</h1> */}
        <ProductCarousel item={<MyCard />} />
      </div>
      <Footer />
    </>
  )
}

export default Liked