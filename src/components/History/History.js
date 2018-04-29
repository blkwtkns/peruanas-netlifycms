import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteData } from 'react-static'
import EngHistory from './EngHistory'
import EspHistory from './EspHistory'
import { footerAction, headerAction } from '../uiActions'

class History extends Component {

  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

            // <EngHistory />
            // <EspHistory />
  render () {
    return (
      <RouteData render={({ history }) => {
        console.log('check history', history)
        return (
        <section className="mainSection">
          <div className="history__container">
          </div>
        </section>
      )}} />
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
)(History)
