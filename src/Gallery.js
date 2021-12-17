import React from 'react'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'

const GALLERY = () => {
  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }))

  return <Carousel images={images} style={{ height: 200, width: 400 }} />
}

export default GALLERY
