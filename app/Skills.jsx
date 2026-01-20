import React from 'react'
import { FaReact, FaPython, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";





const Skills = () => {

    const skills = [
        {name:"HTML", icon: FaHtml5},
        {name:"CSS", icon:FaCss3Alt},
        {name:"Javascript", icon:IoLogoJavascript},
        {name:"React", icon:FaReact},
        {name:"Next.js", icon:RiNextjsLine},
        {name:"Python", icon:FaPython},
        {name:"Tailwind CSS", icon:RiTailwindCssFill},
        {name:"Git", icon: FaGitAlt},
        {name:"Github ", icon: FaGithub},
        {name:"VS Code", icon:VscVscode},
    ]
  return (
    <section id='skills' className='scroll-mt-24'>
        <div className='flex-1 text-center items-center lg:text-left max-w-6xl mx-auto px-6 py-24 space-y-8 '>
            <h1>My Skills and Tools</h1>

            <ul className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 space-y-6'>
                {skills.map((skill) => (
                    <li
                    key={skill.name}
                    className="flex flex-col items-center gap-2 "
                  >
                    <skill.icon className="text-rose-400 text-7xl" />
                    <span className=" font-semibold text-gray-500">
                      {skill.name}
                    </span>
                  </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Skills