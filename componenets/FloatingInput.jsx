"use client";

import React from 'react'

const FloatingInput = ({
    id,
    name,
    type="text",
    label,
    required=false
}) => {
  return (
    <div className='relative'> 
        <input 
            id={id} name={name} type={type} placeholder={label} required={required}
            className={`peer h-14 w-full 
                border-b-2 border-rose-800 text-gray-900 bg-white 
                px-3 pt-4 placeholder-transparent 
                focus:outline-none focus:border-2 focus:border-rose-400 leading-relaxed rounded-md`}
        />

        <label 
            htmlFor={id} 
            className={`
                absolute left-3 top-2  px-1 text-rose-400 text-xs transition-all
                peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5
                peer-focus:top-2 peer-focus:text-xs peer-focus:text-rose-400 
                pointer-events-none`}
        >
            {label}
        </label>
    </div>
  )
}

export default FloatingInput