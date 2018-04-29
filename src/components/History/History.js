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

  render () {
    return (
      <RouteData render={({ history }) => {
        const newHistory = history[0].data;
        return (
          <section className="mainSection">
            <div className="history__container">
            { this.props.language === 'en' ?
              <EngHistory histContent={newHistory.english} histTitle={newHistory.englishTitle}/> :
              <EspHistory histContent={newHistory.espanol} histTitle={newHistory.espanolTitle}/>}
            </div>
          </section>
      )}} />
    )
  }
}

const mapStateToProps = ({ ui }) => {
  return {
    visible: ui.footer.visible,
    language: ui.language.visible,
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
