import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ dancers }) => (
  <section className="dancersSection">
    <h1>Dancers of Raices Peruanas</h1>
    <br />
    <ul>
      {dancers.map(dancer => (
        <li key={dancer.data.slug}>
          <Link to={`/dancers/dancer/${dancer.data.slug}`}>
            <img src={dancer.data.thumbnail} />
            {dancer.data.title}
          </Link>
        </li>
      ))}
    </ul>
  </section>
))
