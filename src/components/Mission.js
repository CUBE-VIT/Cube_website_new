import React from 'react';
import './Mission.css';
import Video from '../images/cubevideo.mp4';
import Video2 from '../images/vision.mp4';

function Mission() {
    return (
        <div className="videos">
                    <div className="mission" data-aos="zoom-in"  data-aos-duration="1000">
                            <h1>Our Mission</h1>
                            <p>Our Mission is to spread the art of Rubik’s Cube solving among people in a social and comfortable way, and therefore our range is from people who never solved the cube, to those who can solve it blindfolded. To create a union of all like minded people to share and learn knowledge and improve themselves.</p>
                            <div className="video">
                                <video src={Video} width="70%" height="40%"autoPlay muted controls loop/>
                            </div>
                    </div>
                    <div className="vision" data-aos="zoom-in"  data-aos-duration="1000">
                        <h1>Our Vision</h1>
                        <p>The Vision of this club is to see more number of individuals getting involved in the art of Rubik’s cube solving. To give students a new talent that will help them enhance their creativity. We work on creating a group of talented speedcubers to uplift this not very known talent to a greater level</p>
                        <div className="video">
                            <video src={Video2} width="70%" height="40%"autoPlay muted controls loop/>
                        </div>
                </div>
        </div>
        
    )
}

export default Mission
