import React from 'react'
import PurpleRectangle from './PurpleRectangle'

const Home = () => {
  return (
    <div id='home' className='h-1/5 w-3/6 flex items-center justify-stretch mt-20  border-l-2 border-slate-800' style={{ marginLeft: '20%' }}>
        
        {/* <PurpleRectangle/> */}
        <div className='text-white pl-2'>
        <h1>Kushank Virdi</h1>
        <p className='text-lg pt-5'>Software Developer</p>
        </div>
        {/* <PurpleRectangle/> */}

    </div>
    
  )
}

export default Home
