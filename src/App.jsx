import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import PurpleRectangle from './components/PurpleRectangle'
import About from './components/About'
import Projects from './components/Projects'
import More from './components/More'

export default function App() {
  return (
    <div className='text-5xl bg-black h-screen pt-3 flex flex-col' style={{ height: '250vh' }}>
      <Navbar/>
      <Home/>
      {/* <PurpleRectangle/> */}
      <About/>
      <Projects/>
      <More/>
      
    </div>
  )
}
