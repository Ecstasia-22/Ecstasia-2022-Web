import './music.css'

import Cover from '../../Assets/MusicPage/Cover.png'
import Back from '../../Assets/MusicPage/Back.png'
import Watermark from '../../Assets/MusicPage/Watermark.png'
import Funtakshari from '../../Assets/MusicPage/FuntakshariCard.png'
import MelodicFiesta from '../../Assets/MusicPage/MelodicFiestaCard.png'
import PlugAndPlay from '../../Assets/MusicPage/PlugPlayCard.png'
import SangeetTantra from '../../Assets/MusicPage/SangeetTantraCard.png'
import WesternSerenity from '../../Assets/MusicPage/WesternSerenityCard.png'
import Copyright from '../../Assets/MusicPage/Copyright.png'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@mui/material'
const useStyles = makeStyles({})

export default function Music() {
  // const class=useStyles()
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
              <span className="mscfont">Music Events</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />

      <Container>
        <Grid container spacing={1.185} className="gridimages">
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
      <Container>
        <Grid align="center">
          <footer>
            <img src={Copyright} alt="Copyright" />
          </footer>
        </Grid>
      </Container>
    </>
  )
}
