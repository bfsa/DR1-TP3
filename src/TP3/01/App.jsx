import React, { useState } from 'react';
import logo from './assets/logo.png';

export default function App() {

        const [isMenuOpen, setMenuOpen] = useState(false);
      
        const toggleMenu = () => {
          setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
        <div className="navbar-content">
          <img src={logo} alt="Naipe de Paus" className="navbar-logo" />
          <nav className={`desktop-menu ${isMenuOpen ? 'hidden' : ''}`}>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Preços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
  
          <nav className={`mobile-menu ${isMenuOpen ? '' : 'hidden'}`}>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Preços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
  
          <button
            onClick={toggleMenu}
            className={`toggle-button ${isMenuOpen ? '' : ''}`}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'menu' : 'menu_open'}
            </span>
          </button>
        </div>
      </header>
    );
};