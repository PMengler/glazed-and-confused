import React from 'react';
import PastOrderItem from '../PastOrderItem';
import PastOrderEmpty from '../PastOrderEmpty';

function PastOrderCard() {

    return (
        // Will handle if order is empty
        <>
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
        </>
    )
};

export default PastOrderCard;