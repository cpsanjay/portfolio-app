import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='h-screen w-full bg-[#0a192f] justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full mx-auto '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, reiciendis?</p>
            </div>
            <input className=' p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Name' name='name' />
            <textarea name="message" rows="10" placeholder='Message' className='bg-[#ccd6f6] p-2'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-900 my-8 mx-auto px-4 py-3 flex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact