// import { withRouteData } from 'react-static'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intro from './Intro'
import footerAction from '../uiActions'

class Home extends Component {
  componentDidMount () {
    this.props.footerVisibility(false)
  }

  componentWillUnmount () {
    this.props.footerVisibility(true)
  }

  render () {
    return (
      <section className="homeSection">
        <Intro />
      </section>
    )
  }
}

const mapStateToProps = ({ ui }) => {
  return {
    visible: ui.footer.visible,
  }
}

const mapDispatchToProps = dispatch => ({
  footerVisibility: visible => dispatch(footerAction(visible)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
