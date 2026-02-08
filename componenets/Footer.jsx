import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full'>
        <div className='flex py-8 px-6 items-center justify-center'>
            <p className='text-xs md:text-sm'>&copy; {new Date().getFullYear()} Olasubomi Ariyo. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer