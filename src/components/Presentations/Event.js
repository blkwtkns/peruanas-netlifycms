import React from 'react'

export default event => {
  const eventSrc = event.thumbnail ? event.thumbnail : 'https://picsum.photos/g/200/300/?blur'

  return (
    <article className="event">
      <div className="event-media">
        <img
          className="event-image"
          alt="raices event"
          src={eventSrc} />
      </div>
      <div className="eventData">
        <h1 className="event-date">{event.presentation_date}</h1>
        <h3 className="event-info">{event.event}</h3>
        <h3 className="event-info">{event.about} </h3>
        <h3 className="event-info">{event.time}</h3>
        <h3 className="event-info">{event.address}</h3>
      </div>
    </article>
)}
