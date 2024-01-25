import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmHeader from '../admin/AdmHeader';
import SideBoss from './SideBoss';
import "../user/personalCabinet.css"
import Asosiy from './Asosiy';
import Catalog from './Catalog';
import Tasdiq from './Tasdiq';
import AdmOrders from './AdmOrders';
import Status from './Status';
import Client from './Client';
import Menejer from './Menejer';
import Reclam from './Reclam';

export default function Boss() {
  return (

    <div className="personal-cabinet">
        <div className="container boss-container">
        <AdmHeader />
        </div>
        <div className="container content-container">
            <SideBoss />
            <div className="main-content">
                <Routes>
                    <Route path="/asosiy" element={<Asosiy />} />
                    <Route path="/catalog" element={< Catalog/>} />
                    <Route path="/tasdiq" element={<Tasdiq />} />
                    <Route path="/adm-orders" element={<AdmOrders />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/client" element={<Client />} />
                    <Route path="/menejer" element={<Menejer />} />
                    <Route path="/reklama" element={<Reclam />} />
                </Routes>
            </div>
        </div>
    </div>

);

}
