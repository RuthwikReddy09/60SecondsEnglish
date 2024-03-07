import React from 'react'
import "../styles/Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-data">
        <Link to="/" className='footer-logo'>60SecondsEnglish</Link>
        <p className='footer-copyright'>@2024 Copyright. All rights reserved.</p>
        </div>
        <div className="footer-links">
        <Link to="/" className='footer-link'>Home</Link>
            <a href="#content" className='footer-link'>Practice</a>
            <a href="mailto:druthwik09@gmail.com" className='footer-link' target="_top">Contact</a>
        </div>
    </div>
  )
}

export default Footer