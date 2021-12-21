import React from 'react'
import { Carousel } from 'react-bootstrap'

import Image1 from './Assets/Sample1.jfif'
import Image2 from './Assets/Sample2.jfif'
import Image3 from './Assets/Sample3.jpg'
const CarouselContainer = () => {
    return (
        <Carousel style={{overflow:'hidden'}}>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-75"
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-75"
      src={Image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-75"
      src={Image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
  }
export default CarouselContainer
