import React from 'react'
import Logo from  '../images/logo.png';

import './Navbar.css'
import {Link} from 'react-router-dom';
function Navbar({image}) {

    const handleClick=()=>{
        document.getElementById('slider__main').style.transition="0.5s all ease-in-out";
        document.getElementById("slider__main").style.right="0";
        
    }
    
    return (
        <div className="nav" >
            <Link to="./">
                    <div ><img src={Logo} width="160px" height="60px" alt="cube_logo"/></div>
            </Link>
                {/* <img className="toggle" src={Toggle} width="65px" height="65px"/> */}
                <img id="toggle2" src={image} width="65px" height="65px" alt="tp" onClick={handleClick}/>
                
        </div>
    )
}

export default Navbar
