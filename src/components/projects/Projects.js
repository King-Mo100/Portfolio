import React from 'react'
import Title from '../layouts/Title'
import ProjectCards from './ProjectCards'
import {projectOne} from '../../assets/index'

const Projects = () => {
  return (
    <section id="projects"
    className="w-full py-20 border-b-[1px] border-b-black">
        
        <div className='flex justify-center items-center text-center mb-8'>
            <Title title= "Visit My Portfolio" 
            des="My Projects"/> 
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectCards 
            title="Weather App"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."
            src={projectOne}/>
            <ProjectCards
             title="Movie App"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."
            src={projectOne}/>
                        <ProjectCards
             title="Bookify"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."
            src={projectOne}/>
                        <ProjectCards
             title="Simple Calculator"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."
            src={projectOne}/>
                        <ProjectCards
             title="Password Generator"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."
            src={projectOne}/>
                        <ProjectCards
             title="Chat Bot"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."
            src={projectOne}/>            
        </div>
        
    </section>
  )
}

export default Projects