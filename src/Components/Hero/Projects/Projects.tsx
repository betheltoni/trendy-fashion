import React from 'react'
import Product1 from "../../../Images/Product1.jpg"
import Product2 from "../../../Images/Product2.jpg"
import ProjectsArticle from './ProjectsArticle'

const Projects = () => {
  return (
    <>
        <h2>Our Projects</h2>
        <hr />
        <div className='ProductsWrapper'>
            <section>
                <img src={Product1} alt="first product img" />
            </section>
            <ProjectsArticle/>
            <section>
                <img src={Product2} alt="first product img" />
            </section>
            <ProjectsArticle/>
        </div>
        
    </>
  )
}

export default Projects