import React from 'react'
import { withRouteData } from 'react-static'

import { connect } from 'react-redux'

// import Gallery from '../ImageCarousel'
// import About from './About'
import Intro from './Intro'

import * as types from '../../constants/actionTypes'
import { footerAction } from '../visibilityActions'

// export default withRouteData(({ images }) => (
const Home = ({ hideFooter }) => (
  { hideFooter(false) }

  <section className="homeSection">
    <Intro />
    {/*
      <Gallery galleryClass={'homeGallery'} images={images} />
      <About />
    */}
  </section>
))


const mapStateToProps = ({ state }) => ({
  footerVisible: state.visibilityState.footerVisible,
})

const mapDispatchToProps = dispatch => {
  return {
    hideFooter: visibility => dispatch(footerAction(visibility)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
