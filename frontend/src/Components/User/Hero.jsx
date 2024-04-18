import React from 'react';
import headphone from '../../assets/headphone.png'

const Hero = () => {

  // const headphone = "HeadPhone"
  const handleFilter=()=>{

  }

  return (
    <div className="px-8 py-4">
      <div className="bg-slate-200 flex flex-col justify-start items-start h-44 relative md:h-56">
        <div className='absolute top-10 left-7 md:left-10'>
          <p className='text-lg md:text-5xl font-extrabold text-blue-900'>Grab upto 60% off on</p>
          <p className='text-lg md:text-5xl font-extrabold text-blue-900'>Selected Headphone</p>
        </div>
        <div className='absolute bottom-9 left-2 md:left-10'>
          <button className='bg-blue-900 rounded-full text-white text-sm font-bold py-1 px-2 md:py-2 md:px-4 hover:scale-105 translate-x-5 transition-all duration-300'>Buy Now</button>
        </div>
        <div>
          <img className="w-[130px] md:w-[270px] md:top-0 md:right-0 absolute top-7 right-0" src={headphone} alt=""/>
        </div>
      </div>
      <div className="flex mt-9 justify-between items-center">
        <ul className="hidden lg:contents">
          <div className='flex'>
            <li className="m-2 bg-slate-300 py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full">Headphone Type</li>
            <li className="m-2 bg-slate-300 py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full">Price</li>
            <li className="m-2 bg-slate-300 py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full">Review</li>
            <li className="m-2 bg-slate-300 py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full">Color</li>
            <li className="m-2 bg-slate-300 py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full">Material</li>
            <li className="m-2 bg-slate-300 py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full">offer</li>
            <li className="m-2 bg-slate-300 py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full">All Filters</li>
          </div>
        </ul>
        <div className='lg:hidden'>
          <p className="m-1 bg-slate-300 text-md py-1 px-2 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full" onClick={handleFilter}>All Filters</p>
        </div>
        <div>
          <p className="border-2 border-black text-md rounded-full py-1 px-2 hover:scale-105 transition-all duration-300 cursor-pointer">Sort by</p>
        </div>
      </div>
      <h1 className="text-2xl font-semibold my-2 text-center md:text-left ">Product's For You!</h1>
    </div>
  )
}

export default Hero