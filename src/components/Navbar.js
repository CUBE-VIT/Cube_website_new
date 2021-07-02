import React from 'react'
import Logo from  '../images/logo.png';
import Toggle2 from '../images/toggle2.png'
import './Navbar.css'
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <div className="nav">
            <Link to="./">
                    <div><img src={Logo} width="160px" height="60px" alt="cube_logo"/></div>
            </Link>
                {/* <img className="toggle" src={Toggle} width="65px" height="65px"/> */}
                <img className="toggle2" src={Toggle2} width="65px" height="65px" alt="tp"/>
                
        </div>
    )
}

export default Navbar
