import React from 'react'
import './gallery.scss'
import './galleryImage.css'
import './gallery'

import { Container, Grid, Typography, Button } from '@mui/material'

export default function Gallery() {
  return (
    <Grid className="sectionGallery">
      <Grid>
        <Typography className="textG" variant="h4" align="center">
          <b> Gallery</b>
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <div class="options">
          <div class="option active">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
          <div class="option">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
          <div class="option">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
          <div class="option">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
          <div class="option">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
        </div>
      </Grid>
      <Grid align="center" style={{ padding: '40px' }}>
        <Button align="center">See More</Button>
      </Grid>
    </Grid>
  )
}
