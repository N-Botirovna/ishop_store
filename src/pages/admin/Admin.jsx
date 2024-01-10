import React from 'react';
// import { Card, Pagination } from 'react-bootstrap';
import AdmCards from '../../components/template/admin/AdmCards';
import FilterComponent from '../../components/template/admin/AdmFilter';
import AdmHeader from '../../components/template/admin/AdmHeader';
import AdmProduct from '../../components/template/admin/AdmProduct';
import Side from '../../components/template/admin/Side';
import Pagination from '@mui/material/Pagination';


import './admin.css';
import { useState } from 'react';

const Admin = () => {
    const [complete, setComplete] = useState(false);

    return (
        <>
            <div className="top-header"></div>
            <div className="container">
                <AdmHeader />
                <div className="main">
                    <div className="cards">
                        <AdmCards data={[complete, setComplete]}/>
                    </div>
                   
                </div>
                
                <div className="myProducts">
                    <div className="zeroStack">
                        <AdmProduct/>
                        <Pagination count={10} variant="outlined" sx={{display: 'flex', justifyContent: 'flex-end', marginBlockStart: '20px'}}/>
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