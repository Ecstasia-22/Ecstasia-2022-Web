import { Container, Typography, Grid } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import React from 'react'
import './team.css'

import arka from '../../Assets/TeamPics/Core/Arka.JPG'
import keerti from '../../Assets/TeamPics/Core/Keerti.png'
import pradu from '../../Assets/TeamPics/Core/Pradumna.png'
import purba from '../../Assets/TeamPics/Core/Purba.jpeg'
import ritwik from '../../Assets/TeamPics/Core/Ritwik.jpg'
import shreya from '../../Assets/TeamPics/Core/Shreya.jpg'
import sneha from '../../Assets/TeamPics/Core/Sneha.jpg'
import somlina from '../../Assets/TeamPics/Core/Somlina.jpg'
import traina from '../../Assets/TeamPics/Core/Trina.jpg'

import ayushM from '../../Assets/TeamPics/Developers/AyushM.jpg'
import kaustav from '../../Assets/TeamPics/Developers/Kaustav.png'
import rajo from '../../Assets/TeamPics/Developers/Rajarshi.jpg'
import sk from '../../Assets/TeamPics/Developers/sk.jpg'
import suvra from '../../Assets/TeamPics/Developers/Suvra.jpg'
import prasun from '../../Assets/TeamPics/Developers/Prasun.jpeg'

/**
 * Change chard1, card2, card3 to inline style
 * install fav icon and add it to the project or import icons of fb and insta from mui-icons
 * below is the fomrmat of the array need to be mapped
 * create a condition if insta || fb exist then show else dont show otherwise it will create an error
 */

let teamArray = [
  {
    TeamName: 'Core',
    TeamMember: [
      {
        id: 1,
        Name: 'Arka Bhattacharyya',
        Designation: '...',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com',
        pic: arka
      },
      {
        id: 1,
        Name: 'Keerti Keswani',
        Designation: '...',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com',
        pic: keerti
      },

      {
        id: 1,
        Name: 'Pradumna Sinha',
        Designation: '...',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com',
        pic: pradu
      },

      {
        id: 1,
        Name: 'Purba Ghosh',
        Designation: '...',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com',
        pic: purba
      },

      {
        id: 1,
        Name: 'Ritwik Verma',
        Designation: '...',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com',
        pic: ritwik
      },

      {
        id: 1,
        Name: 'Shreya Bhattacharjee',
        Designation: '...',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com',
        pic: shreya
      },

      {
        id: 1,
        Name: 'Sneha Ghosh',
        Designation: '...',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com',
        pic: sneha
      },

      {
        id: 1,
        Name: 'Somlina Ghosh Ray',
        Designation: '...',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com',
        pic: somlina
      },

      {
        id: 1,
        Name: 'Trina Sarkar',
        Designation: '...',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com',
        pic: traina
      }
    ]
  },
  {
    TeamName: 'Website team member',
    TeamMember: [
      {
        id: 1,
        Name: 'Aayush Chowdhury',
        Designation: 'Web Development Head',
        fb: '',
        insta: ' https://instagram.com/_.thehalfbloodprince._'
      },
      {
        id: 2,
        Name: 'Prasun Das',
        Designation: 'Web Development Lead',
        fb: ' https://www.facebook.com/profile.php?id=100006827868253',
        insta: ' https://instagram.com/prasun_official_',
        pic: prasun
      },
      {
        id: 3,
        Name: 'Suvra Shaw',
        Designation: 'Web Designer',
        fb: 'www.facebook.com/suvrashaw',
        insta: 'www.instagram.com/suvrashaw',
        pic: suvra
      },
      {
        id: 4,
        Name: 'Sweta Karar',
        Designation: 'Web Developer',
        fb: 'https://www.facebook.com/sweta.karar.73',
        insta: ' https://instagram.com/cyra.jsx',
        pic: sk
      },
      {
        id: 5,
        Name: 'Kaustav Roy',
        Designation: 'Web Designer',
        fb: 'https://www.facebook.com/kaustavr19',
        insta: 'https://www.instagram.com/roy_k19',
        pic: kaustav
      },
      {
        id: 6,
        Name: 'Rajarshi Ray',
        Designation: 'Web Developer',
        fb: 'https://www.facebook.com/rajarshi.roy.9480',
        insta: 'https://www.instagram.com/skylord_raj90',
        pic: rajo
      },
      {
        id: 7,
        Name: 'Ayush Mazumdar',
        Designation: 'Web Developer',
        fb: 'https://www.facebook.com/ayushphillip.mazumdar',
        insta: 'https://www.instagram.com/the_introverted_guy',
        pic: ayushM
      },
      {
        id: 8,
        Name: 'Bihan Chakraborty',
        Designation: 'Web Developer',
        fb: 'https://www.facebook.com/bihan.chakraborty.9',
        insta: 'https://www.instagram.com/bihanc001'
      }
    ]
  }
]

export default function Teams() {
  return (
    <Container>
      {teamArray.map((item, index) => {
        return (
          <>
            <h1>{item.TeamName}</h1>
            <Grid container>
              {item.TeamMember.map((i) => {
                return (
                  <>
                    <Grid item md={3} xs={12} lg={3} class="teams_container">
                      <Grid
                        class=" card1 team_card"
                        style={{
                          background: `url(${i.pic}) center center no-repeat`,
                          backgroundSize: 'cover'
                        }}
                      >
                        <Grid class="border">
                          <h2>{i.Name}</h2>
                          <h3 className="de">{i.Designation}</h3>
                          <Grid class="icons">
                            <FacebookRoundedIcon sx={{ fontSize: 40, color: '#ffff' }} />
                            <InstagramIcon sx={{ fontSize: 40, color: '#ffff' }} />

                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )
              })}
            </Grid>
          </>
        )
      })}

      {/* <Grid class="card card1">
          <Grid class="border">
            <h2>Ben Stiller</h2>
            <Grid class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </Grid>
          </Grid>
        </Grid>
        <Grid class="card card2">
          <Grid class="border">
            <h2>Patrick Stewart</h2>
            <Grid class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </Grid>
          </Grid>
        </Grid>
        <Grid class="card card2">
          <Grid class="border">
            <h2>Patrick Stewart</h2>
            <Grid class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </Grid>
          </Grid>
        </Grid>
        <Grid class="card card2">
          <Grid class="border">
            <h2>Patrick Stewart</h2>
            <Grid class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </Grid>
          </Grid>
        </Grid> */}
    </Container>
  )
}
