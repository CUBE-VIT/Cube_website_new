import React from 'react';
import './Aboutus.css';
import pic1 from '../images/about1.png';
import pic2 from '../images/about2.png';
import Navbar from './Navbar'

function Aboutus() {
    return (
        <div className="aboutus">
             <Navbar />
                <div className="aboutus__left">
                    <h1>We are a group of cubers sharing and improving their cubing knowledge</h1>
                    <p>Where speed cubers and cubing enthusiasts come together</p>
                    <div className="aboutus__pics">
                        <img className="pic1" src={pic1} width="585px" height="351px" alt="pic1"/>
                        <img className="pic2" src={pic2} width="585px" height="351px" alt="pic2"/>
                    </div>

                </div>
        </div>
    )
}

export default Aboutus
