import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './style.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav classNameName="NavbarItems">
      <div classNameName="ecsLogo">{/* <img src="logo.png" alt="" /> */}</div>
      <div classNameName="menu-icon" onClick={handleClick}>
        <i classNameName={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul classNameName={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link classNameName={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
