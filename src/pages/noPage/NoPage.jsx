import React from 'react'
import { Link } from 'react-router-dom'
import "./noPage.css"

const NoPage = () => {
  return (
    <div className='noPage'>
      <h1>404 Error</h1>
      <p class="zoom-area">To'g'ri manzil kiritganingizga ishonch hosil qiling! </p>
      <section class="error-container">
        <span class="four"><span class="screen-reader-text">4</span></span>
        <span class="zero"><span class="screen-reader-text">0</span></span>
        <span class="four"><span class="screen-reader-text">4</span></span>
      </section>
      <div class="link-container">
        <Link to="/">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  )
}

export default NoPage