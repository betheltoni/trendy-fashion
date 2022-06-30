import React from 'react'
import "./OurServices.scss"
import Service from './Service'

const Services = () => {
  return (
    <section className='OurService'>
        <h2>Services</h2>
        <hr />
        <div className='ServicesWrapper'>
            <Service title="WEB DESIGN" />
            <Service title="WEB DESIGN" />
            <Service title="GRAPHIC DESIGN" />
            <Service title="GRAPHIC DESIGN" />
        </div>
    </section>
  )
}

export default Services