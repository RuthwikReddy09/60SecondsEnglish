import React from 'react'
import "../styles/Introduction.css"
import IntroImage from "../../public/IntroImage.png"
const Introduction = () => {
  return (
    <div className='intro'>
      <div className="intro-container">
        <h1 className='intro-text'>Master <b className='intro-subtext'>English fluency</b> in just <br/> minutes a day with our <h4 className='intro-font-effect'> platform.</h4></h1>
        <a href="#content" className='intro-button'>Start Practicing</a>
      </div>
        <img src={IntroImage} alt="Image" className='intro-image'/>
    </div>
  )
}

export default Introduction