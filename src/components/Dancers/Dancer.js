import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'

export default withRouteData(({ dancer }) => (
  <section className="mainSection">
    <div className="dancer__container">
      <Link className="dancer__back" to="/dancers/">{'<'} Back to Dancers</Link>
      <br />
      <h3>{dancer.data.title}</h3>
      <img className="dancer__image" src={dancer.data.thumbnail} alt="" />
      <Markdown source={dancer.content} escapeHtml={false} />
    </div>
  </section>
))
