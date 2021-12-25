import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Ham from "./Assets/Ham.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {}, [nav]);
  return (
    <div className="nav">
      <div className="navbar">
        <ul className="list">
          <Link to="/">
            <li>HOME PAGE</li>
          </Link>
          <Link to="/Events">
            <li>EVENTS</li>
          </Link>
          <Link to="/Gallery">
            <li>GALLERY</li>
          </Link>
          <Link to="/Partners">
            <li>PARTNERS</li>
          </Link>
          <Link to="/Register">
            <li>REGISTER</li>
          </Link>
          <Link to="/AboutUs">
            <li>ABOUT US</li>
          </Link>
          <Link to="/CONTACT">
            <li>PARTNERS</li>
          </Link>
          <Link to="/NEWSFEED">
            <li>NEWS FEED</li>
          </Link>
        </ul>
        <div className="ham-menu">
          <h1 className="" onClick={() => setNav(!nav)}>
            {nav ? "X" : <img src={Ham} alt="hamburger menu" />}
          </h1>
        </div>
      </div>
      <div>
        <ul className={"mob-list" + (nav ? " display" : " display-none")}>
        <Link to="/">
            <li>HOME PAGE</li>
          </Link>
          <Link to="/Events">
            <li>EVENTS</li>
          </Link>
          <Link to="/Gallery">
            <li>GALLERY</li>
          </Link>
          <Link to="/Partners">
            <li>PARTNERS</li>
          </Link>
          <Link to="/Register">
            <li>REGISTER</li>
          </Link>
          <Link to="/About">
            <li>ABOUT</li>
          </Link>
          <Link to="/CONTACT">
            <li>PARTNERS</li>
          </Link>
          <Link to="/NEWSFEED">
            <li>NEWS FEED</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;