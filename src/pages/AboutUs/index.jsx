import './style.css'
import '../Home/home.css'
import uemLogo from '../../Assets/uemLogo.jpg'
import ecstasiaLogo from '../../Assets/ecstasiaLogo.jpg'
import { Container, Grid, Paper, Typography } from '@mui/material'
import Footer from '../../components/Home/Footer'

const writeup = {
  uem: {
    image: uemLogo,
    background: '#000',
    title: 'About our university, UEM Kolkata',
    desc: `University of Engineering and Management (UEM), Kolkata was established in the year 2014 by Act No. 25 of Government of West Bengal. Students of this university are always on the spot with the top corporates. UEM Kolkata has been awarded to be in "AAA" category in NPTEL program (IIT Kharagpur and IIT Madras).
    The IEM-UEM group is a renowned educational group amongst the organizations focusing on academic attainment keeping industry at the centre. Exquisite standards have been set by IEM-UEM group regarding the depletion of technical and management assests. The strong foundation of IEM-UEM group has helped to rise the standards and attain fame and recognition all over the country. It aims to serve the country by enabling the future generation to attain great success with self-sufficiency.`
  },
  ecstasia: {
    image: ecstasiaLogo,
    title: 'About Ecstasia - the Annual Cultural Festival of UEM Kolkata',
    desc: `ECSTASIA is a land of celebration of talents. It is a cultural fest where artists and players gather around to share their expertise with everyone. Ecstasia is filled with a lot of activities like games and sports, music, drama, dance, literacy events, fine arts, photography and even online competitions. It is the celebration of uniqueness.
    Join us on the 4th edition of Ecstasia, March 2022, organized by UEM Kolkata. Let us all gather and make this a significant moment of our life.`
  },
  theme: {
    title: 'Our theme - Times of Yore',
    desc: `UEM Kolkata is organizing ECSTASIA with the theme "The times of yore". Why not relive our memories from our favourite TV channels, favourite food and books, to our favourite songs that made our childhood memorable? There is a saying-'Old is gold', we become emotional when we recollect the past or bygone days of our life. We plunge into blissful memories and ecstasy. Let us mix our memorable times of yore with the present significant moment of our life with a nostalgic recollection of former times as our expertise by joining us, this march ECSTASIA'22.`,
    background: ecstasiaLogo
  }
}

function AboutUs() {
  return (
    <>
      <section style={{ background: `${writeup.uem.background}`, padding: '3rem' }}>
        <Container>
          <Grid container spacing={1}>
            <Grid item md={3}>
              <br />
              <br />{' '}
              <img className="about_uemLogo" src={uemLogo} alt="uem  transparent logo" />
            </Grid>
            <Grid item md={8}>
              <Paper elevation={0} className="about_hero">
                <Typography variant="h4" className="about_title">
                  <b>{writeup.uem.title}</b>
                </Typography>
                <br />
                <Typography variant="subtitle2" className="about_desc">
                  {writeup.uem.desc}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>

      <div className="home">
        <section style={{ padding: '3rem' }}>
          <Container>
            <Grid container spacing={1}>
              <Grid item md={8}>
                <div className="about_hero">
                  <Typography variant="h4" className="about_title">
                    <b>{writeup.ecstasia.title}</b>
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="subtitle2" className="about_desc">
                    {writeup.ecstasia.desc}
                  </Typography>
                </div>
              </Grid>
              <Grid item md={3}>
                <br />
                <br />{' '}
                <img
                  className="about_uemLogo"
                  src={writeup.ecstasia.image}
                  alt="uem  transparent logo"
                />
              </Grid>
            </Grid>
          </Container>
        </section>

        <section
          style={{
            background: `url(${writeup.theme.background})`,
            padding: '3rem',
            color: '#fff'
          }}
        >
          <Container>
            <Grid container spacing={1}>
              <Grid item md={3}>
                <br />
                <br />
                {/**------------------------------------------- Change to yt video -------------------------------------------------------- */}
                <img
                  className="about_uemLogo"
                  src={uemLogo}
                  alt="uem  transparent logo"
                />
              </Grid>
              <Grid item md={8}>
                <div className="about_hero">
                  <Typography variant="h4" className="about_title">
                    <b>{writeup.theme.title}</b>
                  </Typography>
                  <br />
                  <Typography variant="subtitle2" className="about_desc">
                    {writeup.theme.desc}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default AboutUs
