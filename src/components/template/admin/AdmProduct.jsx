import React from 'react';
import './AdmProducts.css';

function AdmProduct(props) {
    const {
        number,
        image,
        productname,
        price,
        quantity,
        category,
        adminName,
        createdTime,
        lastUpdated,
    } = props;

    return (
        <div className="product-card">
            
                <span className="card-number">{number}</span>
               
            
            
                <img src={image} alt={productname} className="card-image" />
                
                    <h3 className="card-title">{productname}</h3>
                    <p className="card-info">
                        <span className="card-info-label"></span> {price}
                    </p>
                    <p className="card-info">
                        <span className="card-info-label"></span> {quantity}
                    </p>
                    <p className="card-info">
                        <span className="card-info-label"></span> {category}
                    </p>
                    <p className="card-info">
                        <span className="card-info-label"></span> {adminName}
                    </p>
                    <p className="card-info">
                        <span className="card-info-label"></span>{' '}
                        {createdTime}
                    </p>
                    <p className="card-info">
                        <span className="card-info-label">Tahrirlash:</span>{' '}
                        {lastUpdated}
                    </p>
                
            
        </div>
    );
}

export default AdmProduct;