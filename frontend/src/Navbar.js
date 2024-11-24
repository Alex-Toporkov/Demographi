import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="menu">
            <ul>
                <li>Товары
                    <ul className="dropdown">
                        <li>Карточка товара</li>
                        <li>Информация</li>
                    </ul>
                </li>
                <li>Услуги
                    <ul className="dropdown">
                        <li>Описание услуги</li>
                        <li>Информация</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
