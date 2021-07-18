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
                        <h2><a  style={{textDecoration:"none"}}>Contact</a></h2>
                        <a href="/contact"><button>Contact Us</button></a>
                        <p style={{fontSize:"32px"}}><a href = "mailto: cubevit@gmail.com">cubevit@gmail.com</a></p>
                       
                    </div>
                    <div className="follow">
                        <h2>Follow us on</h2>
                        <div className="social">
                            <div className="icons">
                                <div className="each"><a href="https://www.instagram.com/c.u.b.e_vit/"><InstagramIcon style={{ fontSize: 32 }}/><p>Instagram</p></a></div>
                                <div className="each"><a href="https://www.linkedin.com/company/c-u-b-e-vit/"><LinkedInIcon style={{ fontSize: 32 }}/><p>Linkedin</p></a> </div>
                               

                            </div>
                            <div className="icons">
                                <div className="each"><a href="https://www.youtube.com/channel/UCs3Xm3u_hXLxnGcYzEIALcA"><YouTubeIcon style={{ fontSize: 32 }}/><p>Youtube</p></a> </div>
                                <div className="each"><a href="https://www.facebook.com/c.u.b.e.VITclub"> <FacebookIcon style={{ fontSize: 32 }}/><p>Facebook</p></a></div>
                                
                            </div>
                        </div>
                     </div>
                    <div className="pages">
                    <h2>Pages</h2>
                        <div className="links">
                            <div className="linkicons">
                                <a href="/"><p>Home</p></a>
                                <a href="/events"><p>Events</p></a>
                               
                            </div>
                            <div className="linkicons">
                              <a href="/about"><p>About</p></a>
                                <a href="/teams"><p>Team</p></a>

                            </div>
                        </div>
                    </div>
            </div>
            <div className="copyright">
                <p style={{margin:"10px 0px 20px 0px",fontSize:"28px"}} >@2021 C.U.B.E VIT</p>
                <p>Made with 💖 by <span ><a style={{color:"#FEE272"}} href="https://www.linkedin.com/in/samarth-nehe-a0b9b519b/">Samarth Nehe</a></span></p>
                <p>Designed with ☕ by <span ><a style={{color:"#2BCF9B"}} href="https://www.linkedin.com/in/hayat-tamboli/">Hayat Tamboli</a></span></p>
            </div>

            <div className="footer__image">

            </div>
        </div>
    )
}

export default Footer
