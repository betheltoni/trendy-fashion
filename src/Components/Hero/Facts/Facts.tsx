import React from 'react'
import "./Facts.scss"
import FiguresCard from './FiguresCard'


const Facts = () => {
  return (
    <section className='Facts'>
        <h2>FACTS & FIGURES</h2>
        <hr />
        <section>
            <FiguresCard figure="15+" desc="CLIENTS" style={{backgroundColor:"#D35796"}}/>
            <FiguresCard figure="1K" desc="AWARDS" style={{backgroundColor:"#9256B7"}}/>
            <FiguresCard figure="10K" desc="PROJECTS" style={{backgroundColor:"#578388"}}/>
        </section>
    </section>
  )
}

export default Facts