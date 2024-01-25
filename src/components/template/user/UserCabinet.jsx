import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreditInfo from './CreditInfo';
import Phone from './Phone';
import './personalCabinet.css';
import Footer from '../footer/Footer';
import UserSide from './UserSide';
import Navbar from '../header/Navbar';
import PersonalInfo from './PersonalInfo';
import MyOrders from './MyOrders';
import Selected from './Selected';
import Address from './Address';

function UserCabinet() {
    return (

        <div className="personal-cabinet">
            <Navbar />
            <div className="container content-container">
                <UserSide />
                <div className="main-content">
                    <Routes>
                        <Route path="/userdata" element={<PersonalInfo />} />
                        <Route path="/credits" element={<CreditInfo />} />
                        <Route path="/my-orders" element={<MyOrders />} />
                        <Route path="/selected-orders" element={<Selected />} />
                        <Route path="/address" element={<Address />} />
                        <Route path="/phone" element={<Phone />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default UserCabinet;