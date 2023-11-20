import React from 'react'

const Skills = (props) => {
  return (
    <div className='skills-section'>
        <h1>{props.skillsCount}</h1>
        <p className={props.color}>{props.skillsName}</p>
    </div>
  )
}

export default Skills