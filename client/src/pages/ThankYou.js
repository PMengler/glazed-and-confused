import React, {useState} from 'react';

import '../styles/login-register.css';
import '../styles/app.css';
import Header from '../components/Header';
import '../styles/thankyou.css'

const ThankYou = () => {
    return (
        <div>
            <Header />
            <section className="thankyou-main">
                <div className="thankyou-container">
                    <div className="thankyou-top-message">
                        <div className="check-mark">
                            <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="59" cy="59" r="59" fill="#17D156"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M96.5957 44.5962L53.4995 87.6924L27.4033 61.5962L36.5957 52.4038L53.4995 69.3076L87.4033 35.4038L96.5957 44.5962Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="thankyou-title">Thank you for your order!</div>
                    </div>
                    <div className="thankyou-line"></div>
                    <div className="thankyou-message">Donut worry, we got your order and are preparing your delicious
                        treats.</div>
                </div>
            </section>
        </div>
    );
}

export default ThankYou;