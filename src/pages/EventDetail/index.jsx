import './style.css'
import { Container, Grid, Typography } from '@mui/material'

import dance1 from './taleTale.png'

function EventDetail() {
  return (
    <>
      {/* heading */}
      <Grid>
        <Typography>
          {' '}
          <p className="headingText">Nrityer O Tale Tale </p>{' '}
        </Typography>
        <p className="sub">inter school and college classical Group Dance Contest</p>
      </Grid>

      <Grid container rowSpacing={0}>
        {/* Image grid */}
        <Grid item xs={4} className="picDetail" style={{ backgroundColor: 'red' }}>
          <img src={dance1} id="dance1" alt="imagee" />
        </Grid>
        {/* Text grid */}
        <Grid item xs={8} style={{ backgroundColor: '#FF7158' }}>
          <Container className="rules">
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
              <Typography variant="h4">Event co-ordinators</Typography>
              <br />

              <Grid container rowSpacing={1}>
                <Grid item xs={3}>
                  Smaranika
                  <p>9679447127</p>
                </Grid>
                <Grid item xs={3}>
                  Upasana <p>8902228206</p>
                </Grid>
                <Grid item xs={3}>
                  Purba <p>758639506</p>
                </Grid>
              </Grid>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default EventDetail
