import React from 'react'
import './team.css'

/**
 * Change chard1, card2, card3 to inline style
 * install fav icon and add it to the project or import icons of fb and insta from mui-icons
 * below is the fomrmat of the array need to be mapped
 * create a condition if insta || fb exist then show else dont show otherwise it will create an error
 */

let teamArray = [
  {
    TeamName: 'Core',
    TeamMembers: [
      {
        id: 1,
        Name: 'Name of the person',
        Designation: 'President',
        fb: 'https://www.facebook.com',
        insta: 'https://www.instagram.com'
      }
    ]
  },
  {
    TeamMembers: 'Website team member',
    TeamMember: [{ id: 1, Name: 'Aayush Chowdhury', Designation: 'Web Development Head', fb: '', insta: ' https://instagram.com/_.thehalfbloodprince._' },
    {id: 2,Name:'Prasun Das' ,Designation:'Web Development Lead' ,fb:' https://www.facebook.com/profile.php?id=100006827868253' ,insta:' https://instagram.com/prasun_official_' },
    {id: 3,Name:'Suvra Shaw' ,Designation:'Web Designer' ,fb:'www.facebook.com/suvrashaw' ,insta:'www.instagram.com/suvrashaw' },
    {id: 4,Name:'Sweta Karar' ,Designation:'Web Developer' ,fb:'https://www.facebook.com/sweta.karar.73' ,insta:' https://instagram.com/cyra.jsx' },
    {id: 5,Name:'Kaustav Roy' ,Designation:'Web Designer' ,fb:'https://www.facebook.com/kaustavr19' ,insta:'https://www.instagram.com/roy_k19' },
    {id: 6,Name:'Rajarshi Ray' ,Designation:'Web Developer' ,fb:'https://www.facebook.com/rajarshi.roy.9480' ,insta:'https://www.instagram.com/skylord_raj90' },
    {id: 7,Name:'Ayush Mazumdar' ,Designation:'Web Developer' ,fb:'https://www.facebook.com/ayushphillip.mazumdar' ,insta:'https://www.instagram.com/the_introverted_guy' },
    {id: 8,Name:'Bihan Chakraborty' ,Designation:'Web Developer' ,fb:'https://www.facebook.com/bihan.chakraborty.9' ,insta:'https://www.instagram.com/bihanc001' }

  ]
  }
]

export default function Teams() {
  return (
    <div>
      <div class="container">
        <div class="card card0">
          <div class="border">
            <h2>Al Pacino</h2>
            <div class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="card card1">
          <div class="border">
            <h2>Ben Stiller</h2>
            <div class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="card card2">
          <div class="border">
            <h2>Patrick Stewart</h2>
            <div class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
