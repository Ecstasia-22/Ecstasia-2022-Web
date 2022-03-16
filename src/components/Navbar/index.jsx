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
    <nav className="NavbarItems">
      <div className="ecsLogo">{/* <img src="logo.png" alt="" /> */}</div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
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
