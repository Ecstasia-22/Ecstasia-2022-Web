import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import './footer.css'

import ecstasiaLogo from './Logo.png'
import map from './map.png'

export default function Footer() {
  return (
    <>
      <Box classNameName="footerMain" sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid classNameName="logoclassName" item xs={2} sm={4} md={4}>
            <img src={ecstasiaLogo} alt="logo" />
          </Grid>
          <Grid classNamename="typoTexts" item xs={2} sm={4} md={4}>
            <Typography>For General Enquiries: </Typography>
            <Typography>ecstasia.uemk@gmail.com</Typography>
            <br />
            <br />
            <Typography>For Sponorship Enquiries:</Typography>
            <Typography>sponsorship.ecstasia.uemk@gmail.com</Typography>
          </Grid>

          <Grid classNameName="map" item xs={2} sm={4} md={4}>
            <img src={map} alt="imgmap" />
          </Grid>
          <hr />
          <br />
        </Grid>
      </Box>
    </>
  )
}
