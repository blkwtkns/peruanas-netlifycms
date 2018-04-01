import React from 'react'
import { Link } from 'react-static'

export default ({ logo }) => (
  <nav className="nav-left">
    <img src={logo} className={'raicesLogo'}/>
    <h1 className="logo"><Link to="/">Raices Peruanas</Link></h1>
  </nav>
)
