import React from 'react';
// import { Card, Pagination } from 'react-bootstrap';
import AdmCards from '../../components/template/admin/AdmCards';
import FilterComponent from '../../components/template/admin/AdmFilter';
import AdmHeader from '../../components/template/admin/AdmHeader';
import AdmProduct from '../../components/template/admin/AdmProduct';



import './admin.css';
import { useState } from 'react';

const Admin = () => {
    const [complete, setComplete] = useState(false);
    const [searchText, setSearchText] = useState('');

  const handleSearch = (value) => {
    setSearchText(value);
  };
    

    return (
        <>
            <div className="top-header"></div>
            <div className="container">
                <AdmHeader onSearch={handleSearch} />
                <div className="main">
                    <div className="cards">
                        <AdmCards data={[complete, setComplete]}/>
                    </div>
                   
                </div>
                
                <div className="myProducts">
                    <div className="zeroStack">
                        <AdmProduct searchText={searchText}/>
                    </div>
                    <div className="filtered">
                        <FilterComponent/>
                        
                    </div>
                </div>
               
            </div>
        </>
    );
};

export default Admin;