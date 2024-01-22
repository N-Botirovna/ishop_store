import React from 'react'
import Cards from './Cards'
import Offers from './Offers'
import "./Section.css"

const Section = ({ category }) => {
  return (
    <div className='container section'>
      <Cards category={category} />
      <Offers/>
    </div>
  );
}

export default Section;