import React from 'react'
import { Link } from 'react-static'

export default ({ logo, stasis }) => {
  let linkVisibility = stasis ? 'linksVisible' : 'linksHidden'

  return (
    <nav className="nav">
      <ul className="nav__routes" role="navigation">
        <li className="raicesLink"><Link to="/"><img src={logo} className={'raicesLogo'} alt="peruanos logo" /></Link></li>
        <li className={ linkVisibility }><Link to="/about">About</Link></li>
        <li className={ linkVisibility }><Link to="/presentations">Presentations</Link></li>
        <li className={ linkVisibility }><Link to="/dances">Dances</Link></li>
        <li className={ linkVisibility }><Link to="/history">History</Link></li>
        <li className={ linkVisibility }><Link to="/contact">Contact</Link></li>
        <li className={ linkVisibility }><Link to="/dancers">Dancers</Link></li>
      </ul>
    </nav>
  )
}
