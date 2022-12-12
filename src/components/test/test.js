import React from 'react'
import { Link } from 'react-router-dom'
import './test.css'

export default function Test() {
  return (
    <div className="App">
      <div className="App-header">
        <button><Link to={"/LandingPage"}>Page d'accueil</Link></button>
      </div>
    </div>
  )
}
