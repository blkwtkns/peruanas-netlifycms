import React from 'react'
import { Link } from 'react-static'

// <Image className="raicesLogo" src={ logos[0] } circle/>

export default props => {
  return (
    <ul className="left">
      <li className="logo">
        <Link to="/">Raices Peruanas</Link>
      </li>
    </ul>
  )
}
