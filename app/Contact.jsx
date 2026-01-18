"use client";

import React from 'react'
import { useState } from 'react'
import FloatingInput from '@/componenets/FloatingInput';
import FloatingTextarea from '@/componenets/FloatingTextarea';

const Contact = () => {
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("sending");

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.name.value,
      message: form.name.value
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
  
  return (
    <section id='contact' className='py-24'>
        <div className='flex-1 max-w-6xl mx-auto px-6 space-y-4'>
          <h1>Contact</h1>

            <form action="" onSubmit={handleSubmit}  className='flex flex-col gap-5'>

              <FloatingInput
                id="name" name="name" label="Name" required
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
                className='border-0 bg-rose-400 rounded-md w-fit py-4 px-4 hover:bg-rose-900 hover:text-white transition disabled:opacity-50'
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
    </section>
  )
}

export default Contact