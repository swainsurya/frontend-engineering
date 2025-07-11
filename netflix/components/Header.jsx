import React from 'react'

const Header = () => {
  return (
    <div className='max-w-7xl mx-auto h-screen py-7'>
      {/* Navbar */}
      <nav className='flex items-center justify-between'>
        <span className='text-4xl font-bold text-red-600'>NETFLIX</span>
        <div className='flex gap-7'>
          <select name="" id="" className='cursor-pointer  border-[0.5px] border-white px-3 py-1 rounded-sm font-bold'>
            <option value="" className='text-black'>English</option>
            <option value="" className='text-black'>Hindi</option>
          </select>
          <button className='cursor-pointer bg-orange-700 px-3 py-1 rounded-sm hover:bg-orange-800 font-bold'>Sign Out</button>
        </div>
      </nav>
      {/* header */}
      <div className='h-screen flex flex-col items-center justify-center gap-9'>
        <div className='flex flex-col items-center text-6xl font-bold'>
          <span>Unlimited movies, TV</span>
          <span>shows and more</span>
        </div>
        <span className='font-bold text-2xl'>Starts at ₹149. Cancel at any time.</span>
        <div className='text-3xl font-bold bg-orange-700 px-4 py-2 rounded-sm cursor-pointer hover:bg-orange-800'>
          Finish Signup {">"}
        </div>
      </div>
    </div>
  )
}

export default Header
