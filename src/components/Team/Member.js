import React from 'react'

export default member => {
  const memberSrc = member.thumbnail ? member.thumbnail : 'https://picsum.photos/g/200/300/?blur'

  return (
    <article className="event">
      <div className="event-media">
        <img
          className="event-image"
          alt="raices event"
          src={memberSrc} />
      </div>
      <div className="eventData">
        <h3 className="event-info">{member.name}</h3>
        <h3 className="event-info">{member.title} </h3>
        <h3 className="event-info">{member.about}</h3>
      </div>
    </article>
  )
}
