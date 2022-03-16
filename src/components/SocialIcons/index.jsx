import React from 'react'
import './social.css'
import Facebook from '../../Assets/socials/facebook.svg'
import Instagram from '../../Assets/socials/instagram.svg'
import Twitter from '../../Assets/socials/twitter.svg'
import Youtube from '../../Assets/socials/youtube.svg'

export default function SocialIcons() {
  return (
    <div className="sticky-social">
      <div className="icons">
        <img src={Facebook} alt="facebook" className="social-icon" />
        <img src={Twitter} alt="twitter" className="social-icon" />
        <img src={Instagram} alt="instagram" className="social-icon" />
        <img src={Youtube} alt="youtube" className="social-icon" />
      </div>
    </div>
  )
}
