import React, {useState} from 'react';
import '../styles/login-register.css';
import '../styles/app.css';
import '../styles/account.css'

const Account = () => {

    return (
        <section className="account-main">
            <div className="account-container">
                <div className="account-title">Past Orders</div>
                <div className="account-orders-container">
                    {/* <!-- first order --> */}
                    <div className="account-order-block">
                        <div className="order">Order<span className="account-order-number"> 1 </span> </div>
                        <div className="account-divider"></div>
                        <ul className="account-order-items-list">
                            <li className="account-qty"> 4 <span className="account-list">Lucky You</span></li>
                            <li className="account-qty"> 3 <span className="account-list">Black and White </span></li>
                            <li className="account-qty"> 3 <span className="account-list">Crunch Berries </span></li>
                            <li className="account-qty"> 2 <span className="account-list">Sun-kissed Chocolate </span></li>
                        </ul>
                        <div className="account-divider"></div>
                        <div className="account-box">
                            <div className="account-total-text">TOTAL PRICE </div>
                            <div className="account-order-total">$71.76</div>
                        </div>
                        <div className="account-divider"></div>
                        <a className="account-reorder">REORDER</a>
                    </div>

                    {/* <!-- second order --> */}
                    <div className="account-order-block">
                        <div className="order">Order<span className="account-order-number"> 2 </span> </div>
                        <div className="account-divider"></div>
                        <ul className="account-order-items-list">
                            <li className="account-qty"> 2 <span className="account-list">Sweetheart Donut</span></li>
                            <li className="account-qty"> 2 <span className="account-list">Black and White </span></li>
                            <li className="account-qty"> 4 <span className="account-list">Lemon Snowflake </span></li>
                            <li className="account-qty"> 3 <span className="account-list">Coconut Macaroon Delight </span></li>
                        </ul>
                        <div className="account-divider"></div>
                        <div className="account-box">
                            <div className="account-total-text">TOTAL PRICE </div>
                            <div className="account-order-total">$71.76</div>
                        </div>
                        <div className="account-divider"></div>
                        <a className="account-reorder">REORDER</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Account;