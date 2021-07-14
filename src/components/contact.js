import React from 'react';
import './contact.css';
import Toggle2 from '../images/toggle2.png'
import Slider from './Slider';
import Navbar from './Navbar'

function contact() {
    return (
        <>
        <Slider/>
        <Navbar image={Toggle2} />
        <div className="contactus">
            <div className="contactus__head">
                <h1>Contact Us</h1>
                <p>If you wanna get in touch, talk to us about any collaboration or just say hi, fill up the awesome form below👇🏻</p>
            </div>
            <div className="contactus__form">
                <form action="https://formspree.io/f/xnqlbnwk" method="POST" >
                    <input type="text" placeholder="Name" name="name"></input>
                    <input type="text" placeholder="Email" name="email"></input>
                    <textarea cols="50" rows="7" placeholder="Message" name="message"></textarea>
                    <button type="submit" className="buts">SEND</button>
                </form>
         
            </div>
        </div>
        </>
    )
}

export default contact
