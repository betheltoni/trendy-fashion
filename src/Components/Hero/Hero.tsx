import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import Facts from './Facts/Facts'
import "./Hero.scss"
import Projects from './Projects/Projects'
import Services from './OurServices/OurServices'
import Gallery from './Gallery/Gallery'
import OurTeam from './OurTeam/OurTeam'
import Reviews from './Reviews/Reviews'

const Hero = () => {
  return (
    <div>
      <AboutUs/>
      <Facts/>
      <Projects/>
      <Services/>
      <Gallery/>
      <OurTeam/>
      <Reviews/>
    </div>
  )
}

export default Hero