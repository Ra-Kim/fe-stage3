import React from 'react'
import "../styles.css"
import toggle from "../assets/svgs/Setting.svg"

const Contact = () => {
  return (
    <div className='paigination'>
      <nav>
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>Fantastic City</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>
      </nav>
      <div className='location-toggle'>
        <p>Location</p>
        <img src = {toggle} alt = "location toggle" />
      </div>
    </div>
  )
}

export default Contact