import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../user/userSide.css';

function SideBoss() {
    const links = [
        {
            href: 'asosiy',
            name: "Asosiy panel"
        },
        {
            href: 'catalog',
            name: "Tovarlar ro'yxati"
        },
        {
            href: 'tasdiq',
            name: "Tasdiqlanmagan tovarlar"
        },
        {
            href: 'adm-orders',
            name: "Buyurtmalar"
        },
        {
            href: 'status',
            name: "Buyurtma statuslari"
        },
        {
            href: 'client',
            name: "Mijozlar"
        },
        {
            href: 'menejer',
            name: "Adminlar"
        },
        {
            href: 'reklama',
            name: "Reklama"
        }
    ]
    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (index) => {
        setSelectedLink(index);
    };
    return (
        <div className="sidebar bossSide">
            <ul>
                <li className='per-cabinet'>AdMinPanel</li>
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

export default SideBoss;