import React, { useState } from 'react';
import LeftSidebar from './Leftside';
import MobileNavbar from './Mobilenavber';
import FullscreenMenu from './fullscreenmenu';
const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            {/* Left Sidebar */}
            <LeftSidebar />

            {/* Fullscreen Menu */}
            <FullscreenMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}   />

            {/* Mobile Navbar */}
            <MobileNavbar toggleMenu={toggleMenu} />

            {/* Main Content Area */}
        </>
    )
}

export default Navber