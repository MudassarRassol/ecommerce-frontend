import React from 'react';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";

const LeftSidebar = () => {
  return (
    <div className=' m-auto mt-2 md:mt-0 bg-[#0E71CD] md:w-16 md:h-[98vh] md:flex md:flex-col rounded-xl text-white gap-9 relative items-center p-4 lgleftside hidden'>
      <div className='flex items-center icon'>
        <SiHomeassistantcommunitystore className='text-3xl' />
        <div className='absolute bg-[#0E71CD] rounded-lg pagename'>Home</div>
      </div>
      <div className='flex items-center icon absolute bottom-3'>
        <IoLogOut className='text-3xl' />
        <div className='absolute bg-[#0E71CD] rounded-lg pagename'>Logout</div>
      </div>
    </div>
  );
};

export default LeftSidebar;
