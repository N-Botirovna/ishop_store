import React from 'react'
import FilterComponent from '../admin/AdmFilter'
import AdmProduct from '../admin/AdmProduct'
import "../user/leftComponent.css"

export default function Catalog() {
    return (
        <div className='catalog-container'>
            <div className="top">
                <h2>Tovarlar ro'yxati</h2>
                <div className="add">+</div>
            </div>
            <div className="flex-container">
                <div className="table">
                    <AdmProduct />
                </div>
                <div className="filter">
                    <FilterComponent />
                </div>
            </div>
        </div>
    )
}
