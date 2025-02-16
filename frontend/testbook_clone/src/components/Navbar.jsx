import React from 'react'
import logo from '../assets/download.png'

const Navbar = () => {
  return (
    <>
      <div className='p-3 flex space-x-5 items-center justify-between border border-b-black'>
        <img src={logo} className='w-32' alt="Logo" />
        <ul className='flex space-x-10 '>
            <a href=""><li className='hover:font-semibold'>Exams</li></a>
            <a href=""><li className='hover:font-semibold'>SuperCoaching</li></a>
            <a href=""><li className='hover:font-semibold'>Test Series</li></a>
            <a href=""><li className='hover:font-semibold'>Skill Academy</li></a>
            <a href=""><li className='hover:font-semibold'>Pass</li></a>
            <a href=""><li className='hover:font-semibold'>More</li></a>
        </ul>
        <input type="text" placeholder='Search' className='border border-b-cyan-700 w-80 h-8 p-4 rounded-xl' name="" id="" />
        <ul>
          <a href=""><li className='hover:font-semibold'>Language</li></a>
        </ul>
        <button className='w-40 p-3 bg-green-500 rounded-xl'>Get Started</button>
      </div>
    </>
  )
}

export default Navbar
