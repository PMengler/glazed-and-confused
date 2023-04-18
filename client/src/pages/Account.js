import React, {useState} from 'react';
import PastOrderCard from '../components/PastOrderCard';
import '../styles/login-register.css';
import '../styles/app.css';
import '../styles/account.css'

const Account = () => {

    return (
        <section className="account-main">
            <div className="account-container">
                <div className="account-title">Past Orders</div>
                <div className="account-orders-container">
                    <PastOrderCard />
                </div>
            </div>
        </section>
    )
}

export default Account;