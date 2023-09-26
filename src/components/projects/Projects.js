import React from 'react'
import Title from '../layouts/Title'
import ProjectCards from './ProjectCards'

const Projects = () => {
  return (
    <section id="projects"
    className="w-full py-20 border-b-[1px] border-b-black">
        
        <div className='flex justify-center items-center text-center'>
            <Title 
            title= "Visit My Portfolio" 
            des="My Projects"/>
        </div>
        <div>
            <ProjectCards/>
        </div>
        
    </section>
  )
}

export default Projects