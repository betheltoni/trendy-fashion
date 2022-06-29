import React from 'react'
import TeamCard from './TeamCard'
import Team1 from "../../../Images/Team1.jpg"
import Team2 from "../../../Images/Team2.jpg"
import Team3 from "../../../Images/Team3.jpg"
import Team4 from "../../../Images/Team4.jpg"
import Team5 from "../../../Images/Team5.jpg"
import Team6 from "../../../Images/Team6.jpg"

const OurTeam = () => {
  return (
    <>
        <h2>Our Team</h2>
        <hr />
        <p>We have an impressive team of professionals and seasoned business experts.</p>
        <section>
            <TeamCard src={Team1} alt="first team member"/>
            <TeamCard src={Team2} alt="second team member"/>
            <TeamCard src={Team3} alt="third team member"/>
            <TeamCard src={Team4} alt="fourth team member"/>
            <TeamCard src={Team5} alt="fifth team member"/>
            <TeamCard src={Team6} alt="sixth team member"/>
        </section>
    </>
  )
}

export default OurTeam