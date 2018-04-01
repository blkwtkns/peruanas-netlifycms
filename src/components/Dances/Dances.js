// import React from 'react'
// // import withRouteData from 'react-static'
//
// export default props => (
//   // export default withRouteData(() => (
//   <section className="mainSection">
//     <div className="dances__container">
//       <iframe className="dancesVideo" src="http://www.youtube.com/embed/?listType=user_uploads&list=RaicesPeruanas" />
//     </div>
//   </section>
// )

import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ dances }) => (
  <section className="mainSection">
    <div className="dancers__container">
      <h1 className="dancers--title">Dances of Peru</h1>
      <br />
      {dances.map((dance, idx) => {
        if (idx !== 0) {
          return null
        }
        return (
          <div className="dancer--featured" key={dance.data.slug}>
            <Link to={`/dances/dance/${dance.data.slug}`}>
              <img src={dance.data.thumbnail} alt={dance.data.title} />
            </Link>
          </div>
        )
      })}
      <div className="dancers-grid">
        {dances.map((dance, idx) => {
          if (idx === 0) {
            return null
          }
          return (
            <div className="dancer-col" key={dance.data.slug}>
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
