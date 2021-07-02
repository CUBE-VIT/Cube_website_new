import React from 'react'
import Navbar from './Navbar'
import './Events.css';
import EventCard from './EventCard'
import cuone from '../images/cube_unleashed.png';
function Events() {
    const cuodesc="consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
    return (
        <>
        <Navbar />
        <div style={{textAlign:"center"}}>
            <h1 style={{textAlign:"center"}}>What we do</h1>
            <EventCard image={cuone} title="Cubiosity 1.0" desc={cuodesc}/>
            <EventCard image={cuone} title="Magical World of Cubing" desc={cuodesc} reverse={true}/>
            <EventCard image={cuone} title="Cubing Week" desc={cuodesc}/>
            <EventCard image={cuone} title="Cubing Talks" desc={cuodesc} reverse={true}/>
            <EventCard image={cuone} title="Cube Unleashed 1.0" desc={cuodesc}/>
            <EventCard image={cuone} title="Riviera Cube Open" desc={cuodesc} reverse={true}/>
            <h2>Follow us on    
                <span className="insta"> Instagram</span>
            </h2>
            <br /><br /><br /><br />
        </div>
        </>
    )
}

export default Events
