import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <>
        <div>LandingPage</div>
        <button><Link to={'/'}>Retour !</Link></button>
    </>
  )
}
