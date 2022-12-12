import React from 'react'
import { Link } from 'react-router-dom'
import './test.css'

export default function Test() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={"https://wallpapers-clan.com/wp-content/uploads/2022/08/meme-gif-pfp-17.gif"} className="App-logo" alt="logo" />
        <p>
          VOICI NOTRE SUPER APÉPÉ
        </p>
        <div className='botDiv'>
          <button><Link to={"/LandingPage"}>LandingPage</Link></button>
          <button><Link to={"/LandingPage"}>LandingPage</Link></button>
          <button><Link to={"/LandingPage"}>LandingPage</Link></button>
          <button><Link to={"/LandingPage"}>LandingPage</Link></button>
        </div>
      </div>
    </div>
  )
}
