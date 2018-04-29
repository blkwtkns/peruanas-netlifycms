import React from 'react'
import { connect } from 'react-redux'
import RouteLinks from './RouteLinks'

const mapStateToProps = ({ ui }) => ({
  stasis: ui.header.stasis,
})
const Header = props => {
  return (
    <header className="header">
      <RouteLinks logo={props.logo} stasis={props.stasis}/>
    </header>
  )
}

export default connect(mapStateToProps)(Header)
