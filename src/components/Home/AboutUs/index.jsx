import { Grid, Box, Item, Typography, Container } from '@mui/material'
import React from 'react'
import './aboutUs.css'
import ecstasiaLogo from './Logo.png'

export default function About() {
  return (
    <div className="about">
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={4} className="logoClass">
            <img src={ecstasiaLogo} alt="logo" />
          </Grid>
          <Grid item md={8} className="contentClass">
            <Typography variant="h4" align="center">
              <b>About Us</b>
            </Typography>
            <br />
            <Typography variant="h6">
              ECSTASIA is a land of celebration of talents. It is a cultural fest where
              artists and players gather around to share their expertise with everyone.
              Ecstasia is filled with a lot of activities like games and sports, music,
              drama, dance, literacy events, fine arts, photography and even online
              competitions. It is the celebration of uniqueness. <br />
              <br />
              <p>
                Join us on the 4th edition of Ecstasia, March 2022, organized by UEM
                Kolkata. Let us all gather and make this a significant moment of our life.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
