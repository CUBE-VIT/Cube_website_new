import React from 'react';
import './Home.css';
import Navbar from './Navbar'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <Navbar />
                <div className="home__left">
                    <h1>We are Cubing Union of Brainy Enthusiasts</h1>
                    <p>Where speed cubers and cubing enthusiasts come together</p>
                    <div className="home__buttons">
                            <Link to="./events"><button className="home__but1">Events</button></Link>
                            <Link to="./contact"><button className="home__but2">Get in touch</button></Link>
                    </div>

                </div>


        </div>
    )
}

export default Home
