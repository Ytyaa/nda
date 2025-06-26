import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <ul className={`nav-menu nav-left ${menuOpen ? 'open' : ''}`}>
                <li><a href="#about">О нас</a></li>
                <li><a href="#news">Новости</a></li>
                <li><a href="#doc">Документация</a></li>
            </ul>

            <div className="navbar-center">
                <div className="burger" onClick={toggleMenu}>
                    ☰
                </div>
                <div className="burger-logo">
                    NDA
                </div>
            </div>

            <ul className={`nav-menu nav-right ${menuOpen ? 'open' : ''}`}>
                <li><a href="#reports">Отчеты</a></li>
                <li><a href="#contact">Контакты</a></li>
                <li><a href="#main">Главная</a></li>
            </ul>
        </nav>
    );
};

export default Header;