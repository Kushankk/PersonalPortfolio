import React from 'react'
import WorkElement from './WorkElement'

import { faEnvelope, faFileText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



const More = () => {
  return (
    <div id='contact' className='h-1/5 w-4/6 mt-20 flex flex-col' style={{ marginLeft: '20%' }}>
        <h1 className='text-xl text-indigo-400'>
            Additional Links
        </h1>

        <h1 className='text-3xl text-white mb-5'>
            More of my Work 
        </h1>
        <div className='flex flex-wrap h-full'>
        
        <WorkElement name='Github' logo={faGithub} link="https://github.com/Kushankk"/>
        <WorkElement name='Resume' logo={faFileText} link="/KushankResumePortfolio.pdf"/>
        <WorkElement name='KushankVirdi@outlook.com' logo={faEnvelope} link="mailto:KushankVirdi@outlook.com"/>

        </div>
        
    </div>
  )
}

export default More
