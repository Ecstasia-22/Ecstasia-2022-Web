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
import sayantani from '../../Assets/TeamPics/Core/Sayantani.jpeg'
import Soumita from '../../Assets/TeamPics/Core/soumita.jpg'
import swarnava from '../../Assets/TeamPics/Core/swarnava.jpeg'
import pahel from '../../Assets/TeamPics/Core/pahel.jpg'

import bihan from '../../Assets/TeamPics/Developers/bihan.jpg'
import aayush from '../../Assets/TeamPics/Developers/aayush.jpg'
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
    TeamName: 'Our Team',
    TeamMember: [
      {
        id: 1,
        Name: 'Sayantani Garai',
        Designation: 'Ecstasia Head',
        fb: 'https://www.facebook.com/XOXmischiefmanagedXOX',
        insta: 'https://www.instagram.com/messchiefmanaged',
        pic: sayantani
      },
      {
        id: 2,
        Name: 'Somlina Ghosh Ray',
        Designation: 'General Secretary',
        fb: 'https://www.facebook.com/somlina.ghoshray.92',
        insta: 'https://www.instagram.com/_seriously.unserious_',
        pic: somlina
      },
      {
        id: 2.2,
        Name: 'Sneha Ghosh',
        Designation: 'Convenor',
        fb: 'https://www.facebook.com/profile.php?id=100067949221142',
        insta: 'https://www.instagram.com/cold_leee',
        pic: sneha
      },
      {
        id: 3,
        Name: 'Soumita Ghosh',
        Designation: 'President of Theatrix, Drama Club ',
        fb: 'https://www.facebook.com/soumita.ghosh.925059',
        insta: 'https://www.instagram.com/soumita22_ghosh',
        pic: Soumita
      },
      {
        id: 4,
        Name: 'Purba Ghosh',
        Designation: 'President of Rhythmic Syndrome, Dance Club',
        fb: 'https://www.facebook.com/purba.ghosh.739',
        insta: 'https://instagram.com/purba.ghosh29?igshid=1nw3fzwdm2j0s',
        pic: purba
      },
      {
        id: 5,
        Name: 'Arka Bhattacharyya',
        Designation: 'President of Symphony, Music Club',
        fb: 'https://www.facebook.com/arka.bhattacharyya.58',
        insta: 'https://www.instagram.com/arkabht',
        pic: arka
      },
      {
        id: 6,
        Name: 'Trina Sarkar',
        Designation: 'Head of Logistics and Operations',
        insta: 'https://www.instagram.com/trinasarkar31',
        pic: traina
      },
      {
        id: 7,
        Name: 'Pradumna Sinha',
        Designation: 'Head of Graphics Team',
        fb: ' https://www.facebook.com/pradumna.sinha',
        insta: 'https://www.instagram.com/pradumna_sinha06',
        pic: pradu
      },
      {
        id: 8,
        Name: 'Shreya Bhattacharjee',
        Designation: 'Marketing and Collaboration Head',
        fb: 'https://www.facebook.com/shreya.bhattacharjee.9421',
        insta: 'https://www.instagram.com/shreysmriti',
        pic: shreya
      },
      {
        id: 9,
        Name: 'Swarnava Halder',
        Designation: 'Head of Marketing and Collaboration',
        fb: 'https://www.facebook.com/itz.swarnav.17',
        insta: 'https://instagram.com/_swrnv_?utm_medium=copy_link',
        pic: swarnava
      },
      {
        id: 10,
        Name: 'Keerti Keswani',
        Designation: 'Head of Public Relations',
        fb: 'https://www.facebook.com/keerti.keswani.50',
        insta: 'https://www.instagram.com/keertikeswani',
        pic: keerti
      },
      {
        id: 11,
        Name: 'Ritwik Verma',
        Designation: 'Head of Finance',
        fb: 'https://www.facebook.com/kiwtir.amrev',
        insta: 'https://instagram.com/_.amrev._?utm_medium=copy_link',
        pic: ritwik
      },
      {
        id: 12,
        Name: 'Pahel Singh',
        Designation: 'Head of Content Team',
        fb: 'https://www.facebook.com/profile.php?id=100069298763919',
        insta: 'https://www.instagram.com/pahel.psk.29',
        pic: pahel
      }
    ]
  },
  {
    TeamName: 'Developers and UI/UX Team ',
    TeamMember: [
      {
        id: 1,
        Name: 'Aayush Chowdhury',
        Designation: 'Web Development Head',
        insta: ' https://instagram.com/_.thehalfbloodprince._',
        pic: aayush
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
        id: 5,
        Name: 'Kaustav Roy',
        Designation: 'Web Designer',
        fb: 'https://www.facebook.com/kaustavr19',
        insta: 'https://www.instagram.com/roy_k19',
        pic: kaustav
      },
      // {
      //   id: 8,
      //   Name: 'Bihan Chakraborty',
      //   Designation: 'Web Developer',
      //   fb: 'https://www.facebook.com/bihan.chakraborty.9',
      //   insta: 'https://www.instagram.com/bihanc001',
      //   pic: bihan
      // },
      {
        id: 4,
        Name: 'Sweta Karar',
        Designation: 'Web Developer',
        fb: 'https://www.facebook.com/sweta.karar.73',
        insta: ' https://instagram.com/cyra.jsx',
        pic: sk
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
      }
    ]
  }
]

export default function Teams() {
  return (
    <div className="teams">
      <Container>
        {teamArray.map((item, index) => {
          return (
            <>
              <Typography variant="h3" className="teamName">
                {item.TeamName}
              </Typography>
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
                            <Typography variant="subtitle2" className="de h3">
                              {i.Designation}
                            </Typography>
                            <Grid class="icons">
                              {i.fb ? (
                                <a href={`${i.fb}`}>
                                  <FacebookRoundedIcon
                                    fontSize="small"
                                    className="fa"
                                    sx={{ fontSize: 40, color: '#ffff' }}
                                  />
                                </a>
                              ) : (
                                <></>
                              )}
                              <a href={`${i.insta}`}>
                                <InstagramIcon
                                  fontSize="small"
                                  sx={{ fontSize: 40, color: '#ffff' }}
                                />
                              </a>
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
      </Container>
    </div>
  )
}
