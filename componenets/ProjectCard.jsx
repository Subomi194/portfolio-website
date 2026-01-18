import React from 'react'
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({project}) => {
  return (
    <li className='border-2 border-rose-400 rounded-md p-4 flex flex-col transition hover:shadow-lg hover:-translate-y-1'>
        <img src={project.image} alt={project.title} className='rounded-md' />

        <div className='mt-4 space-y-1'>
          <p className='font-semibold text-gray-900 text-base'>{project.title}</p>
          <p className='text-sm text-gray-600'>{project.tools}</p>
          <p className="text-sm text-gray-700">{project.description}</p>
        </div>

        <div className='flex justify-between mt-auto pt-4 items-center'>
            <a href={project.demo} target='_blank' rel='noopener noreferrer' className='border border-rose-800 rounded-xl px-4 py-2 text-sm'>Demo</a>
            <a href={project.code} target='_blank' rel='noopener noreferrer' aria-label='Visit Github'  className='text-2xl text-gray-800'>
              <FaGithub/>
            </a>
        </div>
    </li>
  )
}

export default ProjectCard