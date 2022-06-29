import React from 'react'
import FiguresCard from './FiguresCard'

const Facts = () => {
  return (
    <>
        <h2>FACTS & FIGURES</h2>
        <hr />
        <section>
            <FiguresCard figure="15+" desc="CLIENTS"/>
            <FiguresCard figure="1K" desc="AWARDS"/>
            <FiguresCard figure="10K" desc="PROJECTS"/>
        </section>
    </>
  )
}

export default Facts