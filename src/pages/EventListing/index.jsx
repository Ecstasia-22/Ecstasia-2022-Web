import './style.css'

import Cover from '../../Assets/MusicPage/Cover.png'
import Back from '../../Assets/MusicPage/Back.png'
import Watermark from '../../Assets/MusicPage/Watermark.png'
import Funtakshari from '../../Assets/MusicPage/FuntakshariCard.png'
import MelodicFiesta from '../../Assets/MusicPage/MelodicFiestaCard.png'
import PlugAndPlay from '../../Assets/MusicPage/PlugPlayCard.png'
import SangeetTantra from '../../Assets/MusicPage/SangeetTantraCard.png'
import WesternSerenity from '../../Assets/MusicPage/WesternSerenityCard.png'

import { Container, Grid, Typography } from '@mui/material'
import Footer from '../../components/Footer/index.jsx'
import { Link } from 'react-router-dom'

export default function Music() {
  return (
    <>
      <div
        alt="cover"
        className="coverImage"
        style={{ background: `url(${Cover})` }}
      ></div>
      <br />
      <br />
      <br />

      <img src={Watermark} alt="watermark" className="waterMark" />

      <Container>
        <Grid container>
          <Grid item xs={1}>
            <Link to={'/events'}>
              <img src={Back} alt="Go Back" />
            </Link>
          </Grid>{' '}
          <Typography variant="h5">
            <strong className="musicTypo">Music Events </strong>
          </Typography>
        </Grid>
      </Container>
      <br />
      <br />
      <br />

      <Container>
        <Grid container spacing={1} className="gridimages">
          <Grid item>
            <img src={Funtakshari} alt="funtakshari" />
          </Grid>
          <Grid item>
            <img src={MelodicFiesta} alt="MelodicFiesta" />
          </Grid>
          <Grid item>
            <img src={PlugAndPlay} alt="PlugAndPlay" />
          </Grid>
          <Grid item>
            <img src={SangeetTantra} alt="SangeetTantra" />
          </Grid>
          <Grid item>
            <img src={WesternSerenity} alt="WesternSerenity" />
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}
