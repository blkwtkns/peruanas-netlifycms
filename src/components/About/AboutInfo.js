import React from 'react'
import Gallery from '../ImageCarousel'

export default ({ images, info, language }) => (
  <div className="About">
    <div className="jumbotron">
      { language === 'en' ? info.firstenglish : info.primeroespanol }
    </div>
    <Gallery galleryClass={'homeGallery'} images={images} />
    <div className="jumbotron">
      { language === 'en' ? info.secondenglish : info.segundoespanol }
    </div>
  </div>
)
