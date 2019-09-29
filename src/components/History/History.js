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
        const {
          thumbnail,
          english,
          espanol,
          englishTitle,
          espanolTitle,
        } = history[0].data;
        return (
          <section className="mainSection">
            <div className="history__container">
            { this.props.language === 'en' ?
              <EngHistory histContent={english} histTitle={englishTitle} image={thumbnail}/> :
              <EspHistory histContent={espanol} histTitle={espanolTitle} image={thumbnail}/>}
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
