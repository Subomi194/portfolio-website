import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full'>
        <div className='flex bg-white backdrop-blur-md py-5 px-6 items-center justify-center'>
            <p className='text-xs lg:text-lg'>&copy; Copyright {new Date().getFullYear()} Subomi Ariyo. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer