import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography, Container } from '@mui/material'

import './footer.css'

import ecstasiaLogo from './Logo.png'
import map from './map.png'
import Map from '../../Map'

export default function Footer() {
  return (
    <>
      <Container maxWidth="xl">
        <Box className="footerMain" sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid className="logoclass" item xs={2} sm={4} md={4}>
              <img className="logoImg2" src={ecstasiaLogo} alt="logo" />
            </Grid>
            <Grid className="typoTexts" item xs={2} sm={4} md={4}>
              <Typography className="center">
                <Typography>
                  {' '}
                  <b>For General Enquiries:</b>{' '}
                </Typography>
                <Typography>ecstasia.uemk@gmail.com</Typography>
                <br />
                <br />
                <Typography>
                  {' '}
                  <b>For Sponorship Enquiries:</b>{' '}
                </Typography>
                <Typography>sponsorship.ecstasia.uemk@gmail.com</Typography>
              </Typography>
            </Grid>

            <Grid className="map" item xs={2} sm={4} md={4}>
              <Map></Map>
            </Grid>
            <br />
          </Grid>
        </Box>
        <Grid className="copyRight">
          <hr
            style={{
              color: 'black',
              backgroundColor: 'black',
              height: 4
            }}
          />
          <Typography className="copyrightText">
            <b>© Copyright ECSTASIA 2022 - All Rights Reserved</b>
          </Typography>
        </Grid>
      </Container>
    </>
  )
}
