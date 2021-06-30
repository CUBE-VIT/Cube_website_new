import React from 'react';
import './contact.css';
import Logo from  '../images/logo.png';
import Toggle2 from '../images/toggle2.png';

function contact() {
    return (
        <div className="contactus">
              <div className="contactus__nav">
                <img src={Logo} width="160px" height="60px"/>
                <img className="toggle" src={Toggle2} width="65px" height="65px"/>
            </div>
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
    )
}

export default contact
