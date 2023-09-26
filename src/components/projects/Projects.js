import React from 'react'
import Title from '../layouts/Title'
import ProjectCards from './ProjectCards'

const Projects = () => {
  return (
    <section id="projects"
    className="w-full py-20 border-b-[1px] border-b-black">
        
        <div className='flex justify-center items-center text-center mb-8'>
            <Title 
            title= "Visit My Portfolio" 
            des="My Projects"/>
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectCards
            Title title="Weather App"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."/>
            <ProjectCards
            Title title="Movie App"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."/>
                        <ProjectCards
            Title title="Bookify"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."/>
                        <ProjectCards
            Title title="Simple Calculator"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."/>
                        <ProjectCards
            Title title="Password Generator"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."/>
                        <ProjectCards
            Title title="Chat Bot"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam."/>            
        </div>
        
    </section>
  )
}

export default Projects