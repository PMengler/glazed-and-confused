import React from 'react';
import logoPic from '../../assets/gc-logo.png';
import logoMobile from '../../assets/gc-logo-mobile.png';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <footer>
            <div className="footer-nav">
                <ul>
                    <li><a className="footer-link" href="flavors.html">THE FLAVORS</a></li>
                    <HashLink className="footer-link" smooth to="/#contactus">
                        CONTACT US
                    </HashLink>
                    <li className="footer-logo"><img src={logoPic} alt="logoPic"></img></li>
                    <HashLink className="footer-link" smooth to="/#ourstory">
                        OUR STORY
                    </HashLink>
                    <li><button className="footer-btn">ORDER NOW!</button></li>
                </ul>
            </div>
            <div className="copyright">© COPYRIGHT GLAZED & CONFUSED BAKERY INC. 2023 | DONUT WORRY BE HUNGRY</div>
        </footer>
    )
}

export default Footer;


