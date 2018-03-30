import React from 'react'
import ImageGallery from 'react-image-gallery'

export default ({images}) => {
  const pics = images.map(pic => {
    return {
      thumbnail: pic.data.thumbnail,
      original: pic.data.thumbnail
    }
  })

  return (
    <div className="homeGallery">
      <ImageGallery items={pics} />
    </div>
  )
}
