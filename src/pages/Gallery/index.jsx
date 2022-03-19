/* eslint-disable */
import React from 'react'
import { Container, Grid } from '@mui/material'
import './gallery.css'
import Footer from '../../components/Home/Footer'
import img from './e1.jpg'
import img2 from './e2.jpg'
import img3 from './e3.jpg'
import img4 from './e4.jpg'
import img5 from './e5.jpg'
import img6 from './e6.jpg'
const galleryArray = [
  {
    image: img,
    title: 'Image 1',
    Id: 1
  },
  {
    image: img2,
    title: 'Image 2',
    Id: 2
  },
  {
    image: img3,
    title: 'Image 3',
    Id: 3
  },
  {
    image: img4,
    title: 'Image 4',
    Id: 4
  },
  {
    image: img5,
    title: 'Image 5',
    Id: 5
  },
  {
    image: img6,
    title: 'Image 6',
    Id: 6
  }
]

function GalleryPage() {
  return (
    <>
      <div className="gallery_page">
        <Container className="galleryPage">
          <Grid container spacing={1}>

            {galleryArray.map((item) => {
              //eslint-disable-next-line
              if (item.Id % 6 === 5 || item.Id % 6 === 4 || item.Id % 6 === 3) {
                return (
                  <Grid item md={4}>
                    <a className="a" href="#">
                      <figure>
                        <img
                          className="gallery_img gallery_img__short"
                          src={`${item.image}`}
                          alt={item.title}
                        />
                        <figcaption>{item.title}</figcaption>
                      </figure>
                    </a>
                  </Grid>
                )
              }
              if (item.Id % 6 === 2 || item.Id % 6 === 1) {
                return (
                  <Grid item md={6}>
                    {' '}
                    <a className="a" href="">
                      <figure>
                        <img
                          className="gallery_img gallery_img__short"
                          src={`${item.image}`}
                          alt={item.title}
                        />
                        <figcaption>{item.title}</figcaption>
                      </figure>
                    </a>
                  </Grid>
                )
              }
              if (item.Id % 6 === 0) {
                return (
                  <Grid item md={12} className="tooltip">
                    {' '}
                    <a className="a" href="">
                      <figure>
                        <img
                          className="gallery_img gallery_img__long"
                          src={`${item.image}`}
                          alt={item.title}
                        />
                        <figcaption>{item.title}</figcaption>
                      </figure>
                    </a>
                  </Grid>
                )
              }
            })}
          </Grid>
          <Footer />
        </Container>
      </div>
    </>
  )
}

export default GalleryPage
