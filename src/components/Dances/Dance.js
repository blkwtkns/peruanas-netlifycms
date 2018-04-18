import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'

export default withRouteData(({ dance }) => (
  <section className="mainSection">
    <div className="dance__container">
      <div className="back-row">
        <Link className="dance__back" to="/dances/">{'<'} Back to Dances</Link>
      </div>
      <br />
      <h3 className="dance-title">{dance.data.title}</h3>
      <img className="dance__image" src={dance.data.thumbnail} alt="" />
      <Markdown source={dance.content} escapeHtml={false} />
    </div>
  </section>
))
