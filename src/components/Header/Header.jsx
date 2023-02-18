import { useState } from 'react';
import './Header.scss';
import Navbar from './../Navbar/Navbar';

const Header = ({ isOpen, openMenu }) => {
    return (
        <header className='header'>
            <div className="header__menu">
                <div className={isOpen ? "header__blockBtn" : "header__blockBtn open"} onClick={openMenu}>
                    <span className={isOpen ? 'header__btn' : 'header__btn open'}></span>
                </div>
            </div>
            <div className="header__container">
                <h1 className='header__title'>ЛИЧНЫЙ КАБИНЕТ</h1>
            </div>
        </header>
    );
};

export default Header;   