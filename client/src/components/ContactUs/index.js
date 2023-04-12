import React, { useState } from "react";

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
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
            "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <section className="contact-us">
            <div className="map">
                <div className="contact-box">
                    <h2>Contact Us</h2>
                    <div className="contact-line"></div>
                    <div className="contact-input">
                        <input placeholder="Your Name" /><br/>
                        <input placeholder="Email Address" /><br/>
                        <textarea placeholder="Message"></textarea><br/>
                        <button className="contact-btn btn-blue btn-lrg">SEND</button>
                        <p>Icon Call us at 1-800-555-GLAZED</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;