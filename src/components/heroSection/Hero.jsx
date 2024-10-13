

import React from 'react'

function Hero() {
  return (
    <div className='relative mt-[80px]'>
        <div>
            <img src='./Ecommerce.png' alt='eco-web'
            className='w-full object-cover object-center'
            />
        </div>
        <div className='absolute top-[30%] left-[50%]'>
            <h1 className='text-5xl font bold text-[red]'>Discover Your Next Adventure</h1>
            <p className='text-center text-2xl mt-5 font-semibold'>
                Shop Our latest Arraival & Unleash Your style
            </p>
        </div>
    </div>
  )
}

export default Hero