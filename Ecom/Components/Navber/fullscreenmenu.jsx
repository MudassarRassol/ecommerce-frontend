import React from 'react';
import { MdOutlineMenuOpen } from "react-icons/md";

const FullscreenMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`w-screen transition-all duration-300 ease-linear z-30 ${
        isMenuOpen ? 'visible h-[100vh]' : 'h-[0vh] w-0'
      } backdrop-blur-xl fixed top-0 menu`}
    >
      {isMenuOpen && (
        <div className='w-[90%] m-auto flex items-center justify-between mt-5 font-extrabold text-3xl border-b-2 border-spacing-1 p-1'>
          <h2 className='text-white'>SHOP</h2>
          <button onClick={toggleMenu} className='text-white text-center'>
            <MdOutlineMenuOpen className='text-3xl font-extrabold' />
          </button>
        </div>
      )}
    </div>
  );
};

export default FullscreenMenu;
