import React from 'react'
import { Link } from 'react-router-dom'
import { RiDribbbleFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'

function SocialIcons() {
  return (
    <div className='flex gap-6 pr-4'>
      <Link to={''} className='text-[#ff3838] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
      <Link to={''} className='text-[#fc338a] text-2xl hover:-translate-y-1 transition-all duration-500'><RiInstagramFill /></Link>
      <Link to={''} className='text-[rgb(53,134,255)] text-2xl hover:-translate-y-1 transition-all duration-500'><RiTwitterFill /></Link>
      <Link to={''} className='text-[#3b70f6] text-2xl hover:-translate-y-1 transition-all duration-500'><RiLinkedinFill /></Link>
      <Link to={''} className='text-[#f9ed69] text-2xl hover:-translate-y-1 transition-all duration-500'><RiDribbbleFill /></Link>
      <Link to={''} className='text-[#b1b1b1] text-2xl hover:-translate-y-1 transition-all duration-500'><RiGithubFill /></Link>
    </div>
  )
}

export default SocialIcons
