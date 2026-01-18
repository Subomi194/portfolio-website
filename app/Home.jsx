import React from 'react'
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Home = () => {

  const socials = [
    {id: 1, link: '', icon: <FaInstagram/>},
    {id: 2, link: '', icon: <FaGithub/> },
    {id: 3, link: '', icon: <FaYoutube/> },
    {id: 4, link: '', icon: <FaLinkedin/> },
  ]



  return (
    <section id='home' className='pt-32 min-h-screen'>
      <div className=' max-w-6xl mx-auto py-25 px-6  '>
        <div className='flex flex-col lg:flex-row items-center gap-12'>

          {/* H1 Mobile*/}

          <h1 className='order-1 lg:hidden font-(--font-caveat) text-5xl text-center'>
            Hi, I'm Subomi
          </h1>

          {/*IMAGE*/}

          <div className='flex flex-1 order-2 justify-center'>
            <img src="/me.png" alt="Subomi" className='w-50 h-50 md:w-66 md:h-66 lg:w-72 lg:h-72 rounded-2xl object-cover shadow-xl' />
          </div>

          {/* Desktop */}

          <div className='order-3 lg:order-1 flex-1 text-center lg:text-left space-y-4'>

            <h1 className='hidden lg:block font-(--font-caveat) text-5xl'>
                Hi, I'm Subomi
            </h1>
        
            <div>
              <p className='home-text'>A frontend Developer </p>
              <p className='home-text'>I enjoy exploring new things and creatingchkvhvhjbknhhvbftdszdfghjnbvcdfgyhujnbvcfgyuhjknm bvfgyuhijklmnhgvftyuijklmnbvghyuihjkbvcfgftyuhjbgfrtyg</p>
            </div>

            <ul className='flex justify-center lg:justify-start space-x-4'>
              {socials.map((social) => (
                <li key={social.id}>
                  <a href="#" className='text-3xl shadow-md text-rose-800 hover:text-rose-400 transition-all duration-300'>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Home