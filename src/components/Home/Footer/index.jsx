import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography, Container } from '@mui/material'

import './footer.css'

import ecstasiaLogo from './Logo.png'
import Map from '../../Map'

export default function Footer() {
  return (
    <>
      <Container maxWidth="xl" id="footerMain">
        <Container className="footerMain">
          <Grid container>
            <Grid item className="logoclass" xs={12} md={3}>
              <img className="logoImg2" src={ecstasiaLogo} alt="logo" />
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="typotexts">
                <b>For General Enquiries:</b>
                <p>ecstasia.uemk@gmail.com</p>
                <br />
                <br />
                <b>For Sponorship Enquiries:</b>
                <p>sponsorship.ecstasia.uemk@gmail.com</p>
              </div>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid className="map" item xs={12} md={4}>
              <Map />
            </Grid>
            <br />
          </Grid>
        </Container>
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
