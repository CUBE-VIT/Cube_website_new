import React from 'react'
import './EventCard.css'
function EventCard(props) {
    return (
        <>
        {
        props.reverse===true ?
        <div className="card-stretch" >
            <div className="card-deets">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
            <div className="card-img-div" >
                <img src={props.image} alt="event_img" className="card-img"/>
            </div>
            
        </div>
        :
        <div className="card-stretch">
            <div className="card-img-div">
                <img src={props.image} alt="event_img" className="card-img"/>
            </div>
            <div className="card-deets" >
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
        }
        
        </>
    )
}

export default EventCard
