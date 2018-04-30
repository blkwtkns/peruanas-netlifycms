import React from 'react'
import ImageGallery from 'react-image-gallery'

export default props => (
  <div className={props.galleryClass}>
    <ImageGallery items={
      props.images.map(pic => ({
        thumbnail: pic.data.thumbnail,
        original: pic.data.thumbnail,
        description: 'Raices Peruanas',
      }))
    } />
  </div>
)
