import Logo from "../assets/logo.svg";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=' lg:bg-white    z-50 py-3 w-full top-0 sticky'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center space-x-4 text-black'>
            <a to='/' className=''>
              <img src={Logo} alt='' />
            </a>
            <div className='lg:flex items-center space-x-4 hidden'>
              <a href='' className='text-slate-400 hover:text-black'>
                Features
              </a>
              <a href='' className='text-slate-400 hover:text-black'>
                Pricing
              </a>
              <a href='' className='text-slate-400 hover:text-black'>
                Resources
              </a>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <button className='text-slate-400 hover:text-black'>Login</button>
              <button className='bg-[#2ACFCF] hover:bg-[#62ebeb] text-white px-4 py-2 rounded-3xl'>
                Sign Up
              </button>

              {/* Add more menu items here */}
            </div>
          </div>
          <div className='-mr-2 flex md:hidden px-2'>
            <button
              onClick={toggleMenu}
              type='button'
              className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mb-10 bg-[#3B3054] py-20 mx-4  rounded-lg sticky`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-4 sm:px-6 text-center flex flex-col items-center justify-center'>
          <a href='' className='text-slate-400 hover:text-black'>
            Features
          </a>
          <a href='' className='text-slate-400 hover:text-black'>
            Pricing
          </a>
          <a href='' className='text-slate-400 hover:text-black'>
            Resources
          </a>
          <div className='h-[0.5px] bg-white w-[90%]' />
          <button className='text-slate-400'>Login</button>
          <button className='bg-[#2ACFCF] hover:bg-[#62ebeb] text-white px-4 py-2 rounded-3xl w-full'>
            Sign Up
          </button>
          {/* Add more menu items here */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
