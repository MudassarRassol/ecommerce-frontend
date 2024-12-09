import React from 'react';
import { RiMenuFold4Line } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const MobileNavbar = ({ toggleMenu }) => {
  return (
    <div className='md:hidden h-[7vh] w-[98%] m-auto mt-2 md:mt-0 bg-[#0E71CD] flex rounded-xl text-white gap-9 relative items-center p-4 smleftside'>
      <div className='icon'>
       <div className=' font-extrabold text-2xl ' > MR SHOP </div>
      </div>
      <div className='icon absolute right-3' onClick={toggleMenu}>
        <RiMenuFold4Line className='text-2xl' />
      </div>
    </div>
  );
};

export default MobileNavbar;
