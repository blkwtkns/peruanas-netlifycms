// import { withRouteData } from 'react-static'
import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        <div className="Intro">
          <div className="greyBox">
            <h1 className="intro-title">Raices Peruanas</h1>
            <h1 className="intro-subtitle">Dance, Music, Culture</h1>
          </div>
        </div>
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
