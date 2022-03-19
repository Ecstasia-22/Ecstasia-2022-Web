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
    TeamMember: [{ id: 1, Name: '', Designation: '', fb: '', insta: '' }]
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
