import React from 'react'

import { faEnvelope, faFileText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const WorkElement = ({logo, name, link}) => {
  return (
    
    <a 
      href={link}
      target="_blank" 
      rel="noopener noreferrer" 
      className='h-1/4 w-[31%] mr-5 mb-3 border-2 border-slate-300 text-slate-300 border-b-8 border-b-emerald-400 cursor-pointer flex items-center justify-between hover:border-white hover:text-white hover:border-b-emerald-200'
      style={{ textDecoration: 'none' }} // This removes the default underline from the link
    >
      <p className='text-base px-3'>
        <FontAwesomeIcon icon={logo} />
      </p>
      <p className='text-base px-3'>{name}</p>
    </a>
  )
}

export default WorkElement
