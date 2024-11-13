import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';

const ProjectElement = ({ name, gradientFrom = '#FFC400', gradientTo = '#52C41A', tech1, tech2, tech3, tech4, github }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const normalGradientStyle = {
    backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
    transition: 'background-color 0.3s, color 0.2s, opacity 0.3s'
  };

  const hoverGradientStyle = {
    backgroundImage: `linear-gradient(to bottom right, black, black)`,
    transition: 'background-color 0.3s, color 0.2s, opacity 0.3s'
  };

  const gradientStyle = isHovered ? hoverGradientStyle : normalGradientStyle;
  return (
    <div
      style={gradientStyle}
      className="project-element h-[40%] w-[31%] mr-5 mb-3 hover:text-white hover:border-2 transition-all "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='h-1/4 flex items-center justify-end'>
        <a href={github} target='_blank'>
          <h1 className='text-2xl m-2 hover:cursor-pointer'><FontAwesomeIcon icon={faGithub} /></h1>
        </a>
        <h1 className='text-lg m-2 hover:cursor-pointer'><FontAwesomeIcon icon={faExternalLink}/></h1>
      </div> 
      <div className=' h-1/3 my-[10%] flex justify-center items-center'>
        <h1 className='text-4xl'>{name}</h1>
      </div>
      <div className=' h-1/4 flex items-center justify-center pb-5'>
        <h1 className='text-base m-2 '>{tech1}</h1>
        <h1 className='text-base m-2 '>{tech2}</h1>
        <h1 className='text-base m-2'>{tech3}</h1>
        <h1 className='text-base m-2'>{tech4}</h1>
      </div>
    </div>
  )
}

export default ProjectElement
