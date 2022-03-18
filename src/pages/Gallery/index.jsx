import React from 'react'
import { Container, Grid, Typography, IconButton } from '@mui/material'
import './gallery.css'
import Footer from '../../components/Home/Footer'

function GalleryPage() {
  return (
    <Container className="galleryPage">
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <img
            className="imgHover"
            src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg"
          />
        </Grid>
        <Grid item xs={4}>
          <img
            className="imgHover"
            src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg"
          />
        </Grid>
        <Grid item xs={4}>
          <img
            className="imgHover"
            src="http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg"
          />
        </Grid>
      </Grid>
      <br />
      <br />

      <Grid container rowSpacing={1}>
        <Grid item xs={6}>
          {' '}
          <img
            className="imgHover"
            src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg"
          />
        </Grid>
        <Grid item xs={6}>
          {' '}
          <img
            className="imgHover"
            src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg"
          />
        </Grid>
      </Grid>
      <br />
      <br />

      <Grid container rowSpacing={1}>
        <Grid item xs={4}>
          {' '}
          <img
            className="imgHover"
            src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg"
          />
        </Grid>
        <Grid item xs={4}>
          {' '}
          <img
            className="img-hover-zoom--colorize"
            src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg"
          />
        </Grid>

        <Grid item xs={4}>
          {' '}
          <img
            className="imgHover"
            src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg"
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </Container>
  )
}

export default GalleryPage
