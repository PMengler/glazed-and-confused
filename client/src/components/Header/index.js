import React from 'react';
// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';
import logoPic from '../../assets/gc-logo.png';
import logoMobile from '../../assets/gc-logo-mobile.png';

const Header = () => {
    const styles = {
        a: {
            textDecoration: 'none',
        },
        body: {
            backgroundColor: 'rgb(235, 235, 235)',
        },
        nav: {
            display: 'flex',
            justifyContent: 'center',
            height: '75px',
            backgroundColor: 'white',
            filter: 'drop-shadow(0px 3px 9px rgba(0, 0, 0, 0.25))',
        }
    }
    // Functions that will be used in the header

    return (
        <header className="header" style={styles.body}>
            <nav style={styles.nav}>
                <ul>
                    <li><a className="navlink" href="#theflavors" style={styles.a}>THE FLAVORS</a></li>
                    <li><a className="navlink" href="#contactus">CONTACT US</a></li>
                    <li className="header-logo"><img src={logoPic} alt='logoPic'></img></li>
                    <li><a className="navlink" href="#ourstory">OUR STORY</a></li>
                    <li><button className="nav-btn">ORDER NOW!</button></li>
                </ul>
                <div>
                    <a className="loginlink" href="#login">LOGIN</a>
                    <button className="nav-cart">cart</button>
                </div>
                <div className="mobile-logo"><img src={logoMobile} alt="logoPic"></img></div>
            </nav>
        </header>
    )
}

export default Header;