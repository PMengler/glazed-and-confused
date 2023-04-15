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
            <nav>
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
                    <li><button className="nav-btn">ORDER NOW!</button></li>
                </ul>
                <div>
                    <a className="loginlink" href="/loginRegister">ACCOUNT</a>
                    <button className="nav-cart">cart</button>
                    <CheckoutUseStripe />
                </div>
                <div className="mobile-logo"><img src={logoMobile} alt="logoPic"></img></div>
            </nav>
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