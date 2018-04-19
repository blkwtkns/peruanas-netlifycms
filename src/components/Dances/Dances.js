import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ dances }) => {
  const featuredIdx = Math.floor(Math.random() * dances.length);
  return (
    <section className="mainSection">
      <div className="dances-container">
        <h1 className="dances--title">Dances of Peru</h1>
        <br />
        {
          <div className="dances-contain">
            <div className="dances--featured" key={dances[featuredIdx].data.slug}>
              <Link to={`/dances/dance/${dances[featuredIdx].data.slug}`}>
                <img src={dances[featuredIdx].data.thumbnail} alt={dances[featuredIdx].data.title} />
              </Link>
            </div>
          </div>
        }
        <div className="dances-grid">
          {dances.map((dance, idx) => {
            if (idx === featuredIdx) {
              return null
            }
            return (
              <div className="dances-contain">
                <div className="dances-col" key={dance.data.slug}>
                  <Link to={`/dances/dance/${dance.data.slug}`}>
                    <img src={dance.data.thumbnail} alt={dance.data.title} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})
