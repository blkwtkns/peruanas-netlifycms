import React from 'react'
import { withRouteData } from 'react-static'
import Event from './Event'

export default withRouteData(({ presentations }) => (
  <section className="mainSection">
    <div className="presentation__container">
      <h1 className="pres-header">Presentations</h1>
      <ul>
        {presentations.map((event, id) => (
          <li key={id} className="presentation">
            <Event {...event.data} />
          </li>
        ))}
      </ul>
    </div>
  </section>
))
