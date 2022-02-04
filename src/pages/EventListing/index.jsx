import './style.css'

import Back from '../../Assets/MusicPage/Back.png'
import { Container, Grid, Typography } from '@mui/material'
import Footer from '../../components/Footer/index.jsx'
import { Link } from 'react-router-dom'
import { eventLists } from './eventLists.js'
import { useParams } from 'react-router-dom'

export default function Music() {
  const params = useParams()
  let eventDetails
  const eventDetailsArray = eventLists.filter(predicate => predicate.category === params.eventListing)
  if(!(eventDetailsArray.length === 0)) 
     eventDetails =  eventDetailsArray[0];

  if(eventDetailsArray.length === 0){
    return (
      <div>
        <h1>404 No Event Found</h1>
      </div>
    )
  }else{
  return (
    <>
      <div alt="cover" className="coverImage" style={{background: `url(${eventDetails.cover})`}}></div>
      <br />
      <br />
      <br />

      <img src={eventDetails.waterMark} alt="watermark" className="waterMark" />

      <Container>
        <Grid container>
          <Grid item xs={1}>
            <Link to={'/events'}>
              <img src={Back} alt="Go Back" />
            </Link>
          </Grid>{' '}
          <Typography variant="h5">
           <strong className='musicTypo'>{eventDetails.name}</strong>
          </Typography>
        </Grid>
      </Container>
      <br />
      <br />
      <br />

      <Container>
        <Grid container spacing={1} className="gridimages">
          {eventDetails.events.map((event, index) => {
            return(
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
  )}
}
