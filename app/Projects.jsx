import React from 'react'
import ProjectCard from '@/componenets/ProjectCard'

const Projects = () => {

    const projects = [
        {
            image: "https://placehold.co/700x500",
            title: "Stories Feature",
            tools: "React js & Tailwind CSS",
            description: "A responsive stories feature inspired by modern social media platforms, allows users to upload images from their device and view them as short-lived stories.",
            demo: "https://story-feature-phi.vercel.app/",
            code: "https://github.com/Subomi194/story-feature"
        },

        {
            image: "https://placehold.co/700x500",
            title: "Portfolio Website",
            tools: "Next js, Tailwind",
            description: "A personal portfolio highlighting my frontend projects, skills, and approach my to building user friendly web experiences.",
            demo: "https://portfolio-website-psi-ten-50.vercel.app/",
            code: "https://github.com/Subomi194/portfolio-website"
        },

        {
            image: "https://placehold.co/700x500",
            title: "Hair Routine Tracker",
            tools: "Next js, Tailwind & Firebase",
            description: "Coming Soon",
            demo: "",
            code: ""
        }
    ]
    
  return (
    <section id='projects' className='bg-white scroll-mt-24'>
        <div className='flex-1 max-w-6xl mx-auto py-24 px-6 space-y-4'>
            <h1>Projects</h1>

            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project}/>
                ))}

            </ul>
        </div>
    </section>

  )
}

export default Projects;