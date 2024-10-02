import React from 'react'
import './Navbar.css'
import logo from '../../assets/subham-logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>PortFolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        Connect With ME
      </div>
    </div>
  )
}

export default Navbar
