import { Container, IconButton, Typography } from '@mui/material'
import React from 'react'
import './hero.css'
import BgVideo from '../../../Assets/Home/hero.mp4'
import Arrow from '../../../Assets/Home/arrow.svg'
import './hero'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Hero() {
  function Scroll() {
    scroll.scrollMore(700)
  }

  return (
    <div className="hero">
      <video className="hero_backgroundVideo" autoPlay loop muted>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <Container>
        <div className="spacing">
          <h1 className="hero_h1">Welcome to Ecstasia 2022</h1>
          <h2 className="hero_h2">ANNUAL CULTURAL FESTIVAL OF UEM KOLKATA</h2>
        </div>
        <Typography align="center">
          <Link onClick={Scroll} smooth={true} durations={500}>
            <IconButton>
              <img src={Arrow} alt="arrow" className="hero_arrow" />
            </IconButton>
          </Link>
        </Typography>
      </Container>
    </div>
  )
}
