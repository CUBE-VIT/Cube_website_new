import React from 'react'
import Navbar from './Navbar'
import './Events.css';
import Toggle2 from '../images/toggle2.png'
import EventCard from './EventCard'
import cuone from '../images/cube_unleashed.png';
import wca from'../images/wca.png';
import cube from '../images/cubiosity.png';
import tactical from '../images/tactical.png';
import rco from '../images/rco.png';
import talks from '../images/cubingtalks.png';
import Slider from './Slider';
function Events() {
    const cuodesc="consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
    return (
        <div className="events">
        <Slider/>
        <Navbar image={Toggle2} />
        <div style={{textAlign:"center"}} className="lappy">
            <h1 style={{textAlign:"center",margin:"60px 0px"}}>What we do</h1>
            <EventCard image={cube} title="Cubiosity 1.0" desc="Cubiosity 2.0 brings an engrossing and fecundity quiz in the form of 10-20 polls. This quiz puts the screws on the students to get comprehensive in the notations of various official puzzles." />
            <EventCard image={wca} title="Magical World of Cubing" desc="CUBE VIT comes up with another event with the rudimentary idea of official WCA puzzles, what is WCA and how the competition works, how to become a member of speed-cubing community and many more such fascinating facts about WCA in cubing community" reverse={true}/>
            <EventCard image={tactical} title="Cubing Week" desc="Cubing Week is an online 1 vs 1 battle between India's leading speedcubers. This event was of 5 day duration where each day covered a different puzzle. Cubers who rank in the top20 of India had participated here to win various titles!!" />
            <EventCard image={talks} title="Cubing Talks" desc="Cubing Talks is a video series where we interview some of India's top speedcubers! Each interview had a national level speedcuber who was best in the business, be it a national record holder in 3x3 or megaminx or even a Asian Record holder for 3x3 One Handed!! " reverse={true}/>
            <EventCard image={cuone} title="Cube Unleashed 1.0" desc="Cube Unleashed 1.0 is a national level online cubing competitions consisting of 4 WCA events! Here speedcubers al over India participated in order to win the crown for the best cuber. The events conduced were 3x3, 2z2, pyraminx and 3x3 One Handed." />
            <EventCard image={rco} title="Riviera Cube Open" desc="Riviera Cube Open was a inter VIT cubing competition that had event like 3x3, 2x2, 4x4, 5x5, megaminx and pyraminx. The event was of 2 days where in the first day had 50+ students who had come to learn the cube from the best speedcubers, and on the second day was the cubing competition." reverse={true} />
            <h2>Follow us on    
                <span className="insta"> Instagram</span>
            </h2>
            <br /><br /><br /><br />
        </div>
        <div style={{textAlign:"center"}} className="mobile">
            <h1 style={{textAlign:"center",margin:"60px 0px"}}>What we do</h1>
            <EventCard image={cube} title="Cubiosity 1.0" desc="Cubiosity 2.0 brings an engrossing and fecundity quiz in the form of 10-20 polls. This quiz puts the screws on the students to get comprehensive in the notations of various official puzzles." />
            <EventCard image={wca} title="Magical World of Cubing" desc="CUBE VIT comes up with another event with the rudimentary idea of official WCA puzzles, what is WCA and how the competition works, how to become a member of speed-cubing community and many more such fascinating facts about WCA in cubing community" />
            <EventCard image={tactical} title="Cubing Week" desc="Cubing Week is an online 1 vs 1 battle between India's leading speedcubers. This event was of 5 day duration where each day covered a different puzzle. Cubers who rank in the top20 of India had participated here to win various titles!!"/>
            <EventCard image={talks} title="Cubing Talks" desc="Cubing Talks is a video series where we interview some of India's top speedcubers! Each interview had a national level speedcuber who was best in the business, be it a national record holder in 3x3 or megaminx or even a Asian Record holder for 3x3 One Handed!! " />
            <EventCard image={cuone} title="Cube Unleashed 1.0" desc="Cube Unleashed 1.0 is a national level online cubing competitions consisting of 4 WCA events!" />
            <EventCard image={rco} title="Riviera Cube Open" desc="CUBE VIT comes up with another event with the rudimentary idea of official WCA puzzles, what is WCA and how the competition works, how to become a member of speed-cubing community and many more such fascinating facts about WCA in cubing community." />
            <h2>Follow us on    
                <span className="insta"> Instagram</span>
            </h2>
            <br /><br /><br /><br />
        </div>
        </div>
    )
}

export default Events
