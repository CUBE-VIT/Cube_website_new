import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <h1>Get in touch</h1>
            <div className="footer__div">
                    <div className="contact">
                        <h2>Contact</h2>
                        <button>Contact Us</button>
                        <p style={{fontSize:"32px"}}>cubevit@gmail.com</p>
                       
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
                            <Link to="./" style={{textDecoration: "none"}}><p className="footer-link">Home</p></Link>
                            <Link to="./events" style={{textDecoration: "none"}}><p className="footer-link">Events</p></Link>
                               
                            </div>
                            <div className="linkicons">
                            <Link to="./about" style={{textDecoration: "none"}}><p className="footer-link">About</p></Link>
                            <Link to="./teams" style={{textDecoration: "none"}}><p className="footer-link">Team</p></Link>

                            </div>
                        </div>
                    </div>
            </div>
            <div className="copyright">
                <p style={{margin:"10px 0px 20px 0px",fontSize:"14px"}} >@2021 C.U.B.E VIT</p>
                <p>Made with 💖 by <a href="#" style={{textDecoration: "none"}} ><span style={{color:"#FEE272"}}>Samarth Nehe</span></a></p>
                <p>Designed with ☕ by <a href="https://www.linkedin.com/in/hayat-tamboli/" style={{textDecoration: "none"}} ><span style={{color:"#2BCF9B"}}>Hayat Tamboli</span></a></p>
            </div>

            <div className="footer__image">

            </div>
        </div>
    )
}

export default Footer
