"use client";
import React from 'react'

const FloatingTextarea = ({
    id,
    name,
    type="text",
    rows=4,
    label,
    required=false
}) => {
  return (
    <div className='relative'> 
        <textarea 
            id={id} name={name} type={type} rows={rows} placeholder={label} required={required}
            className={`peer w-full 
                border-b-2 border-rose-800 text-gray-900 bg-white 
                px-3 pt-5 placeholder-transparent rounded-md
                focus:outline-none focus:border-2 focus:border-rose-400 leading-relaxed`}
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

export default FloatingTextarea