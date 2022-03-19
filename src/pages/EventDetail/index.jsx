import './style.css'
import { Container, Grid, Typography, Link } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Logo from '../../Assets/ecstasiaLogo.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import dance1 from './taleTale.png'
import { singleEvent } from './eventDetail'
import FacebookIcon from '../../Assets/socials/facebook.svg'
import InstagramIcon from '../../Assets/socials/instagram.svg'
import TwitterIcon from '../../Assets/socials/twitter.svg'
import YoutubeIcon from '../../Assets/socials/youtube.svg'

const HEIGHT = 'calc(100vh)'

function EventDetail() {
  const navigate = useNavigate()
  const param = useParams().eventDetail

  const event = singleEvent.find((event) => event.params === param) //|| {}

  return (
    <div className="eventDetails">
      <div className="bg" style={{ position: 'relative' }}>
        <div
          style={{
            zIndex: 9999,
            marginTop: '1.5rem',
            position: 'absolute',
            left: '50%',
            top: '1rem',
            transform: 'translateX(-50%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ArrowBackIcon onClick={() => navigate(-1)} className="arrowBack" />
            <span className="headingText">{event.title}</span>{' '}
          </div>
          <p className="subHeading">{event.subtitle}</p>
        </div>
        <Grid container style={{ height: window.innerWidth >= 900 ? HEIGHT : '100%' }}>
          <Grid item xs={12} md={5} style={{ position: 'relative', height: HEIGHT }}>
            <img src={event.coverImage} style={{ height: HEIGHT }} id="leftImage" alt="leftImage" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '45%',
                transform: 'translateY(-50%)',
                left: 0,
                zIndex: 999
              }}
            >
              <img src={FacebookIcon} style={{ width: '5rem', height: '5rem' }} alt="" />
              <img src={TwitterIcon} style={{ width: '5rem', height: '5rem' }} alt="" />
              <img src={InstagramIcon} style={{ width: '5rem', height: '5rem' }} alt="" />
              <img src={YoutubeIcon} style={{ width: '5rem', height: '5rem' }} alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: window.innerWidth >= 900 ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: '1.3rem',
                zIndex: 999,
                width: '100%',
                padding: '1rem'
              }}
            >
              <button
                className="registerButton"
                style={{
                  color: event.coverColor,
                  marginRight: '1rem',
                  marginBottom: window.innerWidth >= 900 ? 0 : '1rem'
                }}
                onClick={() => window.open(event.regLink, '_blank')}
              >
                Register
              </button>
              <button className="blurButton">3 and 8 Members per Team</button>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            style={{
              position: 'relative',
              height: HEIGHT,
             // overflow: 'auto',
              color: 'white',
              background: event.coverColor
            }}
          >
            <div
              style={{
                padding: '3rem',
                marginTop: window.innerWidth >= 900 ? '8rem' : 0
              }}
            >
              {event.rules.map((rule) => (
                <Typography variant="subtitle2" key={rule.id} className="ruleText">
                  {rule.rule}
                </Typography>
              ))}
              <Typography variant="subtitle2" style={{ marginTop: '1.4rem' }}>
                <p className="nameEvent">Event co-ordinators</p>
              </Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '0.7rem' }}>
                {event.coOrdinators.map((c) => (
                  <div style={{ marginRight: '1rem' }}>
                    <p variant="subtitle2" className='nameCo'>{c.name}</p>
                    <p variant="subtitle2" className='eventNum'>{c.number}</p>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/*
      <Grid item xs={7} style={{ backgroundColor: event.coverColor }}>
        <Container maxWidth="xl" className="rules">
          <Typography>
            {event.rules.map((rule) => (
              <p key={rule.id} className="ruleText">
                {rule.rule}
              </p>
            ))}
            <br />
            <br />
            <Typography>
              <p className="nameEvent">Event co-ordinators</p>
            </Typography>
            <br />

            <Grid container>
              {event.coOrdinators.map((c) => (
                <Grid key={c.id} item xs={3}>
                  <p className="nameCo">{c.name}</p>
                  <p className="eventNum">{c.number}</p>
                </Grid>
              ))}
            </Grid>
          </Typography>
        </Container>
      </Grid>
      <div>
        <Typography>
          <ArrowBackIcon onClick={() => navigate(-1)} className="arrowBack" />
          <p className="headingText">{event.title}</p>{' '}
        </Typography>
        <p className="subHeading">{event.desc}</p>
      </div>

      <Grid container>
        <Grid item xs={5} className="picDetail">
          <a href="">
            <button
              className="registerButton"
              style={{ color: event.coverColor }}
              onClick={() => window.open(event.regLink, '_blank')}
            >
              Register
            </button>
          </a>
          <button className="blurButton">3 and 8 Members per Team</button>
        </Grid>
      </Grid> */}
    </div>
  )
}

export default EventDetail