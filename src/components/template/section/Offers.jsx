import React from 'react'
import AdsCard from '../../ui/AdsCard'
import Card from '../../ui/Card'
import "./offers.css"

const Offers = () => {
    return (
        <div class="ads-products">
            <h2>Sizga taklif qilamiz:</h2>
            <p>Opisaniye</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, numquam vero quam corporis commodi placeat!</p>
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