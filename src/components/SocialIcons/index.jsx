import React from 'react'
import './social.css'
import Facebook from '../../Assets/socials/facebook.svg'
import Instagram from '../../Assets/socials/instagram.svg'
import Twitter from '../../Assets/socials/twitter.svg'
import Youtube from '../../Assets/socials/youtube.svg'

export default function SocialIcons() {
  return (
    <div className="sticky-social">
      <div className="social_icons">
      <a href='https://m.facebook.com/388024044955563/'>  <img src={Facebook} alt="facebook" className="social-icon" /> </a>
      <a href='https://twitter.com/Ecstasia_UEMK'>  <img src={Twitter} alt="twitter" className="social-icon" /> </a>
      <a href='https://instagram.com/ecstasia.uemk?utm_medium=copy_link'>  <img src={Instagram} alt="instagram" className="social-icon" /> </a>
      <a href='https://www.youtube.com/ecstasiauemkolkata'>  <img src={Youtube} alt="youtube" className="social-icon" /> </a>
      </div>
    </div>
  )
}
