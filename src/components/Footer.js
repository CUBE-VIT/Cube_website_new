import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <div className="footer">
            <h1>Get in touch</h1>
            <div className="footer__div">
                    <div className="contact">
                        <h2>Contact</h2>
                        <button>Contact Us</button>
                        <p style={{fontSize:"32px"}}>cubevit@gmail.com</p>
                        <p style={{margin:"50px 0px 20px 0px"}} >@2021 C.U.B.E VIT</p>
                        <p>Made with 💖 by <span style={{color:"#FEE272"}}>Samarth Nehe</span></p>
                        <p>Designed with 🍵 by <span style={{color:"#2BCF9B"}}>Hayat Tamboli</span></p>
                    </div>
                    <div className="follow">
                        <h2>Follow us on</h2>
                        <div className="social">
                            <div className="icons">
                                <div className="each"><InstagramIcon style={{ fontSize: 32 }}/><p>Instagram</p></div>
                                <div className="each"> <LinkedInIcon style={{ fontSize: 32 }}/><p>Linkedin</p></div>
                               

                            </div>
                            <div className="icons">
                                <div className="each"><YouTubeIcon style={{ fontSize: 32 }}/><p>Youtube</p></div>
                                <div className="each"><FacebookIcon style={{ fontSize: 32 }}/><p>Facebook</p></div>

                            </div>
                        </div>
                     </div>
                    <div className="pages">
                    <h2>Pages</h2>
                        <div className="links">
                            <div className="linkicons">
                                <p>Home</p>
                                <p>Events</p>
                               
                            </div>
                            <div className="linkicons">
                              <p>About</p>
                                <p>Team</p>

                            </div>
                        </div>
                    </div>
            </div>
            <div className="footer__image">

            </div>
        </div>
    )
}

export default Footer
