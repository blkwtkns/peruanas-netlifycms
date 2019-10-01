import React from 'react'

export default member => {
  const memberSrc = member.thumbnail ? member.thumbnail : 'https://picsum.photos/g/200/300/?blur'

  return (
    <article className="member">
      <div className="member-media">
        <img
          className="member-image"
          alt="raices event"
          src={memberSrc} />
      </div>
      <div className="memberData">
        <h3 className="member-info">{member.name}</h3>
        <h3 className="member-info">{member.title} </h3>
        <h3 className="member-info">{member.about}</h3>
      </div>
    </article>
  )
}
