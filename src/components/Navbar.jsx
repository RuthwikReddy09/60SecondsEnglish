import React from 'react'
import "../styles/Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='nav'>
        <Link to="/" className='logo'>60SecondsEnglish</Link>
        <div className="links">
            <Link to="/" className='link'>Home</Link>
            <Link to="/about" className='link'>About</Link>
            <a href="mailto:druthwik09@gmail.com" className='link' target="_top">Contact</a>
        </div>
    </div>
  )
}

export default Navbar