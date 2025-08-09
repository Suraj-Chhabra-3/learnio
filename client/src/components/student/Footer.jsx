import React from 'react'
import { assets } from '../../assets/assets.js'

const Footer = () => {
  return (
    <footer className='bg-emerald-600 md:px-16 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>

        <div className='flex flex-col md:items-start items-center w-full'>
          <img className='w-28 sm:w-32 md:w-36 lg:w-40' src={assets.logo} alt="logo" />
          <p className='mt-6 items-center md:text-left text-sm text-white/80'>Learnio is your trusted platform for smart, flexible, and engaging learning. Access expert content anytime, anywhere, and grow at your own pace. Join thousands of learners achieving more every day with Learnio.</p>
        </div>

        <div className='flex flex-col items-center md:items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className='hidden md:flex flex-col items-start w-full'>
            <h2 className='font-semibold text-white mb-5'>Subscribe for more information</h2>
            <p className='text-sm text-white/80'>The latest information, articles and resources sent to your inbox weekly.</p>
            <div className='flex items-center gap-2 pt-4'>
              <input className='border border-gray-500/30 bg-white-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' type="email" placeholder='Enter your email'/>
              <button className='bg-blue-800 w-24 h-9 text-white rounded'>Subscribe</button>
            </div>
        </div>

      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 @ Learnio. All rights Reserved.</p>
    </footer>
  )
}

export default Footer
