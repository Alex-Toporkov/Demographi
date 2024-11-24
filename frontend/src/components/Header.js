import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'; // Подключаем стили для шапки
import logo from './logo.png'; // Импортируем логотип из текущего каталога

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/"> {/* Добавляем ссылку на главную страницу */}
                    <img src={logo} alt="Логотип" />
                </Link>
            </div>
            <div className="store-info">
                <h1 className="store-name">Проект Демография</h1> {/* Название магазина */}
                <p className="store-description">Магазин домашних животных</p> {/* Описание магазина */}
            </div>
            <div>
                <p className="phone">Телефон: +7 (916) 569-74-07</p>
                <p className="owner-name">Топорков Александр</p> {/* Добавляем фамилию и имя */}
            </div>
        </header>
    );
};

export default Header;
