import React from 'react'
import SocialIcons from '../../../Helpers/SocialIcons'


type TeamCardType ={
    src:string,
    alt:string
}

const TeamCard:React.FC<TeamCardType> = ({src,alt}) => {
  return (
    <div>
        <img src={src} alt={alt} />
        <h3>Kerry Lorem</h3>
        <h4>BUSINESS DEVELOPER</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.</p>
        <SocialIcons/>
    </div>
  )
}

export default TeamCard