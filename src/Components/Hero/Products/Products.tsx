import React from 'react'
import "./Products.scss"
import ProductsArticle from './ProductsArticle'

const Projects = () => {
  return (
    <section className='OurProducts'>
        <h2>Our Products</h2>
        <hr />
        <div className='ProductsWrapper'>
            <section className='FirstProduct'>
            </section>
            <ProductsArticle/>
        </div>
       <div className='ProductsWrapper2'>
            <ProductsArticle/>
            <section className='SecondProduct'>
            </section>
        </div>   
    </section>
  )
}

export default Projects