import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='h-[95px] bg-[#fff7d8] font-semibold flex justify-between items-center fixed top-0 w-full z-10'>
      <div className='flex gap-4 ml-4 md:ml-9 items-center'>
        <Link to='/'>
          <h1 className='text-3xl md:text-5xl font-normal'>BREW</h1>
        </Link>
        <nav className='hidden md:flex gap-4'>
          <Link to='/ShopAll'>Shop</Link>
          <Link to='/About'>About</Link>
          <Link to='/ContactInfo'>Location & Hours</Link>
        </nav>
      </div>
      <div className='flex items-center gap-4 md:gap-9 mr-4 md:mr-9 mt-4'>
        <Link to='/Login'>Log in</Link>
        <Link to='/Cart'>Cart</Link>
        <Link to='/ShopAll'>
          <button className='w-[140px] h-[40px] bg-[#222] text-white'>Order Online</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
