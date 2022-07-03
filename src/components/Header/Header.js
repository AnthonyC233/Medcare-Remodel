import React, { useState } from 'react';
import './header.css';

// Images
// Page Icons
import navImg1 from '../../assets/home-outline.svg';
import navImg2 from '../../assets/create-outline.svg';
import navImg3 from '../../assets/images-outline.svg';
import navImg4 from '../../assets/mail-outline.svg';
import navImg5 from '../../assets/clipboard-outline.svg';
import navImg6 from '../../assets/receipt-outline.svg';

// Social Media Icons
import navImg7 from '../../assets/logo-facebook.svg';
import navImg8 from '../../assets/logo-instagram.svg';
import navImg9 from '../../assets/logo-twitter.svg';

// Phone Icon
import navImg10 from '../../assets/call-outline.svg';

function Header() {
  // Menu Slider
  const [open, setOpen] = useState(false);

  // Menu Links
  const Menu = [
    { title: 'Homepage', src: navImg1 },
    { title: 'Services', src: navImg2 },
    { title: 'Gallery', src: navImg3 },
    { title: 'Contact', src: navImg4 },
    { title: 'Register', src: navImg5, gap: true },
    { title: 'Credit', src: navImg6 },

    { title: 'Facebook', src: navImg7, gap: true },
    { title: 'Instagram', src: navImg8 },
    { title: 'Twitter', src: navImg9 },
  ];

  return (
    <header>
      {/* Navbar */}
      <nav className="flex">
        {/* Nav Width (w-72 === 18rem || 288px; w-20 === 5rem || 80px) */}
        <div
          className={`

        // 1920px - 640px
        ${
          open ? 'w-72' : 'w-20'
        } duration-300 h-screen p-5 pt-8 bg-blue-900 fixed 

        // 639px (sm)
        ${open ? 'sm:h-screen' : 'sm:h-24'} sm:w-screen`}
        >
          {/* Menu Arrow Btn */}
          <img
            className={`

          // 1920px - 640px
          ${
            !open && 'rotate-[360deg] duration-300'
          } absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-black bg-white

          // 639px (sm)
          sm:right-2
          `}
            src={process.env.PUBLIC_URL + '/ellipsis.png'}
            alt="navbar arrow"
            onClick={() => setOpen(!open)}
          ></img>

          {/* Nav Logo */}
          <div className="flex gap-x-4 items-center">
            <img
              className={`nav-logo cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
              src={process.env.PUBLIC_URL + '/logo192.png'}
              alt="nav logo"
            ></img>
            <h1
              className={`text-white origin-left font-medium text-xl duration-300 ${
                !open && 'scale-0'
              } `}
            >
              MedCare
            </h1>
          </div>

          {/* Nav List */}
          <ul className="pt-6">
            {Menu.map((menu, index) => (
              <li
                key={index}
                className={`

              // 1920px - 640px
              text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md ${
                menu.gap ? 'mt-9' : 'mt-2'
              } ${index === 0 && 'bg-indigo-50 text-zinc-900'}
              
              // 639px (sm)
              ${!open && 'sm:hidden'}
              `}
              >
                <img
                  className={`

                // 1920px - 640px
                nav-icons

                // 639px (sm)
                ${!open && 'sm:hidden'}
                
                `}
                  src={`${menu.src}`}
                  alt="nav images"
                ></img>
                <span
                  className={`

                   // 1920px - 640px
                   ${!open && 'hidden'} origin-left duration-200

                   // 639px (sm)

                  `}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Header */}
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Home Page</h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// { title: "404- 944-2346", src: navImg10, gap: true}

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

// import React from 'react'

// function NavButton(props) {

//     return (
//       <button className='bg-black text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-cyan-600 duration-500'>
//         {props.children}
//       </button>
//     );
//   }

// export default NavButton;
