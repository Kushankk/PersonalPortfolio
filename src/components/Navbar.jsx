import React from 'react'
import { Link, Button, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    
    <div className='mx-24 flex justify-center sticky top-0 z-50'>
    <nav className="flex justify-center  items-center h-9 bg-gray-400 bg-opacity-20 rounded-full text-lg px-2 ">
        
        <div onClick={() => scroll.scrollToTop()} className="mx-4 text-white hover:text-gray-300 cursor-pointer">Home</div>
        <Link to="about" smooth={true} duration={500} className="mx-4 text-white hover:text-gray-300 cursor-pointer">About</Link>
        <Link to="projects" smooth={true} duration={500} className="mx-4 text-white hover:text-gray-300 cursor-pointer">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="mx-4 text-white hover:text-gray-300 cursor-pointer">Contact</Link>
      
    
    </nav>
    </div>
   
    
  )
}

export default Navbar
