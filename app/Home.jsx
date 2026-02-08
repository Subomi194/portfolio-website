"use client"

import  { useEffect, useState } from 'react'
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [aboutMoi, setAboutMoi] = useState(0);

  const socials = [
    //{id: 1, link: '', icon: FaInstagram},
    {id: 1, link: 'https://github.com/Subomi194', icon: FaGithub },
    //{id: 3, link: '', icon: <FaYoutube/> },
    {id: 2, link: 'https://www.linkedin.com/in/subomiariyo/', icon: FaLinkedin },
  ]

  const moi = [
    {name: "a bookworm", emoji: '📚'},
    {name: "a foodie", emoji: '🍕'},
    {name: "a kdrama fan", emoji: '📺'},
    {name: "an optimist", emoji: '🌞'},
    {name: "a chef(in my kitchen)", emoji: '👩‍🍳'},
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moi.length);
      setAboutMoi(moi[randomIndex]);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  


  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
  <div
    className="absolute
      lg:-inset-[40%] -inset-[20%]
      rounded-full
      animate-drift
      bg-[linear-gradient(180deg,#d4a3a8,#b56b73,#d4a3a8)]
      opacity-30
      blur-xl
      mix-blend-color-dodge
      mask-[radial-gradient(ellipse_at_center,black_50%,transparent_85%)]
    "
  />

  <div className="relative z-10 flex items-center justify-center min-h-screen flex-col gap-6 text-center">
    <h1 className="text-5xl ">
      Hi, I’m Subomi
    </h1>

    <div className='space-y-2'>
      <p className='text-2xl'>Web developer</p>

      <p className='text-xl'>and 
        <span className='ml-2 text-xl transition-opacity duration-500'>{aboutMoi.name}. {aboutMoi.emoji}</span>
      </p>
    </div>
    <ul className='flex justify-center lg:justify-start space-x-4'>
    <svg width="0" height="0">
          <defs>
            <linearGradient id="roseGradient" gradientTransform="rotate(100)">
              <stop offset="0%" stopColor="#b56b73" />
              <stop offset="50%" stopColor="#d4a3a8" />
              <stop offset="100%" stopColor="#b56b73" />
            </linearGradient>
          </defs>
        </svg>
      {socials.map((social) => (
        <li key={social.id}>
          <a href={social.link} target='_blank' rel='noopener noreferrer' aria-label={`Visit ${social.icon.displayName}`} className='scale-100 hover:scale-120 transition duration-300 ease-in-out items-center justify-center flex '>
            <social.icon size={30} style={{ fill: "url(#roseGradient)" }}/>
          </a>
        </li>
      ))}
    </ul>

    <div className='focus:bg-[#2b1a19] focus:text-black transition hover:translate-1 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed mt-2'>
      <a href="Subomi1_CV.pdf" className='rose-gradient rounded-lg text-center  py-4 px-6' target="_blank">View my CV</a>
  </div>
  </div>
</div>
  )
}

export default Home