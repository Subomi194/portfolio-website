import React from 'react'

const About = () => {
  return (
    <section id='about' className=' relative z-20 -scroll-mt-4 -mt-8 pt-24 before:absolute before:top-0 before:left-0 before:right-0
  before:h-8 before:bg-linear-to-b before:from-transparent before:to-[#241415]'>
        <div className='flex-1 text-center items-center max-w-6xl mx-auto px-6 lg:px-20 py-24 space-y-24'>
          <h1 className='font-[allura] lg:text-8xl text-5xl lg:text-left'>About me</h1>

          <div className='flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 '>

            <div className=''>
              <img src="/me2.png" alt="Subomi" className='w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl object-cover shadow-xl' />
            </div>

            <div className='flex-1 text-center lg:text-left space-y-4'>
              <p className=''>I’m a junior software developer with a frontend focus, building projects using React, TypeScript, and CSS. I enjoy creating interfaces that feel simple, intentional, and easy to use.</p>

              <p className=''>I approach development with curiosity and structure, breaking problems down, asking questions, and learning through feedback and iteration. I’m comfortable working independently on tasks, while also collaborating with others to refine ideas and improve solutions.</p>

              <p className=''>Outside of coding, I enjoy reading fiction and experimenting in the kitchen, both of which have taught me patience, creativity, and attention to detail.
                              I’m currently looking for junior software developer roles where I can contribute to a team, keep learning, and grow.</p>
            </div>
          </div>
          
        </div>
    </section>
  )
}

export default About