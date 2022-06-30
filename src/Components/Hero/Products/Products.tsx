import React from 'react'
import "./Products.scss"
// import Product1 from "../../../Images/Product1.jpg"
// import Product2 from "../../../Images/Product2.jpg"
import ProductsArticle from './ProductsArticle'

const Projects = () => {
  return (
    <section className='OurProducts'>
        <h2>Our Products</h2>
        <hr />
        <div className='ProductsWrapper'>
            <section className='FirstProduct'>
                {/* <img src={Product1} alt="first product img" width="80%"/> */}
            </section>
            <ProductsArticle/>
        </div>
       <div className='ProductsWrapper2'>
            <ProductsArticle/>
            <section className='SecondProduct'>
                {/* <img src={Product2} alt="first product img"  width="80%"/> */}
            </section>
        </div>
          
        
        
    </section>
  )
}

export default Projects