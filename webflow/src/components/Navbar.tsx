import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (

    <div className='flex max-lg:justify-between items-center h-24 max-w-[1240px] mx-auto px-5 text-white'>
      <img src="/public/img/devlogo.png" alt="Brand-logo" className='w-64 pt-7'/>
      <ul className='md:ml-80 sm:ml-0 hidden md:flex'>
        <li className='p-4 text-black'><a href="#">Home</a></li>
        <li className='p-4 text-black'><a href="#">About</a></li>
        <li className='p-4 text-black'><a href="#">Teams</a></li>
        <li className='p-4 text-black'><a href="#">Prices</a></li>
        <li className='p-4 text-black'><a href="#">Contact</a></li>
      </ul>
      <button className="hidden md:flex bg-[#84D55E] hover:bg-[#84D55E] text-white font-bold py-2 px-5 border">
        Get Consulting
      </button>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} className='text-black ms-[20%]'/> : <AiOutlineMenu size={20} className='text-black ms-[20%]'/>}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 h-full bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <img src="/public/img/brand.png" alt="Brand-logo" className='w-64 left-0'/>
          <li className='p-4 text-black'><a href="#">Home</a></li>
          <li className='p-4 text-black'><a href="#">About</a></li>
          <li className='p-4 text-black'><a href="#">Teams</a></li>
          <li className='p-4 text-black'><a href="#">Prices</a></li>
          <li className='p-4 text-black'><a href="#">Contact</a></li>
          <button className="bg-[#84D55E] hover:bg-[#84D55E] text-white font-bold py-2 px-4 border mx-3 mt-0">
            Button
          </button>
      </ul>
      
    </div>
  );
};

export default Navbar;