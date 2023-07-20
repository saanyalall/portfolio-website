import React from 'react'

function Contact() {
  return (
    <div name="contact" className= 'w-full bg-gradient-to-b from-gray-800 to-black  text-white'>
        <div className='flex flex-col h-full mx-auto p-4 justify-center max-w-screen-lg'>
            <div className='mt-20 pt-18'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Get In Touch!</p>
                <p className='py-6'>submit the form</p>
            </div>

            <div className=' flex justify-center items-center'>
                <form action='https://getform.io/f/cccb466d-92fc-44f7-8663-ed0a5af2c8f8' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name' className='bg-transparent border-2 rounded-md text-white focus:outline-none p-2'/>

                    <input type='email' name='email' placeholder='Enter your email-id' className='bg-transparent border-2 rounded-md text-white focus:outline-none my-4 p-2'/>
                    <textarea  rows="10" name='message' placeholder='Enter your message' className='bg-transparent border-2 rounded-md text-white focus:outline-none p-2'/>

                    <button className='flex mx-auto px-6 py-3 my-8 bg-gradient-to-b from-cyan-500 to-blue-500 items-center rounded-md duration-500 hover:scale-105'>Let's talk</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact