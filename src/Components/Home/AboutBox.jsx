import React from 'react'

const AboutBox = (props) => {
  return (
    <div className={`about-box ${props.className}`} >
        <div className="circle"></div>
        <h3>{props.caption}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default AboutBox