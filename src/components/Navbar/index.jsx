import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './style.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  let activeStyle = {
    background: '#f566af',
    color: '#fff'
  }

  return (
    <nav className="NavbarItems">
      <Link to="/">
        <div className="ecsLogo" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (

              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.url}
                  onClick={(e) => handleClick(e)}
                >
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
