import React from 'react'
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({project}) => {
  return (
    <li className=''>
      <div className="p-6 ">
        <img src={project.image} alt={project.title} className=' w-250 rounded-lg' />

        <div className='mt-4 space-y-1'>
          <p className='font-semibold text-lg'>{project.title}</p>
          <p className='text-sm text-[#f6ede8]'>{project.tools}</p>
          <p className="text-sm text-[#f6ede8] ">{project.description}</p>
        </div>

        <svg width="0" height="0">
          <defs>
            <linearGradient id="roseGradient" gradientTransform="rotate(150)">
              <stop offset="0%" stopColor="#b56b73" />
              <stop offset="50%" stopColor="#d4a3a8" />
              <stop offset="100%" stopColor="#b56b73" />
            </linearGradient>
          </defs>
        </svg>

        <div className='flex justify-between mt-auto pt-4 items-center'>
            <a href={project.demo} target='_blank' rel='noopener noreferrer' className='border border-rose-800 bg-[linear-gradient(180deg,#d4a3a8,#b56b73,#d4a3a8)] rounded-xl px-4 py-2 text-sm'>Website</a>
            <a href={project.code} target='_blank' rel='noopener noreferrer' aria-label='Visit Github'  className='hover:ring-1 ring-white rounded-full scale-100 hover:scale-120 transition duration-300 ease-in-out'>
              <FaGithub size={28} style={{ fill: "url(#roseGradient)" }}/>
            </a>
        </div>
      </div>
    </li>
  )
}

export default ProjectCard