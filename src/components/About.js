import React from 'react';
import './About.css';
import Video from '../images/homevideo.mp4';

function About() {
    console.log(window.screen.availHeight);
    console.log(       window.screen.availWidth);
 
    return (
        <div className="about">
            <h1>Who are we</h1>
            <p>Established in 2019, we are C.U.B.E, VIT's first and the only cubing club. Our aim is to support fellow speecubers by providing them a paltform to showcase their underrated skills in the feild of speedcubing. A club with over 75 members including speedcubers, designers and managers, we work on organising events that benefits our college and its students!</p>
            <div className="video">
                <video src={Video} width="70%" height="40%"autoPlay muted controls loop/>
            </div>
        </div>
    )
}

export default About
