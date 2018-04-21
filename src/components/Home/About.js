import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteData } from 'react-static'
import AboutInfo from './AboutInfo'
import Gallery from '../ImageCarousel'
import { footerAction, headerAction } from '../uiActions'

class About extends Component {

  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

  render () {
    return (
      <RouteData render={({ images }) => (
        <section className="mainSection">
          <Gallery galleryClass={'homeGallery'} images={images} />
          <AboutInfo />
        </section>
      )} />
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
)(About)
