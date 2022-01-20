import './music.css'

import Cover from '../../Assets/MusicPage/Cover.png'
import Back from '../../Assets/MusicPage/Back.png'
import Watermark from '../../Assets/MusicPage/Watermark.png'
import MusicImg1 from '../../Assets/MusicPage/FuntakshariCard.png'

import { Container, Grid, Typography } from '@mui/material'

function Music() {
  return (
    <>
      <img src={Cover} alt="cover image" className="coverImage" />
      <br />
      <br />
      <br />

      <img src={Watermark} alt="watermark" className="waterMark" />

      <Container>
        <Grid direction="row">
          <Grid item>
            <Typography className="musicTypo">
              <img src={Back} alt="backspace image" />
              Music Events
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />

      <Container>
        <Grid container spacing={1.3} className="gridimages">
          <Grid item>
            <img src={MusicImg1} alt="funtakshari" />
          </Grid>
          <Grid item>
            <img src={MusicImg1} alt="funtakshari" />
          </Grid>
          <Grid item>
            <img src={MusicImg1} alt="funtakshari" />
          </Grid>
          <Grid item>
            <img src={MusicImg1} alt="funtakshari" />
          </Grid>
          <Grid item>
            <img src={MusicImg1} alt="funtakshari" />
          </Grid>
          <Grid item>
            <img src={MusicImg1} alt="funtakshari" />
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid align="center">
          <footer>
            <Typography>© Copyright ECSTASIA 2022 - All Rights Reserved</Typography>
          </footer>
        </Grid>
      </Container>
    </>
  )
}

export default Music
