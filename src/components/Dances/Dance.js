import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'

export default withRouteData(({ dance }) => (
  <section className="mainSection">
    <div className="dance__container">
      <div className="headline-row">
        <div className="sub-headline">
          <Link className="dance__back" to="/dances/">{'<'}</Link>
        </div>
        <div className="sub-headline">
          <h3 className="dance-title">{dance.data.title}</h3>
        </div>
      </div>
      <br />
      <img className="dance__image" src={dance.data.thumbnail} alt="" />
      <Markdown className="dance-markdown" source={dance.content} escapeHtml={false} />
    </div>
  </section>
))
