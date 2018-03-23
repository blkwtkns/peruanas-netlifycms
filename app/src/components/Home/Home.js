import React from 'react'
import About from './About'
// import { images } from '../../constants/photoState';
// import ImageCarousel from '../ImageCarousel';
import Intro from './Intro'
import Separator from '../SepComponent'
import Gallery from '../LightGallery';
import { withRouteData } from 'react-static'

// <ImageCarousel images={ images }/>
// <Separator clName={'aboutSeparator'} />

// export default props => (
export default withRouteData(({images}) => (
  <section className="homeSection">
    <Intro />
    <Gallery clName={'HomeGallery'} images={images} />
    <About />
  </section>
))
