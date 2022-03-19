import React, { useState } from 'react'
import './sectionGallery.css'
import { Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import img from './e1.jpg'
import img2 from './e2.jpg'
import img3 from './e3.jpg'
import img4 from './e4.jpg'
import img5 from './e5.jpg'
const images = [img, img2, img3, img4, img5]

const Card = ({ image, active, ...rest }) => {
  return (
    <div
      className={`option ${active && 'active'}`}
      style={{
        background: `url(${image})`
      }}
      {...rest}
    >
      <div className="shadow" />
      <div className="label">
        <div className="icon">
          <i className="fas fa-walking" />
        </div>
        <div className="info">
          <div className="main">Ecstasia Events</div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(0)
  return (
    <div className="sectionGallery__main">
      <Typography className="textG" variant="h4" align="center">
        Gallery
      </Typography>
      <Typography align="center" className="sectionGallery">
        <div className="options">
          {images.map((img, i) => (
            <Card
              key={i}
              image={img}
              onClick={() => setActiveIdx(i)}
              active={activeIdx === i}
            />
          ))}
        </div>
      </Typography>

      <Typography align="center">
        <Link to={'/gallery'}>
          <Grid align="center">
            <button className="sectionGallery_btn"> View More </button>
          </Grid>
        </Link>
      </Typography>
    </div>
  )
}
