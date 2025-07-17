import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <div className='w-full h-[920px] relative' style={{ backgroundImage: "url(/background.png)", backgroundRepeat:"repeat" }} >
        <Header />
      </div>
      <Hero/>
    </div>
  )
}

export default page
