import React, { useState } from 'react'
import './sectionGallery.css'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const images = [
  'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg',
  'https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg',
  'https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg',
  'https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg',
  'https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg'
]

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
          <div className="main">Blonkisoaz</div>
          <div className="sub">Omuke trughte a otufta</div>
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
          <button className="sectionGallery_btn"> View More </button>
        </Link>
      </Typography>
    </div>
  )
}
