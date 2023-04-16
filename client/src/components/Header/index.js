import React, { version } from 'react';
import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';
import logoPic from '../../assets/gc-logo.png';
import logoMobile from '../../assets/gc-logo-mobile.png';
import { HashLink } from 'react-router-hash-link';
import CheckoutUseStripe from '../Stripe';


const Header = () => {
    // Functions that will be used in the header

    return (
        <header className="header">
            <nav><CheckoutUseStripe />
                <ul>
                    <Link to={'/flavors'}>
                        <li className="navlink">THE FLAVORS</li>
                    </Link>
                    <HashLink className="navlink" smooth to="/#contactus">
                        CONTACT US
                    </HashLink>
                    <Link to={'/'}>
                        <li className="header-logo"><img src={logoPic} alt='logoPic'></img></li>
                    </Link>
                    <HashLink className="navlink" smooth to="/#ourstory">
                        OUR STORY
                    </HashLink>
                    <HashLink className="nav-btn" smooth to="/flavors">
                        ORDER NOW!
                    </HashLink>
                </ul>
                <div>
                    <a className="loginlink" href="/loginRegister">ACCOUNT</a>
                    <button className="nav-cart">cart</button>
                </div>
                <div className="mobile-logo"><img src={logoMobile} alt="logoPic"></img></div>
            </nav>
            <div className="mobile-nav-box">
    <input id="toggle" type="checkbox" />
    <label htmlFor="toggle" className="hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
        <div className="bottom-bun"></div>
    </label>
    <div className="nav-mobile">
        <div className="nav-wrapper">
            <div className="mobile-links">
                <ul>
                    <li> </li>
                    <li> <a href="index.html">HOME</a></li>
                    <li> <a href="flavors.html">THE FLAVORS</a></li>
                    <li> <a href="index.html#contactus">CONTACT US</a></li>
                    <li> <a href="index.html#aboutus">OUR STORY</a></li>
                    <li> <a href="login-register.html">LOGIN</a></li>
                </ul>
                <button className="btn-blue btn-small">VIEW CART</button>
            </div>
        </div>
    </div>
</div>

        </header>
    )
}

export default Header;

// Mobile Nav Cart - Toggle - show hide

// HELP FROM OUR FRIEND CHATGPT ;p

// Vanilla Js in document :

// <script type="text/JavaScript">
//     function toggleSidebar() {
//       const sidebar = document.querySelector('.cart-sidebar');
//       if (sidebar.style.right === '0px') {
//         sidebar.style.right = '-100%';
//       } else {
//         sidebar.style.right = '0px';
//       }
//     }
    
//     document.querySelector('.nav-cart').addEventListener('click', toggleSidebar);
    
//         </script>

// REACT version:

// import React, { useState, useRef } from 'react';

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   function toggleSidebar() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div>
//       <button className="nav-cart" onClick={toggleSidebar}>icon</button>
//       <div className={`cart-sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
//         {/* sidebar content */}
//       </div>
//     </div>
//   );
// }