import React from 'react'
import { withRouteData } from 'react-static'
import Gallery from '../ImageCarousel'
import About from './About'
import Intro from './Intro'

export default withRouteData(({ images }) => (
  <section className="homeSection">
    <Intro />
    <Gallery galleryClass={'homeGallery'} images={images} />
    <About />
  </section>
))
