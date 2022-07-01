import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className=' pt-[200px] justify-center align-center bg-[#0a192f] w-full h-screen'>

        <div className='  justify-center mx-auto max-w-[1000px] px-8 h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl font-bold sm:text-7xl text-gray-200'>Sanjay</h1>
            <h2 className=' text-gray-400 text-4xl sm:text-7xl font-bold'>I'm a Full Stack Developer</h2>
            <p className='text-gray-400 max-w-[700px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus earum optio soluta quia consectetur dolores!</p>
            <div>
                <button className=' text-white flex border-2 px-6 py-2 items-center hover:bg-pink-600 hover:border-pink-900 my-4'>View Work <HiArrowNarrowRight className=' ml-3' /></button>
            </div>
        </div>

    </div>
  )
}

export default Home