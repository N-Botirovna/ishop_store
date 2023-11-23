import React from 'react'
import Cards from './Cards'
import Offers from './Offers'
import "./Section.css"

const Section = () => {
  return (
    <div className='container section'>
    <Cards/>
    <Offers/>
    </div>
  )
}

export default Section