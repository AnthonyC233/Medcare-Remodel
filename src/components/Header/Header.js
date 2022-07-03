import React, { useState } from 'react';
import './header.css';

// Images
import navImg1 from '../../assets/home-outline.svg';
import navImg2 from '../../assets/create-outline.svg';
import navImg3 from '../../assets/images-outline.svg';
import navImg4 from '../../assets/call-outline.svg';
import navImg5 from '../../assets/clipboard-outline.svg';
import navImg6 from '../../assets/receipt-outline.svg';

function Header() {
  // Menu Slider
  const [open, setOpen] = useState(false);

  // Menu Links
  const Menu = [
    { title: "Homepage", src: navImg1 },
    { title: "Services", src: navImg2 },
    { title: "Gallery", src: navImg3 },
    { title: "Contact", src: navImg4 },
    { title: "Register", src: navImg5, gap: true },
    { title: "Credit", src: navImg6, gap: true },
  ]

  return (
    <header>
      {/* Navbar */}
      <nav className='flex'>
        <div className={`${ open ? 'w-72' : 'w-20' } duration-300 h-screen p-5 pt-8 bg-indigo-800 fixed`}>
          <img 
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-black bg-white ${!open && 'rotate-180 duration-300'}`} 
          src={ process.env.PUBLIC_URL + '/left-arrow.png' }  alt="navbar arrow"
          onClick={ () => setOpen(!open) }>  
          </img>
          <div className='flex gap-x-4 items-center'>
            <img 
            className={`nav-logo cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            src={process.env.PUBLIC_URL + '/logo192.png'} alt="nav logo">
            </img>
            <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'} `}>MedCare</h1>
          </div>
          <ul className='pt-6'>
            { Menu.map((menu, index) => (
              <li key={index} 
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md ${ menu.gap ? "mt-9" : "mt-2" } ${index === 0 && 'bg-gray-300'}`}>
                <img className='nav-icons' src={`${menu.src}`} alt="nav images"></img>
                <span className={`${!open && 'hidden'} origin-left duration-200`}>{ menu.title }</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
          <h1>Home Page</h1>
        </div>
      </nav>
    </header>
  )

}

export default Header;

// LOGO
// src={process.env.PUBLIC_URL + '/logo192.png'} alt="nav logo"







// import { useLocation } from 'react-router-dom';
// import NavButton from './NavButton';
// import './header.css';

// function Header() {

//   // Links (State)
//   let Links = [
//     { name: "HOME", link: "/"},
//     { name: "SERVICES", link: "/"},
//     { name: "GALLERY", link: "/"},
//     { name: "CONTACT", link: "/"},
//   ];

//   // Nav Toggle (State)
//   let [open, setOpen] = useState(false);

//   return (
//     <div>
//       <div>

//         {/* Navbar */}
//         <nav className='shadow-md w-full fixed top-0 left-0'>
//           <div className='md:flex items-center justify-between bg-blue py-4 md:px-10 px-7'>
//             <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
//               {/* ICON GOES IN SPAN */}
//               <span className='text-3xl text-indigo-600 mr-1 pt-2'></span>
//               MedCare Health Cert
//             </div>

//             {/* Toggle Btn */}
//             <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//             <ion-icon name={ open ? 'close-circle' : 'menu' }></ion-icon>
//             </div>
            
//             <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${ open ? 'top-20' : 'top-[-490px]' }`}>
//               {
//                 Links.map((link) => (
//                   <li key={ link.name } className='md:ml-8 text-xl md:my-0 my-7'>
//                     <a href={ link.link } className='text-gray-800 hover:text-gray-400 durration-500'>{ link.name }</a>
//                   </li>
//                 ))
//               }
//               <NavButton>
//                 Register Here
//               </NavButton>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Header;
