import React from 'react'
import Image from 'next/image'
import sofa from '../../public/banners/sofa.png'
import '@fontsource/poppins';
const Hero = () => {
  return (
    <div className='w-full h-[835px] bg-[#FBEBB5] flex flex-col justify-center'>
      <div className='flex flex-col md:flex-row justify-center items-center pt-0 md:pt-[50px] mx-5 md:mx-auto'>
        <div className='w-full md:w-[440px] h-auto text-center md:text-left md:pl-8'>
          <h1 className='poppins font-medium text-[24px] md:text-[50px] md:pl-5 tracking-tight'>
            Rocket Single Seater
          </h1>
          <p className='poppins mt-4 text-lg md:text-xl pl-5'>Shop Now</p>
          <p className='mt-0 text-lg font-extrabold md:text-xl pl-5'>___________</p>
        </div>
        <div className='mt-8 md:mt-0'>
          <Image src={sofa} alt='sofa' width={653}  className='max-w-full h-auto' />
        </div>
      </div>
    </div>
  )
}

export default Hero
