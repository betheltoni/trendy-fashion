import React from 'react'
import About from "../../../Images/AboutUs.jpg"

const AboutUs = () => {
  return (
    <>
       <article>
            <h2>
                About Us
            </h2> 
            <hr />
            <p>
                She is a product manager who has seen numerous projects from inception to completion. I am presently at WhoGoHost as the product manager.
                Here are some of the projects ive overseen so far in my career. Here are some of the projects ive overseen so far in my career.Here are some of the projects ive overseen so far in my career.
            </p>
       </article>
       <section>
            <img src={About} alt="AboutUs" />
       </section>
    </>
  )
}

export default AboutUs