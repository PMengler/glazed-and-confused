import React from 'react';
import logoPic from '../../assets/gc-logo.png';
import logoMobile from '../../assets/gc-logo-mobile.png';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <footer>
            <div className="footer-nav">
                <ul>
                    <HashLink className="footer-link" smooth to="/flavors">
                        THE FLAVORS
                    </HashLink>
                    <HashLink className="footer-link" smooth to="/#contactus">
                        CONTACT US
                    </HashLink>
                    <HashLink className="footer-logo" smooth to='/#home'>
                        <img src={logoPic} alt='logoPic' />
                    </HashLink>
                    <HashLink className="footer-link" smooth to="/#ourstory">
                        OUR STORY
                    </HashLink>
                    <HashLink className="footer-btn" smooth to="/flavors">
                        ORDER NOW!
                    </HashLink>
                </ul>
            </div>
            <div className="copyright">© COPYRIGHT GLAZED & CONFUSED BAKERY INC. 2023 | DONUT WORRY BE HUNGRY</div>
        </footer>
    )
}

export default Footer;


