import React, { useState } from 'react';
import logo from './assets/logo.png';

export default function App() {  
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(prev => !prev);
    };
  
    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
    };
  
    return (
      <header className="header">
        <div className="header-container">
          <img src={logo} alt="Logo S-Car" className="logo" />
          
          <nav className={`desktop-navigation ${isMobileMenuOpen ? 'hidden' : ''}`}>
            <ul>
              <li><a href="#">Perfil</a></li>
              <li><a href="#">Postagens</a></li>
              <li><a href="#">Configurações</a></li>
            </ul>
          </nav>
  
          <nav className={`mobile-navigation ${isMobileMenuOpen ? '' : 'hidden'}`}>
            <button onClick={closeMobileMenu} className="close-menu-btn material-symbols-outlined">close</button>
            <ul>
              <li>
                <a href="#"><span className="material-symbols-outlined">person</span>Perfil</a>
              </li>
              <li>
                <a href="#"><span className="material-symbols-outlined">list</span>Postagens</a>
              </li>
              <li>
                <a href="#"><span className="material-symbols-outlined">settings</span>Configurações</a>
              </li>
            </ul>
          </nav>
  
          <button onClick={toggleMobileMenu} className="menu-toggle-btn material-symbols-outlined">
            {isMobileMenuOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
          </button>
        </div>
      </header>
    );
}