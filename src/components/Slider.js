import React from 'react';
import './Slider.css';
import CloseIcon from '@material-ui/icons/Close';

function Slider() {
    
    const handleSlider=()=>{
        document.getElementById('slider__main').style.transition="0.5s all ease-in-out";
        document.getElementById('slider__main').style.right="-100%";
        
    }

    return (
        <div id="slider__main">
            <div className="click"></div>
            <div className="slider__content">
            <div id="close" onClick={handleSlider}><CloseIcon/></div>
            <div className="slider">
            <div className="slider__first">
                        <h2>Social</h2>
                        <div className="links">
                            <a href="https://www.linkedin.com/company/c-u-b-e-vit/">Linkedin</a>
                            <a href="https://www.instagram.com/c.u.b.e_vit/">Instagram</a>
                            <a href="https://www.youtube.com/channel/UCs3Xm3u_hXLxnGcYzEIALcA">Youtube</a>
                            <a href="https://www.facebook.com/c.u.b.e.VITclub">Facebook</a>
                        </div>
                </div>
                <div className="slider__second"> 
                        <h2>Menu</h2>
                        <div className="pages">
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/events">Events</a>
                            <a href="/teams">Team</a>
                            <a href="/contact">Contact</a>
                        </div>
                </div>
            </div>
            <div className="slider__email">
                <p>Get in touch</p>
                <p><a href = "mailto: cubevit@gmail.com">cubevit@gmail.com</a></p>
            </div>
            </div>
           
                
        </div>
    )
}

export default Slider
