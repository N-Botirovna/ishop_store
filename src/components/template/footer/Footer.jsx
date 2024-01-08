import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UilInstagram } from '@iconscout/react-unicons'
import { UilTelegram } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilPhoneAlt } from '@iconscout/react-unicons'
import { UilTelegramAlt } from '@iconscout/react-unicons'
import {Link} from 'react-router-dom';

import "./footer.css"


const Footer = () => {
  return (
    <div className='container footer'>
      <div className="footer">
        <div className="footer-container">
          <div className="footer_main-container">
            <div className="footer-list-wrapper">
              <header className="footer-list-wrap"><span>Biz haqimizda</span></header>
              <ul className="footer-list">
                <li className="footer-list-item">Ommaviy oferta</li>
                <li className="footer-list-item">Maxfiylik siyosati </li>
                <li className="footer-list-item">Aloqaga chiqish </li>

              </ul>

            </div>
            <div className="footer-list-wrapper">
              <header className="footer-list-wrap"><span>Xaridorlar uchun</span></header>
              <ul className="footer-list">
                <li className="footer-list-item">To'lov va yetkazib berish</li>
                <li className="footer-list-item">Tovarni qaytarish </li>
                <li className="footer-list-item">Biz bilan bog'lanish </li>

              </ul>

            </div>
            <div className="footer-list-wrapper">
              <header className="footer-list-wrap"><span>Qo'shimcha</span></header>
              <ul className="footer-list">
                <li className="footer-list-item">Shaxsiy kabinet</li>
                <li className="footer-list-item">Sayt xaritasi </li>

              </ul>

            </div>
            <div className="footer-list-wrapper">
              <header className="footer-list-wrap"><span>ishop ijtimoiy tarmoqlarda</span></header>
              <ul className="footer-list">
                

                

                
                <li >
                  <Link to="https://www.instagram.com/ishopstore.uz/">
                    <UilInstagram  className= " footer-list-item"/>
                  </Link>
                </li>
                <li >
                  <Link to="https://t.me/ishopstoreuz">
                    <UilTelegram className= " footer-list-item"/>
                  </Link>
                </li>
                <li >
                  <Link to="tel:998900331050">
                    <UilPhoneAlt className= " footer-list-item"/>
                  </Link>
                </li>
                <li >
                  <Link to="https://www.facebook.com/ishopuzb/">
                    <UilFacebookF className= " footer-list-item"/>
                  </Link>
                </li>
              </ul>

            </div>

          </div>
          <div className="footer_bottom-policy">
            <p>Barcha huquqlar himoyalangan. i-shop.uz</p>
            <p>i-shop © 2023</p>

          </div>

        </div>

      </div>
    </div >
  )
}

export default Footer