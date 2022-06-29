import React from 'react'

type FiguresType = {
    figure:string,
    desc:string
}

const FiguresCard:React.FC<FiguresType> = ({figure,desc}) => {
  return (
    <div>
        <p>{figure}</p>
        <p>{desc}</p>
    </div>
  )
}

export default FiguresCard