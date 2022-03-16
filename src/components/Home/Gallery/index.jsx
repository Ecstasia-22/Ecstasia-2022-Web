import React from 'react'
import { Grid } from '@mui/material'

import './gallery.css'
import './gallery'

export default function Gallery() {
  return (
    <>
      <Grid className="galleryMain">
        <div className="options">
          <div className="option active">
            <div className="shadow"></div>
            <div className="label">info1</div>
          </div>

          <div className="option">
            <div className="shadow"></div>
            <div className="label">label</div>
          </div>

          <div className="option">
            <div className="shadow"></div>
            <div className="label">label</div>
          </div>
          <div className="option">
            <div className="shadow"></div>
            <div className="label">label</div>
          </div>
          <div className="option">
            <div className="shadow"></div>
            <div className="label">label</div>
          </div>
        </div>
      </Grid>
    </>
  )
}
