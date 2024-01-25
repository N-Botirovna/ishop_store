import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './userSide.css';

function UserSide() {
    const links = [
        {
            href: 'userdata',
            name: "Shaxsiy ma'lumotlar"
        },
        {
            href: 'credits',
            name: "Kredit uchun ma'lumotlar"
        },
        {
            href: 'my-orders',
            name: "Mening buyurtmalarim"
        },
        {
            href: 'selected-orders',
            name: "Tanlanganlar"
        },
        {
            href: 'address',
            name: "Manzil"
        },
        {
            href: 'phone',
            name: "Telefon raqamni o'zgartirish"
        }
    ]
    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (index) => {
        setSelectedLink(index);
    };
    return (
        <div className="sidebar">
            <ul>
                <li className='per-cabinet'>Shaxsiy kabinet</li>
                {links.map((item, index) => {
                    return <li key={index}
                        className={selectedLink === index ? 'active' : ''}
                        onClick={() => handleLinkClick(index)}>
                        <NavLink to={item.href}>{item.name}</NavLink>
                    </li>
                }
                )}
            </ul>
        </div>
    );
}

export default UserSide;