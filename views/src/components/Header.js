import React from 'react';
import LanguageSelector from './LanguageSelector';
import '../styles/header.css';

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
            <LanguageSelector />
        </div>
    );
};

export default Header;