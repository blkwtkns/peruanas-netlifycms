import React from 'react'
import { withRouteData } from 'react-static'
import AboutInfo from './AboutInfo'
import Gallery from '../ImageCarousel'

export default withRouteData(({ images }) => (
  <section className="mainSection">
    <Gallery galleryClass={'homeGallery'} images={images} />
    <AboutInfo />
  </section>
))
