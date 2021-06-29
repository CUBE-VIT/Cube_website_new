import React from 'react';
import './Home.css';
import Logo from  '../images/logo.png';
import Toggle from '../images/toggle.png'

function Home() {
    return (
        <div className="home">
            <div className="home__nav">
                <img src={Logo} width="180px" height="64.66px"/>
                <img src={Toggle} width="68px" height="68px"/>
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
