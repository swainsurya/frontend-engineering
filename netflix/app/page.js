import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <div className='w-full h-[90vh] relative' style={{ backgroundImage: "url(/background.png)" }} >
        <Header />
      </div>
    </div>
  )
}

export default page
