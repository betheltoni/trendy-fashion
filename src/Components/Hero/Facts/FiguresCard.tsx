import React from 'react'

type FiguresType = {
    figure:string,
    desc:string,
    style: React.CSSProperties;
}

const FiguresCard:React.FC<FiguresType> = ({figure,desc,style}) => {
  return (
    <div className='FiguresCard' style={style}>
        <p className='Figure'>{figure}</p>
        <p className='Desc'> {desc}</p>
    </div>
  )
}

export default FiguresCard