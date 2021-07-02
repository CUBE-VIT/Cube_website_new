import React from 'react';
import './contact.css';
import Navbar from './Navbar'

function contact() {
    return (
        <>
        <Navbar />
        <div className="contactus">
            <div className="contactus__head">
                <h1>Contact Us</h1>
                <p>If you wanna get in touch, talk to us about any collaboration or just say hi, fill up the awesome form below👇🏻</p>
            </div>
            <div className="contactus__form">
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email"></input>
                <textarea cols="50" rows="7">Message</textarea>
                <button className="buts">SEND</button>
            </div>
        </div>
        </>
    )
}

export default contact
