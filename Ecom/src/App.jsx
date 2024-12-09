import React, { useState } from 'react';
import Navber from '../Components/Navber/Navber';
import Homep1 from '../Components/Home/Homep1';
import Register from '../Components/Auth/Register';
const App = () => {

  return (
    <div className='w-full h-[100vh] flex flex-col md:flex-row md:items-center md:p-3'>
      <Navber />
      <div className='w-[98%] h-[90vh] m-auto md:mt-0 md:w-screen md:h-[98vh] bg-[#0e71cd42] md:ml-2 rounded-lg rightside'>
        {/* <Homep1/> */}
        <Register/>
      </div>

    </div>
  );
};

export default App;
