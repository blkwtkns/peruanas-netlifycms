import React from 'react'
import Gallery from '../ImageCarousel'
import { withRouteData } from 'react-static'
import About from './About'
import Intro from './Intro'
// import Separator from '../SepComponent'

export default withRouteData(({images}) => {

  const pics = images.map(pic => {
    return {
      thumbnail: pic.data.thumbnail,
      original: pic.data.thumbnail
    }
  })

  return (
    <section className="homeSection">
      <Intro />
      <Gallery images={ images } />
      <About />
    </section>
  )
})
