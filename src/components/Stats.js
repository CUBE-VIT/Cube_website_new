import React from 'react';
import './Stats.css'

function Stats() {
    return (
        <div className="stats">
            <div className="details">
                <div className="stats__cards"><h1>75+</h1><p>Members</p></div>
                <div className="stats__cards"><h1>10+</h1><p>Events</p></div>
                <div className="stats__cards"><h1>5+</h1><p>Talks</p></div>
            </div>
        </div>
    )
}

export default Stats
