import './style.css'
import { Container, Grid, Typography, Link } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import dance1 from './taleTale.png'

function EventDetail() {
  const navigate = useNavigate()
  return (
    <div className='eventDetails'>
      {/* heading */}
      <div>
        <Typography>
          <ArrowBackIcon onClick={() => navigate(-1)} className="arrowBack" />
          <p className="headingText">Nrityer O Tale Tale </p>{' '}
        </Typography>
        <p className="subHeading">inter school and college classical Group Dance Contest</p>
      </div>

      <Grid container>
        {/* Image grid */}
        <Grid item xs={5} className="picDetail">
          <img src={dance1} id="leftImage" alt="leftImage" />
          <a href="" >
          <button className="registerButton" style={{color: '#FF7158'}}>Register</button>
          </a>
          <button className='blurButton'>3 and 8 Members per Team</button>
        </Grid>
        {/* Text grid */}
        <Grid item xs={7} style={{ backgroundColor: '#FF7158' }}>
          <Container maxWidth="xl" className="rules">
            <Typography>
              <p className="ruleText">
                1.No one will be allowed to participate without registration.{' '}
              </p>
              <p className="ruleText">
                2.No one will be allowed to participate without registration.
              </p>
              <p className="ruleText">
                3.Participants must bring their pendrive or mobile phone containing their
                particular song.
              </p>
              <p className="ruleText">
                4.Every participant must bring their college id card with them, without id
                card participants are not allowed to participate.
              </p>
              <p className="ruleText">
                5.Time limit: Minimum: 3mins. Maximum :7mins. Judges decision will be the
                ultimate one.
              </p>
              <p className="ruleText">
                6.The participants will be judged on the basis of costumes, visual
                presentation and dance forms. Any offensive music/song is not allowed and
                no one should wear any vulgar dress (including sleeveless or crop top).
              </p>
              <p className="ruleText">
                7.Every participant should come in time. Every performance is time
                specific ,exceeding the time limit can cause disqualifying the team.
              </p>
              <p className="ruleText">
                {' '}
                8.Any violation of the above rules will not be entertained. For any
                queries and further details contact the co ordinators.
              </p>
              <br />
              <br />
              <Typography>
                <p className="nameEvent">Event co-ordinators</p>
              </Typography>
              <br />

              <Grid container >
                <Grid item md={4}>
                  <p className="nameCo">Smaranika</p>
                  <p className="eventNum">9679447127</p>
                </Grid>
                <Grid item md={4}>
                  <p className="nameCo">Upasana </p>
                  <p className="eventNum">8902228206</p>
                </Grid>
                <Grid item md={4}>
                  <p className="nameCo">Purba </p>
                  <p className="eventNum">758639506</p>
                </Grid>
              </Grid>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default EventDetail
