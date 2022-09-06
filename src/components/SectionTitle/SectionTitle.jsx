import React from 'react'
import "./SectionTitle.css"

const SectionTitle = (props) => {
  return (
    <div className="Title__wrapper">
        <div className='Title__line'></div>
        <p className={`Title__para ${props.className}`}>{props.para}</p>
        <h2>{props.heading}</h2>
    </div>
  )
}

export default SectionTitle