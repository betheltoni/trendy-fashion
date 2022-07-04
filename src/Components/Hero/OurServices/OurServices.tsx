import React from 'react'
import "./OurServices.scss"
import Service from './Service'

const Services = () => {
  return (
    <section className='OurService'>
        <h2>Services</h2>
        <hr />
        <div className='ServicesWrapper'>
            <Service title="WEB DEVELOPMENT" />
            <Service title="WEB DESIGN" />
            <Service title="PRESENTATION DESIGN" />
            <Service title="GRAPHIC DESIGN" />
        </div>
    </section>
  )
}

export default Services