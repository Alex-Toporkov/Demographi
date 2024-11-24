import React from 'react';
import { Link } from 'react-router-dom';
import './css/Menu.css'; // Импортируем стили

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li className="menu-item">
                    Наши животные
                    <ul className="submenu">
                        <li className="submenu-item">
                            <Link to="/products/type/1">Собаки</Link> {/* type_id = 1 */}
                        </li>
                        <li className="submenu-item">
                            <Link to="/products/type/2">Кошки</Link> {/* type_id = 2 */}
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    Отчеты
                    <ul className="submenu">
                        <li className="submenu-item">
                            <Link to="/CostPrice">Себестоимость</Link></li>
                        <li className="submenu-item">
                            <Link to="/financial-model">Финансовая модель</Link></li>
                    </ul>
                </li>
                <li className="menu-item">
                    Управление
                    <ul className="submenu">
                        <li className="submenu-item">
                            <Link to="http://127.0.0.1:8000/admin">Панель администратора</Link></li>
                        <li className="submenu-item">
                            <Link to="/unit-tests">Юнит-тесты</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
