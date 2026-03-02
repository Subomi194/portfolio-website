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
              <p className=''>I’m a frontend developer with experience building user-friendly web applications using React and JavaScript. I enjoy turning ideas and designs into clean, functional interfaces and improving features until they feel simple and easy to use.</p>

              <p className=''>
                I like taking ideas or designs and turning them into working features by refining layouts, fixing edge cases, and improving small details that make the overall experience smoother. Working on production code has helped me become more structured in how I approach problems and more thoughtful about maintainability.
              </p>

              <p className=''>Outside of coding, I enjoy reading fiction and experimenting in the kitchen both of which have taught me patience, creativity, and the importance of getting the small things right.</p>

              <p>I’m currently looking for frontend developer roles where I can contribute, keep learning, and grow within a supportive team.</p>
            </div>
          </div>
          
        </div>
    </section>
  )
}

export default About