import React from 'react';
import LanguageSelector from './LanguageSelector';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav className='nav-header'>
                <ul>
                    <li>Introduction</li>
                    <li>Technologies</li>
                    <li>Projets</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className='right-div'>
                <NavLink id='login-button' exact to='/login'>
                    <i className="fas fa-sign-in-alt"></i>
                </NavLink>
                <LanguageSelector />
            </div>
        </div>
    );
};

export default Header;