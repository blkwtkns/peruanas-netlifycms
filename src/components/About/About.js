import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteData } from 'react-static'
import AboutInfo from './AboutInfo'
import { footerAction, headerAction } from '../uiActions'

class About extends Component {

  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

  render () {
    return (
      <RouteData render={({ images, about }) => (
        <section className="mainSection">
          <AboutInfo
            images={images}
            info={about[0].data}
            language={this.props.language}
          />
        </section>
      )} />
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
)(About)
