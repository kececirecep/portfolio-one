import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form'>
        <form className='flex flex-col items-center justify-center'>
            <div className=''>
            <input type="text" placeholder='Name' className='mx-6 my-6 border-transparent bg-transparent border-2 border-b-gray-500 shadow-none outline-none p-3' />
            <input type="text" placeholder='Last Name' className='mx-6 my-6 border-transparent bg-transparent border-2 border-b-gray-500 shadow-none outline-none p-3' />
            </div>
             <div className=''>
            <input type="text" placeholder='E-Mail' className='mx-6 my-6 border-transparent bg-transparent border-2 border-b-gray-500 shadow-none outline-none p-3' />
            <input type="text" placeholder='Phone number' className='mx-6 my-6 border-transparent bg-transparent border-2 border-b-gray-500 shadow-none outline-none p-3' />
            </div>
            <div className='w-full flex justify-center items-center'>
                <textarea className='resize-none border-transparent bg-transparent border-2 border-b-gray-500 shadow-none outline-none p-3' placeholder='Message'></textarea>
            </div>
            <button className='bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 border border-solid border-transparent border-1 my-6'>Submit now</button>
        </form>
    </div>
  )
}

export default ContactForm