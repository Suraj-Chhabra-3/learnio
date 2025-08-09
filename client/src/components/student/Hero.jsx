import React from 'react'
import SearchBar from './SearchBar.jsx'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Welcome to <span className='text-blue-800' >Learnio</span></h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Empowering your learning journey with expert-led courses, interactive tools, and personalized progress tracking.
Discover, learn, and achieve your goals — all in one place.</p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>Empowering your learning journey with expert-led courses, interactive tools, and personalized progress tracking.
Discover, learn, and achieve your goals — all in one place.</p>

    <SearchBar />
    </div>
  )
}

export default Hero