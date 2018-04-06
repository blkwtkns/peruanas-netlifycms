import React from 'react'
import { connect } from 'react-redux'
import RouteLinks from './RouteLinks'
// import NavBrand from './NavBrand'

const mapStateToProps = ({ ui }) => ({
  stasis: ui.header.stasis,
})
const Header = props => {
  // console.log('see header props change', props.stasis)
  return (
    <header className="header">
      {/* <NavBrand logo={props.logo} /> */}
      <RouteLinks logo={props.logo} stasis={props.stasis}/>
    </header>
  )
}

export default connect(mapStateToProps)(Header)
