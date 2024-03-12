import React, { useState, useEffect } from 'react';
import './navbar.css'; // Import the corresponding CSS file
import mylogo from '../assets/brands_images/my logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ isOnWork }) => {
  const Links = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT', link: '/about' },
    { name: 'WORK', link: '/work' },
    { name: 'SERVICES', link: '/services' },
  ];

  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const backgroundStyle = {
    backgroundColor: 'hsl(218, 41%, 15%)',
    backgroundImage: 'radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%)',
  };
  



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      style={(scrolling ||isOnWork)? backgroundStyle : {}} // Apply backgroundStyle when scrolling is true
      className={`fixed inset-x-0 top-0 z-40 mx-auto w-full max-w-screen-md border border-[#ffffff33] ${
        scrolling ? 'py-1 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg' : 'py-1 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg'}`}
    >
      <div className='md:flex items-center justify-between bg-transparent md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
          <span className='text-4xl text-white '>
            <div className='flex items-center h-12 w-12'>
              <img src={mylogo} alt='my-logo' className='h-full' />
            </div>
          </span>
          <span className='hidden md:inline-block text-white font-extrabold font-[Poppins]'>
            Gulam Gause
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-white hover:text-gray-400 duration-500'>
                {link.name}
              </Link>
            </li>
          ))}
      
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
