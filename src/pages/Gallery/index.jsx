import React from 'react'
import { Container, Grid } from '@mui/material'
import './gallery.css'
import Footer from '../../components/Home/Footer'


const galleryArray = [
  {
    image: 'https://images.unsplash.com/photo-1633994092151-60c9092c2ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    title: 'Image 1',
    Id: 1
  },
  {
    image: 'https://media.istockphoto.com/photos/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-picture-id1319479588?b=1&k=20&m=1319479588&s=170667a&w=0&h=bunblYyTDA_vnXu-nY4x4oa7ke6aiiZKntZ5mfr-4aM=',
    title: 'Image 2',
    Id: 2
  },
  {
    image: 'https://images.unsplash.com/photo-1549646075-f533f4622ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    title: 'Image 3',
    Id: 3
  },
  {
    image: 'https://images.unsplash.com/photo-1547495827-fff7a5e8b26c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Image 4',
    Id: 4
  },
  {
    image: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg',
    title: 'Image 5',
    Id: 5
  },
  {
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Image 6',
    Id: 6
  },
]



function GalleryPage() {
  return (
    <>
      <div className="gallery_page">
        <Container className="galleryPage">
          <Grid container spacing={1}>
            {galleryArray.map((item, index) => {

              if (item.Id % 6 === 5 || item.Id % 6 === 4 || item.Id % 6 === 3) {
                return (
                  <Grid item md={4}>
                  <a className='a' href="">
                  <figure>
                  <img
                  className="gallery_img gallery_img__short"
                    src={`${item.image}`}
                    alt={item.title}

                  />
                  <figcaption>{item.title}</figcaption>
                  </figure>
                  </a>
                  </Grid>)
              }
              if (item.Id % 6 === 2 || item.Id % 6 === 1) {
                return (<Grid item md={6}>
                  {' '}
                  <a className='a' href="">
                  <figure>
                  <img
                  className="gallery_img gallery_img__short"
                    src={`${item.image}`}
                    alt={item.title}

                  />
                  <figcaption>{item.title}</figcaption>
                  </figure>
                  </a>
                </Grid>)
              }
              if (item.Id % 6 === 0) {
                return (<Grid item md={12} className="tooltip">
                  {' '}
                  <a className='a' href="">
                  <figure>
                  <img
                  className="gallery_img gallery_img__long"
                    src={`${item.image}`}
                    alt={item.title}

                  />
                  <figcaption>{item.title}</figcaption>
                  </figure>
                  </a>
                </Grid>)
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
