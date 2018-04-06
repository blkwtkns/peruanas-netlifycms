// import { withRouteData } from 'react-static'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intro from './Intro'
import { footerAction, headerAction } from '../uiActions'

class Home extends Component {
  componentDidMount () {
    this.props.footerVisibility(false)
    this.props.headerStasis(true)
  }

  componentWillUnmount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
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
  headerStasis: stasis => dispatch(headerAction(stasis)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
