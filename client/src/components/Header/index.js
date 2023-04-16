import React from 'react';
// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';
import logoPic from '../../assets/gc-logo.png';
import logoMobile from '../../assets/gc-logo-mobile.png';
import { HashLink } from 'react-router-hash-link';
import CheckoutUseStripe from '../Stripe';

const Header = () => {
    // Functions that will be used in the header

    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a className="navlink" href="#theflavors">THE FLAVORS</a></li>
                    <HashLink className="navlink" smooth to="/#contactus">
                        CONTACT US
                    </HashLink>
                    <li className="header-logo"><img src={logoPic} alt='logoPic'></img></li>
                    <HashLink className="navlink" smooth to="/#ourstory">
                        OUR STORY
                    </HashLink>
                    <li><button className="nav-btn">ORDER NOW!</button></li>
                </ul>
                <div>
                    <a className="loginlink" href="/account">ACCOUNT</a>
                    <a className="loginlink" href="/loginRegister">LOGIN/REGISTER</a>
                    <button className="nav-cart">cart</button>
                    <CheckoutUseStripe />
                </div>
                <div className="mobile-logo"><img src={logoMobile} alt="logoPic"></img></div>
            </nav>
        </header>
    )
}

export default Header;