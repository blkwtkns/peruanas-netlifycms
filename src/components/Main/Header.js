import React from 'react'
import RouteLinks from './RouteLinks'
// import NavBrand from './NavBrand'

export default props => (
  <header className="header">
    {/* <NavBrand logo={props.logo} /> */}
    <RouteLinks logo={props.logo} />
  </header>
)
