"use client";

import React from 'react'
import { useState, useEffect } from 'react'
import FloatingInput from '@/componenets/FloatingInput';
import FloatingTextarea from '@/componenets/FloatingTextarea';

const Contact = () => {
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("sending");

    const form = e.target;

    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      message: form.message.value
    };

    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(data),
    });

    

    if (response.ok) {
      setMessage("success");
      form.reset()

    } else {
      setMessage("error");
    }
  }

  useEffect(() => {
      if (message === "success" || message === "error") {
        const timer = setTimeout(() => {
          setMessage("");
        }, 3000);

        return () => clearTimeout(timer);

      }
    }, [message])

  return (
    <section id='contact' className=' -scroll-mt-2 pt-24 relative min-h-screen'>
      <div aria-hidden className='absolute inset-0 rose-gradient opacity-30 mix-blend-color-dodge pointer-events-none'/>
        <div className='relative z-10'>
          <div className='flex-1 text-center items-center max-w-6xl mx-auto py-24 px-6 space-y-24'>
            <h1 className='font-[allura] lg:text-8xl text-5xl'>Get in touch</h1>

              <form action="" onSubmit={handleSubmit}  className=' flex flex-col gap-5 md:items-center md:justify-center'>

                <FloatingInput
                  id="fullname" name="fullname" label="Name" required
                />

                <FloatingInput
                  id="email" name="email" label="Email" required
                />

                <FloatingTextarea
                  id="message" name="message" label="Message" required
                />

                <button 
                  type='submit' 
                  disabled={message === "sending"}
                  className='border-0 rose-gradient rounded-md md:w-150 w-full py-4 px-4 focus:bg-[#2b1a19] focus:text-white transition disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed'
                >
                  {message ==="sending" ? "Sending..." : "Send Message"}
                </button>

                {message === "success" && (
                  <p className='text-green-600'>Message sent!</p>
                )}

                {message === "error" && (
                  <p className='text-red-600'>Something went wrong.</p>
                )}

              </form>
            </div>
          </div>
    </section>
  )
}

export default Contact