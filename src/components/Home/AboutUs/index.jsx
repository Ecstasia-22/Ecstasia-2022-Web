import { Grid, Box, Item, Typography } from '@mui/material'
import React from 'react'
import './aboutUs.css'
import ecstasiaLogo from './Logo.png'

export default function About() {
<<<<<<< HEAD
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: 'repeat(2, 1fr)'
      }}
    >
      <Grid>
        <img src={ecstasiaLogo} alt="logo" />
      </Grid>
      <Grid>
        <Typography>About Us</Typography>
        <Typography>
          ECSTASIA is a land of celebration of talents. It is a cultural fest where
          artists and players gather around to share their expertise with everyone.
          Ecstasia is filled with a lot of activities like games and sports, music, drama,
          dance, literacy events, fine arts, photography and even online competitions. It
          is the celebration of uniqueness. Join us on the 4th edition of Ecstasia, March
          2022, organized by UEM Kolkata. Let us all gather and make this a significant
          moment of our life.
        </Typography>
      </Grid>
    </Box>
  )
=======
  return <div>About</div>
>>>>>>> 6bb46d72c920c3386c8109cbc72941a0e8febe80
}
