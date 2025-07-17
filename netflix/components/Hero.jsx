import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div>
        <h1 className='text-2xl font-bold'>Trending Now</h1>
        <div className='h-[320px] flex items-center overflow-x-scroll gap-4'>
              <img src="./movie.png" alt="" />
              <img src="./movie.png" alt="" />
              <img src="./movie.png" alt="" />
              <img src="./movie.png" alt="" />
              <img src="./movie.png" alt="" />
              <img src="./movie.png" alt="" />
              <img src="./movie.png" alt="" />
              <img src="./movie.png" alt="" />
              <img src="./movie.png" alt="" />
              <img src="./movie.png" alt="" />
        </div>
      </div>
      <div>
        <h1 className='text-2xl font-bold'>More reasons to join</h1>
      </div>
    </div>
  )
}

export default Hero
