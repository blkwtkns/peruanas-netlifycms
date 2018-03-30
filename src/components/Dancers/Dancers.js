import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ dancers }) => (
  <section className="dancersSection">
    <h1>Dancers of Raices Peruanas</h1>
    <br />
    {dancers.map(( dancer, idx ) => {
      if ( idx === 0 ) {
        return <div className="dancer--featured" key={dancer.data.slug}>
          <Link to={`/dancers/dancer/${dancer.data.slug}`}>
            <img src={dancer.data.thumbnail} alt={dancer.data.title} />
          </Link>
        </div>;
      }
    })}
    <div className="dancers-grid">
      {dancers.map(( dancer, idx ) => {
        if ( idx !== 0 ) {
          return <div className="dancer-col" key={dancer.data.slug}>
            <Link to={`/dancers/dancer/${dancer.data.slug}`}>
              <img src={dancer.data.thumbnail} alt={dancer.data.title} />
            </Link>
          </div>;
        }
      })}
    </div>
  </section>
))
