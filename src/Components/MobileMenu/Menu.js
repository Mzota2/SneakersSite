import React from 'react'
import './Menu.css';
import closeIcon from '../../images/icon-close.svg';

function Menu({toggleMobileMenu}) {
    
  return (
    <div className='mobile-menu'>

        <div className="close-icon-container">
            <img  onClick={toggleMobileMenu} src={closeIcon} alt="close" />

           
        </div>

        <ul>
                <li onClick={toggleMobileMenu} className="mobile-menu-item">Collections</li>
                <li  onClick={toggleMobileMenu} className="mobile-menu-item">Men</li>
                <li  onClick={toggleMobileMenu} className="mobile-menu-item">Women</li>
                <li  onClick={toggleMobileMenu} className="mobile-menu-item">About</li>
                <li  onClick={toggleMobileMenu} className="mobile-menu-item">Contact</li>
            </ul>

    </div>
  )
}

export default Menu