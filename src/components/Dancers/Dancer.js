import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'

export default withRouteData(({ dancer }) => (
  <section className="mainSection">
    <div className="dancer__container">
      <div className="headline-row">
        <div className="sub-headline">
          <Link className="dancer__back" to="/dancers/">{'<'}</Link>
        </div>
        <div className="sub-headline">
          <h3 className="dancer-title">{dancer.data.title}</h3>
        </div>
      </div>
      <br />
      <img className="dancer__image" src={dancer.data.thumbnail} alt="" />
      <Markdown className="dancer-markdown" source={dancer.content} escapeHtml={false} />
    </div>
  </section>
))
