import React from 'react'
import ProjectElement from './ProjectElement'

const Projects = () => {
  return (
    <div id='projects' className='h-3/5 w-4/6 mt-20 flex flex-col ' style={{ marginLeft: '20%' }}>
        <h1 className='text-xl text-indigo-400'>
            Projects
        </h1>

        <h1 className='text-3xl text-white mb-5'>
            Stuff I've Worked On 
        </h1>
        <div className='h-full w-full flex flex-wrap '>
        <ProjectElement name="UniBuddy" gradientFrom='#c21500' gradientTo='#ffc500' tech1='React' tech2='Node' tech3='Mongo' tech4 ='Javascript' />
        <ProjectElement name = "IOS App" gradientFrom='#0ABFBC' gradientTo='#FC354C' tech1='Swift' tech2='SwiftUI' tech3='XCode' github="https://github.com/Kushankk/IOS-Ancient-Currency-Converter"/>
        <ProjectElement name = "T-Radar" gradientFrom='#10B981' gradientTo='#8B5CF6' tech1='Javascript' tech2='GraphQL' tech3='HTML' tech4='CSS' github="https://github.com/Kushankk/T-Radar-Api-based-Web-App-"/>
        <ProjectElement name="IOS ChatApp" gradientFrom='#a8ff78' gradientTo='#78ffd6'tech1='Swift' tech2='Firebase' tech3='SwiftUI' github="https://github.com/Kushankk/ChatAppIOS"/>
        <ProjectElement name="Churn Predictor" gradientFrom='#DD5E89' gradientTo='#F7BB97' tech1='Python' tech2='Pandas' tech3='Numpy' tech4='Seaborn' github="https://github.com/Kushankk/Churn-Predictor-Machine-Learning"/>
        <ProjectElement name="Dino IOS App" tech1='Swift' tech2='API' tech3='SwiftUI' tech4='AppleMapKit' github="https://github.com/Kushankk/JurassicParkDinosaue"/>
        </div>
        
      
    </div>
  )
}

export default Projects
