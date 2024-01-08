import React from 'react'
import AdsCard from '../../ui/AdsCard'
import Card from '../../ui/MyCard'
import "./offers.css"

const Offers = () => {
    return (
        <div class="ads-products">
            <h2>Sizga taklif qilamiz:</h2>
            
            <div className="wrapper">
                <AdsCard/>
                
            </div>
        </div>
    )
}

export default Offers