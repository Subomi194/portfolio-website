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
        //{name:"Python", icon:FaPython},
        {name:"Tailwind CSS", icon:RiTailwindCssFill},
        {name:"Git", icon: FaGitAlt},
        {name:"Github ", icon: FaGithub},
        {name:"VS Code", icon:VscVscode},
    ]
  return (
    <section id='skills' className='-scroll-mt-4 pt-16'>
        <div className='flex-1 text-center items-center lg:text-left max-w-6xl mx-auto px-6 py-24 space-y-24 '>
            <h1 className='lg:text-left text-center relative '>Skills & Tools

            <span className=" absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 h-1 w-12 bg-[#b56b73]"/>
            </h1>

            <ul className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 space-y-6'>
                {skills.map((skill) => (
                    <li
                    key={skill.name}
                    className="flex flex-col items-center gap-2 "
                  >
                    <svg width="0" height="0">
                    <defs>
                      <linearGradient id="roseGradient" gradientTransform="rotate(150)">
                        <stop offset="0%" stopColor="#b56b73" />
                        <stop offset="50%" stopColor="#d4a3a8" />
                        <stop offset="100%" stopColor="#b56b73" />
                      </linearGradient>
                    </defs>
                  </svg>
                    <skill.icon size={72} style={{ fill: "url(#roseGradient)" }} />
                   
                    <span className=" font-semibold">
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