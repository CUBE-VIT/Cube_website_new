import React from 'react';
import './Home.css';
import Logo from  '../images/logo.png';
import Toggle from '../images/toggle.png'
import Toggle2 from '../images/toggle2.png'

function Home() {
    return (
        <div className="home">
            <div className="home__nav">
            <img src={Logo} width="160px" height="60px"/>
                <img className="toggle" src={Toggle} width="65px" height="65px"/>
                <img className="toggle2" src={Toggle2} width="65px" height="65px"/>
                
            </div>
                <div className="home__left">
                    <h1>We are Cubing Union of Brainy Enthusiasts</h1>
                    <p>Where speed cubers and cubing enthusiasts come together</p>
                    <div className="home__buttons">
                            <button className="home__but1">Events</button>
                            <button className="home__but2">Get in touch</button>
                    </div>

                </div>


        </div>
    )
}

export default Home
