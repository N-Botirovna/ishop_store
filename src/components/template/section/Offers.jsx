import React from 'react'
import AdsCard from '../../ui/AdsCard'
import Card from '../../ui/Card'
import "./offers.css"

const Offers = () => {
    return (
        <div class="ads-products">
            <h2>Sizga taklif qilamiz:</h2>
            <div className="wrapper">
                <AdsCard/>
                <AdsCard/>
                <AdsCard/>
                <AdsCard/>
            </div>
        </div>
    )
}

export default Offers