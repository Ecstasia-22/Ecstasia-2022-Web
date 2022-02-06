import { Link, useParams } from 'react-router-dom'

import './style.css'
import { Container, Grid, Typography, IconButton } from '@mui/material'
import Back from '../../Assets/MusicPage/Back.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import Footer from '../../components/Footer/index.jsx'
import { eventLists } from './eventLists.js'

export default function EventListing() {
  const params = useParams()
  let eventDetails
  const eventDetailsArray = eventLists.filter(
    (predicate) => predicate.category === params.eventListing
  )
  if (!(eventDetailsArray.length === 0)) eventDetails = eventDetailsArray[0]

  if (eventDetailsArray.length === 0) {
    return (
      <div>
        <h1>404 No Event Found</h1>
      </div>
    )
  } else {
    return (
      <>
        <div
          alt="cover"
          className="coverImage"
          style={{ background: `url(${eventDetails.cover})` }}
        ></div>
        <br />
        <br />
        <br />

        <img src={eventDetails.waterMark} alt="watermark" className="waterMark" />

        <Container>
          <Grid container>
            <Grid item>
              <Link to={'/events'}>
                <IconButton>
                  <ArrowBackIcon sx={{ fontSize: 60 }} fontSize="large" />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                <strong className="musicTypo">{eventDetails.name}</strong>
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <br />

        <Container>
          <Grid container spacing={1} className="gridimages">
            {eventDetails.events.map((event, index) => {
              return (
                <Grid item xs={12} md={4} lg={4} key={index}>
                  <img src={event.image} alt="funtakshari" />
                </Grid>
              )
            })}
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
}
