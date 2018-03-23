import React from 'react'
import { Link } from 'react-static'

export default props => {
  return (
    <div className="routeLinks">
      <Link to="/presentations">Presentations</Link>
      <Link to="/dances">Dances</Link>
      <Link to="/history">History</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}
