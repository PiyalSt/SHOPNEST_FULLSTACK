import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div className='w-full flex items-center px-10'>
      <div className='w-2/4 py-10 space-y-6'>
        <h1 className='text-6xl text-slate-800 font-semibold'>Elevate Your Style
          This Season
        </h1>
        <p className='text-xl text-slate-600'>Discover the latest trends in fashion and lifestyle with SHOPNEST.</p>
        <div className='flex gap-4'>
          <a href='#shop' className='py-2 px-4 bg-blue-400 rounded-md font-semibold text-white cursor-pointer active:scale-95 transition-all duration-200'>Shop Now</a>
          <Link to={'/categories'} className='py-2 px-4 border-2 border-slate-400 rounded-md font-semibold text-slate-800 cursor-pointer active:scale-95 transition-all duration-200'>Explore Collection</Link>
        </div>
      </div>
      <div className='w-2/4 h-full py-10'>
        <img className='w-full h-full object-cover rounded-md shadow-2xl shadow-blue-400/50' src={assets.fashion} alt="" />
      </div>
    </div>
  )
}

export default Hero