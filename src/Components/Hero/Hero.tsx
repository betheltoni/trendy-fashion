import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import Facts from './Facts/Facts'
import "./Hero.scss"
import Services from './OurServices/OurServices'
import Gallery from './Gallery/Gallery'
import OurTeam from './OurTeam/OurTeam'
import Reviews from './Reviews/Reviews'
import Products from './Products/Products'

const Hero = () => {
  return (
    <div>
      <AboutUs/>
      <Facts/>
      <Products/>
      <Services/>
      <Gallery/>
      <OurTeam/>
      <Reviews/>
    </div>
  )
}

export default Hero