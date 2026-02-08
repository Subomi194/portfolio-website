import React from 'react'
import ProjectCard from '@/componenets/ProjectCard'

const Projects = () => {

    const projects = [
        {
            image: "tracker_img.png",
            title: "Hair Routine Tracker",
            tools: "Next js, Tailwind & Supabase",
            description: "Full-stack web app built to help users log and review hair care routines, featuring authentication, routine history and product tracking.",
            demo: "https://tracker-2-0-bay.vercel.app/",
            code: "https://github.com/Subomi194/tracker-2.0"
        },
        {
            image: "portfolio.png",
            title: "Portfolio Website",
            tools: "Next js, Tailwind",
            description: "A personal portfolio highlighting my frontend projects, skills, and approach my to building user friendly web experiences.",
            demo: "https://portfolio-website-psi-ten-50.vercel.app/",
            code: "https://github.com/Subomi194/portfolio-website"
        },

        //{
        //    image: "https://placehold.co/700x500",
        //    title: "Stories Feature",
        //    tools: "React js & Tailwind CSS",
        //    description: "A responsive stories feature inspired by modern social media platforms, allows users to upload images from their device and view them as short-lived stories.",
        //    demo: "https://story-feature-phi.vercel.app/",
        //    code: "https://github.com/Subomi194/story-feature"
        //}

        

        
    ]
    
  return (
    <section id='projects' className=' -scroll-mt-4 pt-12'>
        <div className='flex-1 max-w-6xl mx-auto py-24  space-y-24'>
            <h1 className='lg:text-left text-center relative '>Projects
            <span className=" absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 h-1 w-12 bg-[#b56b73]"/>
            </h1>

            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12'>
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project}/>
                ))}

            </ul>
        </div>
    </section>

  )
}

export default Projects;