import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import NavButton from './NavButton';
import './header.css';

function Header() {

  // Links (State)
  let Links = [
    { name: "HOME", link: "/"},
    { name: "SERVICES", link: "/"},
    { name: "GALLERY", link: "/"},
    { name: "CONTACT", link: "/"},
  ];

  // Nav Toggle (State)
  let [open, setOpen] = useState(false);

  return (
    <div>
      <div>

        {/* Navbar */}
        <nav className='shadow-md w-full fixed top-0 left-0'>
          <div className='md:flex items-center justify-between bg-blue py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
              {/* ICON GOES IN SPAN */}
              <span className='text-3xl text-indigo-600 mr-1 pt-2'></span>
              MedCare Health Cert
            </div>

            {/* Toggle Btn */}
            <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={ open ? 'close-circle' : 'menu' }></ion-icon>
            </div>
            
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${ open ? 'top-20' : 'top-[-490px]' }`}>
              {
                Links.map((link) => (
                  <li key={ link.name } className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={ link.link } className='text-gray-800 hover:text-gray-400 durration-500'>{ link.name }</a>
                  </li>
                ))
              }
              <NavButton>
                Register Here
              </NavButton>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
