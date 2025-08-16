import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/anshul.png'
import { Link } from 'react-scroll'

// Navbar component
const Navbar = () => {

  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" className="logo" />
        <ul className="navbar-menu">
            <li><Link to="home" smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={-58} duration={500}>About Me</Link></li>
            <li><Link to="skills" smooth={true} offset={-150} duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth={true} offset={-260} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar