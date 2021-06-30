import React from 'react';
import './Aboutus.css';
import Logo from  '../images/logo.png';
import Toggle2 from '../images/toggle2.png';
import pic1 from '../images/about1.png';
import pic2 from '../images/about2.png';

function Aboutus() {
    return (
        <div className="aboutus">
             <div className="aboutus__nav">
                <img src={Logo} width="160px" height="60px"/>
                <img className="toggle" src={Toggle2} width="65px" height="65px"/>
            </div>
                <div className="aboutus__left">
                    <h1>We are a group of cubers sharing and improving their cubing knowledge</h1>
                    <p>Where speed cubers and cubing enthusiasts come together</p>
                    <div className="aboutus__pics">
                        <img className="pic1" src={pic1} width="585px" height="351px"/>
                        <img className="pic2" src={pic2} width="585px" height="351px"/>
                    </div>

                </div>
        </div>
    )
}

export default Aboutus
