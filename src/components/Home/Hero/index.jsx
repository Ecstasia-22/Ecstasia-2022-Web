import { Container, Typography } from '@mui/material'
import React from 'react'
import './hero.css'
import BgVideo from '../../../Assets/Home/hero.mp4'
import Arrow from '../../../Assets/Home/arrow.svg'

export default function Hero() {
  return (<div className='hero'>
    <video className="hero_backgroundVideo" autoPlay loop muted>
      <source src={BgVideo} type="video/mp4" />
    </video>
    <Container>
      <div className='spacing'>
        <h1 className='hero_h1'>Welcome to Ecstasia 2022</h1>
        <h2 className='hero_h2' >ANNUAL CULTURAL FESTIVAL OF UEM KOLKATA</h2>
      </div>
      <Typography align="center">
          <img src={Arrow} alt="arrow" className='hero_arrow'/>
      </Typography>
    </Container>
  </div>)
}
