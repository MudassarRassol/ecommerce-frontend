import React from 'react';
import { RiMenuFold4Line } from "react-icons/ri";

const MobileNavbar = ({ toggleMenu }) => {
  return (
    <div className='h-[7vh] w-[98%] m-auto mt-2 md:mt-0 bg-[#0E71CD] rounded-xl text-white gap-9 relative items-center   block md:hidden'>
      {/* Branding */}
      <div className=' flex items-center h-full p-5 ' >
        <div className='font-extrabold text-2xl'>MR SHOP</div>

        {/* Menu Toggle Icon */}
        <div className='icon absolute right-3' onClick={toggleMenu}>
          <RiMenuFold4Line className='text-2xl' />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
