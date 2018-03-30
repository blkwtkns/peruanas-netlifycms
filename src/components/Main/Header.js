import React from 'react'
import RouteLinks from './RouteLinks'
import { Link } from 'react-static'

export default props => (
  <header className="header">
    <nav className="nav-left">
      <img src={props.logo} className={"raicesLogo"}/>
      <h1 className="logo"><Link to="/">Raices Peruanas</Link></h1>
    </nav>
    <nav className="nav-right">
      <ul>
        <li><Link to="/presentations">Presentations</Link></li>
        <li><Link to="/dances">Dances</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/dancers">Dancers</Link></li>
      </ul>
    </nav>
  </header>
)
