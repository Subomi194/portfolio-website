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
            className={`peer h-14 md:w-150 w-full
                border-b-2 border-[#5a1f24] text-[#5a1f24] bg-[#f6ede8] 
                px-3 pt-4 placeholder-transparent 
                focus:outline-none focus:border-2 focus:border-[#b56b73] shadow-[inset_0_-1px_0_0_#7a2e35] focus:shadow-[inset_0_-2px_0_0_#b56b73]
                leading-relaxed rounded-md`}
        />

        <label 
            htmlFor={id} 
            className={`
                absolute left-3 top-2  px-1 text-[#5a1f24] text-xs transition-all
                peer-placeholder-shown:text-base  peer-placeholder-shown:text-[#b56b73] peer-placeholder-shown:top-5
                peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#5a1f24]
                pointer-events-none`}
        >
            {label}
        </label>
    </div>
  )
}

export default FloatingInput