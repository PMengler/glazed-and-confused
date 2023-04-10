import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import logoPic from '../../assets/gc-logo.png';
import logoMobile from '../../assets/gc-logo-mobile.png';

const Header = () => {
    // Functions that will be used in the header

    return (
        <header class="header">
            <nav>
                <ul>
                    <li><a class="navlink" href="#theflavors">THE FLAVORS</a></li>
                    <li><a class="navlink" href="#contactus">CONTACT US</a></li>
                    <li class="header-logo"><img src={logoPic} alt='logoPic'></img></li>
                    <li><a class="navlink" href="#ourstory">OUR STORY</a></li>
                    <li><button class="nav-btn">ORDER NOW!</button></li>
                </ul>
                <div>
                    <a class="loginlink" href="#login">LOGIN</a>
                    <button class="nav-cart">cart</button>
                </div>
                <div class="mobile-logo"><img src={logoMobile} alt="logoPic"></img></div>
            </nav>
        </header>
    )
}

export default Header;