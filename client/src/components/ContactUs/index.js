import React, { useState } from "react";
import { BsFillPhoneVibrateFill} from 'react-icons/bs'

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
            "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
        e.target.reset();
    };
    return (
        <section id='contactus' className="contact-us">
            <div className="map">
                <div className="contact-box">
                    <h2>Contact Us</h2>
                        <div className="contact-line"></div>
                        <div className="contact-input">
                            <form onSubmit={handleSubmit}>
                                    <input type="text" id="name" placeholder="Your Name" required />
                                    <input type="email" id="email" placeholder="Email Address" required />
                                    <textarea id="message" placeholder="Message" required />
                            <button type="submit" className="contact-btn btn-blue btn-lrg">{status}</button>
                            <p><BsFillPhoneVibrateFill /> Call us at 1-800-555-GLAZED</p>
                            </form>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;