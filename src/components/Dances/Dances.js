import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ dances }) => (
  <section className="mainSection">
    <div className="dances-container">
      <h1 className="dances--title">Dances of Peru</h1>
      <br />
      {dances.map((dance, idx) => {
        if (idx !== 0) {
          return null
        }
        return (
          <div className="dances--featured" key={dance.data.slug}>
            <Link to={`/dances/dance/${dance.data.slug}`}>
              <img src={dance.data.thumbnail} alt={dance.data.title} />
            </Link>
          </div>
        )
      })}
      <div className="dances-grid">
        {dances.map((dance, idx) => {
          if (idx === 0) {
            return null
          }
          return (
            <div className="dances-col" key={dance.data.slug}>
              <Link to={`/dances/dance/${dance.data.slug}`}>
                <img src={dance.data.thumbnail} alt={dance.data.title} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  </section>
))
