import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'

export default withRouteData(({ dance }) => (
  <section className="mainSection">
    <div className="dancer__container">
      <Link className="dancer__back" to="/dances/">{'<'} Back to Dances</Link>
      <br />
      <h3>{dance.data.title}</h3>
      <img className="dancer__image" src={dance.data.thumbnail} alt="" />
      <Markdown source={dance.content} escapeHtml={false} />
    </div>
  </section>
))
