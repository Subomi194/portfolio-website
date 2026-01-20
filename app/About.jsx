import React from 'react'

const About = () => {
  return (
    <section id='about' className='bg-white scroll-mt-24'>
        <div className='flex-1 text-center items-center lg:text-left max-w-6xl mx-auto px-6 py-24 space-y-4'>
          <h1 className=''>About</h1>

          <div className='space-y-4'>
              
              <p className=''>I'm a web developer who enjoys building responsive websites that feel calm and intentional.</p>

              <p className=''>Currently, I'm learning NextJs and improving on my React knowledge.</p>

              <p className=''>When I'm not coding, you can find me reading books or experimenting in the kitchen.</p>
          </div>

          <a href="">View my CV</a>

        </div>
    </section>
  )
}

export default About