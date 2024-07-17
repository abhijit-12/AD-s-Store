import React from 'react'
import Banner from "../../assets/subscribe/subscribe.jpg";


const BannerImg = { 
    backgroundImage: `url(${Banner})`,
    backgroundPosition : 'center',
    backgroundRepeat : 'no-repear',
    backgroundSize : 'cover',
    height : '100%',
    width : '100%',
};

const Subscribe = () => {
  return (
    <div className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' data-aos='zoom-in' style={BannerImg}>
        
        <div className=' container backdrop-blur-sm py-10'>
         <div className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>
          <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold
          '> Get Notified At New product</h1>
          <input type="text" placeholder='Enter Your Email'className='w-full p-3' data-aos='fade' />
         </div>
        </div>
    </div>
  )
}

export default Subscribe