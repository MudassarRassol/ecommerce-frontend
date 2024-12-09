import React from 'react'
import { IoSearchCircle } from 'react-icons/io5';
const Homep1 = () => {

    const category = ['electronics', 'clothing', 'books', 'toys', 'home & garden'];


  return (
    <div className='flex flex-col-reverse md:flex-row items-center   m-2'>
    {/* MR SHOP - hidden on small screens */}
    <div className='hidden md:block w-[40%] text-white font-extrabold text-3xl bg-blue   shadow-md p-2 text-center bg-[#0E71CD] rounded-lg'>
      MR SHOP
    </div>

    {/* Marquee - full width on small screens */}
    <marquee
      behavior=""
      direction=""
      className='w-full md:w-[60%] mx-0 md:mx-3 rounded-full my-2 md:my-0'
    >
      {category.map((item, index) => (
        <button
          key={index}
          className='bg-white font-extrabold text-[#0E71CD] rounded-md px-4 p-1 mr-3 md:mr-10'
        >
          {item}
        </button>
      ))}
    </marquee>

    {/* Search bar - full width on small screens */}
    <div className=' w-[100%]  md:w-fit flex items-center bg-white p-2 rounded-2xl'>
      <input
        type="text"
        className='flex-grow outline-none px-2'
        placeholder="Search..."
      />
      <IoSearchCircle className='text-4xl text-[#0E71CD] ' />
    </div>
  </div>
  )
}

export default Homep1