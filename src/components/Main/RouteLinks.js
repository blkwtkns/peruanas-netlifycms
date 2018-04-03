import React from 'react'
import { Link } from 'react-static'

// <nav className="nav-right">
// <li><Link to="/"><span className="logo">Raices Peruanas</span></Link></li>
export default ({ logo }) => (
  <nav className="nav">
    <ul className="nav__routes" role="navigation">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/presentations">Presentations</Link></li>
      <li><Link to="/dances">Dances</Link></li>
      <li><Link to="/"><img src={logo} className={'raicesLogo'} alt="peruanos logo" /></Link></li>
      <li><Link to="/history">History</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/dancers">Dancers</Link></li>
    </ul>
  </nav>
)
