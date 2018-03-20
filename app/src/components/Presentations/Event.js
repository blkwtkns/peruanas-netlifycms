// ./src/components/Presentations/Events.js
import React from 'react'

export default event => (
  <div className="event">
    <h1 className="event-date">{event.presentation_date}</h1>
    <h3 className="event-info">{event.event}</h3>
    <h3 className="event-info">{event.about} </h3>
    <h3 className="event-info">{event.time}</h3>
    <h3 className="event-info">{event.address}</h3>
  </div>
)
