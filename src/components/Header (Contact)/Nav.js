import React, { useState } from 'react';
import Header from './Header';
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

// Phone, Email, and Copyright Icons
import navImg10 from '../../assets/call-outline.svg';
import navImg11 from '../../assets/at-circle-outline.svg';
import navImg12 from '../../assets/globe-outline.svg';

function Nav() {
  // Menu Slider
  const [open, setOpen] = useState(false);

  // Menu Links
  const LeftMenu = [
    { title: 'Homepage', src: navImg1, pathway: '/' },
    { title: 'Services', src: navImg2, pathway: '/services' },
    { title: 'Gallery', src: navImg3, pathway: '/gallery' },
    { title: 'Contact', src: navImg4, pathway: '/contact' },
  ];

  const MiddleMenu = [
    // Will have link to doc
    { title: 'Register', src: navImg5 },
    { title: 'Credit', src: navImg6, pathway: '/credit' },
  ];

  const RightMenu = [
    // Will have social media links
    { title: 'Facebook', src: navImg7 },
    { title: 'Instagram', src: navImg8 },
    { title: 'Twitter', src: navImg9 },
  ];

  const BottomMenu = [
    { title: '404- 944-2346', src: navImg10 },
    // { title: 'support@medcarehealthcert.com', src: navImg11 },
    { title: '2022 MedCare HealthCert', src: navImg12 },
  ];

  return (
    <header>
      {/* Navbar */}
      <nav className="flex z-50">
        {/* Nav Width (w-72 === 18rem || 288px; w-20 === 5rem || 80px) */}
        <div
          className={`

        // ALL SIZES
        z-50 shadow-lg shadow-black
          
        // 1920px - 640px
        ${open ? 'w-80' : 'w-20'}  h-screen p-5 pt-8 bg-slate-200 fixed 

        // 639px (sm)
        ${
          open ? 'sm:h-screen' : 'sm:h-24 sm:w-24'
        } sm:w-screen sm:duration-300 sm:shadow-none
        
        // iPhone SE (Landscape)
        // ${
          open ? 'iPhoneSE:h-screen' : 'iPhoneSE:h-24'
        } iPhoneSE:w-screen iPhoneSE:duration-300

        // iPhoneXR (Landscape)
        ${
          open ? 'iPhoneXR:h-screen' : 'iPhoneXR:h-24'
        } iPhoneXR:w-screen iPhoneXR:duration-300

        // iPhone12Pro (Landscape)
        ${
          open ? 'iPhone12Pro:h-screen' : 'iPhone12Pro:h-24'
        } iPhone12Pro:w-screen iPhone12Pro:duration-300

        // Pixel5 (Landscape)
        ${
          open ? 'Pixel5:h-screen' : 'Pixel5:h-24'
        } Pixel5:w-screen Pixel5:duration-300

        // SamsungS8 (Landscape)
        ${
          open ? 'SamsungS8:h-screen' : 'SamsungS8:h-24'
        } SamsungS8:w-screen SamsungS8:duration-300

        // SamsungS20Ultra (Landscape)
        ${
          open ? 'SamsungS20Ultra:h-screen' : 'SamsungS20Ultra:h-24'
        } SamsungS20Ultra:w-screen SamsungS20Ultra:duration-300

        `}
        >
          {/* Menu Arrow Btn */}
          <img
            className={`

          // 1920px - 640px
          ${
            !open && 'rotate-[180deg] duration-300'
          } absolute cursor-pointer rounded-full -right-1 top-9 w-7 border-2 border-black bg-white

          // 639px (sm)
          sm:right-5 sm:rotate-[-90deg] ${
            open && 'sm:rotate-[-270deg] sm:duration-300'
          }

          // iPhone SE (Landscape)
          iPhoneSE:right-5 iPhoneSE:rotate-[-90deg] ${
            open && 'iPhoneSE:rotate-[-270deg] iPhoneSE:duration-300'
          }

          // iPhoneXR (Landscape)
          iPhoneXR:right-5 iPhoneXR:rotate-[-90deg] ${
            open && 'iPhoneXR:rotate-[-270deg] iPhoneXR:duration-300'
          }

          // iPhone12Pro (Landscape)
          iPhone12Pro:right-5 iPhone12Pro:rotate-[-90deg] ${
            open && 'iPhone12Pro:rotate-[-270deg] iPhone12Pro:duration-300'
          }

          // Pixel5 (Landscape)
          Pixel5:right-5 Pixel5:rotate-[-90deg] ${
            open && 'Pixel5:rotate-[-270deg] Pixel5:duration-300'
          }

          // SamsungS8 (Landscape)
          SamsungS8:right-5 SamsungS8:rotate-[-90deg] ${
            open && 'SamsungS8:rotate-[-270deg] SamsungS8:duration-300'
          }

          // SamsungS20Ultra (Landscape)
          SamsungS20Ultra:right-5 SamsungS20Ultra:rotate-[-90deg] ${
            open &&
            'SamsungS20Ultra:rotate-[-270deg] SamsungS20Ultra:duration-300'
          }


          `}
            src={process.env.PUBLIC_URL + '/left-arrow.png'}
            alt="navbar arrow"
            onClick={() => setOpen(!open)}
          ></img>

          {/* Nav Logo */}
          <div className="nav-list flex gap-x-4 items-center">
            <img
              className={`nav-logo cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
              src={process.env.PUBLIC_URL + '/logo192.png'}
              alt="nav logo"
            ></img>
            <h1
              className={`

              // 1920px - 640px
              text-white origin-left font-medium text-xl duration-300 ${
                !open && 'hidden'
              } drop-shadow-md hover:drop-shadow-xl 

              // 639px (sm)
              ${!open && 'sm:scale-100'}
              
              // iPhone SE (Landscape)
              ${!open && 'iPhoneSE:scale-100'}

              // iPhoneXR (Landscape)
              ${!open && 'iPhoneXR:scale-100'}

              // iPhone12Pro (Landscape)
              ${!open && 'iPhone12Pro:scale-100'}

              // Pixel5 (Landscape)
              ${!open && 'Pixel5:scale-100'}

              // SamsungS8 (Landscape)
              ${!open && 'SamsungS8:scale-100'}

              // SamsungS20Ultra (Landscape)
              ${!open && 'SamsungS20Ultra:scale-100'}


              `}
            >
              MedCare HealthCert
            </h1>
          </div>

          {/* NAV LIST PARENT DIV */}
          <div
            className={`
          
              // 1920px - 640px
              grid grid-cols-1

              // iPhone SE (Landscape)
              iPhoneSE:grid-cols-3

              // iPhoneXR (Landscape)
              iPhoneXR:grid-cols-3

              // iPhone12Pro (Landscape)
              iPhone12Pro:grid-cols-3

              // Pixel5 (Landscape)
              Pixel5:grid-cols-3

              // SamsungS8 (Landscape)
              SamsungS8:grid-cols-3

              // SamsungS20Ultra (Landscape)
              SamsungS20Ultra:grid-cols-3


          `}
          >
            {/* LEFT MENU */}
            <div
              className={`

              // 1920px - 640px
              pb-4

              // LANDSCAPE
              // ---------
              // iPhone SE (Landscape)
              iPhoneSE:pb-0

              // iPhoneXR (Landscape)
              iPhoneXR:pb-0

              // iPhone12Pro (Landscape)
              iPhone12Pro:pb-0

              // Pixel5 (Landscape)
              Pixel5:pb-0

              // SamsungS8 (Landscape)
              SamsungS8:pb-0

              // SamsungS20Ultra (Landscape)
              SamsungS20Ultra:pb-0

              // iPadAir (Landscape)
              iPadAir:pb-10

              // iPadMini (Landscape)
              iPadMini:pb-10

              // HORIZONTAL
              // ----------
              // iPhone SE (Horizontal)
              iPhoneSEH:pb-6

              // iPhoneXR (Horizontal)
              iPhoneXRH:pb-16

              // iPhone12Pro (Horizontal)
              iPhone12ProH:pb-10

              // Pixel5 (Horizontal)
              Pixel5H:pb-10

              // SamsungS8 (Horizontal)
              SamsungS8H:pb-8

              // SamsungS20Ultra (Horizontal)
              SamsungS20UltraH:pb-16

              // iPadAir (Horizontal)
              iPadAirH:pb-20

              // iPadMini (Horizontal)
              iPadMiniH:pb-20

            `}
            >
              <ul className="pt-6">
                {LeftMenu.map((menu, index) => (
                  <li
                    key={index}
                    className={`

                  // 1920px - 640px
                  text-zinc-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md ${
                    menu.gap ? 'mt-9' : 'mt-2'
                  } 
                  h-9

                  // 639px (sm)
                  ${!open && 'sm:hidden'}

                  // iPhone SE (Landscape)
                  ${!open && 'iPhoneSE:hidden'} iPhoneSE:grid grid-cols-4

                  // iPhoneXR (Landscape)
                  ${!open && 'iPhoneXR:hidden'} iPhoneXR:grid grid-cols-4

                  // iPhone12Pro (Landscape)
                  ${!open && 'iPhone12Pro:hidden'} iPhone12Pro:grid grid-cols-4

                  // Pixel5 (Landscape)
                  ${!open && 'Pixel5:hidden'} Pixel5:grid grid-cols-4

                  // SamsungS8 (Landscape)
                  ${!open && 'SamsungS8:hidden'} SamsungS8:grid grid-cols-4

                  // SamsungS20Ultra (Landscape)
                  ${
                    !open && 'SamsungS20Ultra:hidden'
                  } SamsungS20Ultra:grid grid-cols-4


                  `}
                  >
                    <a href={`${menu.pathway}`}>
                      <img
                        className={`

                        // 1920px - 640px
                        left-nav-icons

                        // 639px (sm)
                        ${!open && 'sm:hidden'}
                      `}
                        src={`${menu.src}`}
                        alt="left nav images"
                      ></img>
                    </a>
                    <a
                      href={`${menu.pathway}`}
                      className={`

                      // 1920px - 640px
                      ${!open && 'hidden'} origin-left duration-200
                      `}
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* MIDDLE MENU */}
            <div
              className={`

              // 1920px - 640px
              pb-4


              // LANDSCAPE
              // ---------
              // iPhone SE (Landscape)
              iPhoneSE:pb-0 iPhoneSE:pt-6

              // iPhone XR (Landscape)
              iPhoneXR:pb-0 iPhoneXR:pt-6

              // iPhone12Pro (Landscape)
              iPhone12Pro:pb-0 iPhone12Pro:pt-6

              // Pixel5 (Landscape)
              Pixel5:pb-0 Pixel5:pt-6

              // SamsungS8 (Landscape)
              SamsungS8:pb-0 SamsungS8:pt-6

              // SamsungS20Ultra (Landscape)
              SamsungS20Ultra:pb-0 SamsungS20Ultra:pt-6

              // iPadAir (Landscape)
              iPadAir:pb-20

              // iPadMini (Landscape)
              iPadMini:pb-20

              // HORIZONTAL
              // ---------
              // iPhone SE (Horizontal)
              iPhoneSEH:pb-6

              // iPhoneXR (Horizontal)
              iPhoneXRH:pb-16

              // iPhone12Pro (Horizontal)
              iPhone12ProH:pb-10

              // Pixel5 (Horizontal)
              Pixel5H:pb-10

              // SamsungS8 (Horizontal)
              SamsungS8H:pb-8

              // SamsungS20Ultra (Horizontal)
              SamsungS20UltraH:pb-28

              // iPadAir (Horizontal)
              iPadAirH:pb-20

              // iPadMini (Horizontal)
              iPadMiniH:pb-36


            `}
            >
              <ul>
                {MiddleMenu.map((menu, index) => (
                  <li
                    key={index}
                    className={`

                  // 1920px - 640px
                  text-zinc-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md ${
                    menu.gap ? 'mt-9' : 'mt-2'
                  }
                  h-9
                  
                  // 639px (sm)
                  ${!open && 'sm:hidden'}

                  // iPhone SE (Landscape)
                  ${!open && 'iPhoneSE:hidden'} iPhoneSE:grid grid-cols-4

                  // iPhoneXR (Landscape)
                  ${!open && 'iPhoneXR:hidden'} iPhoneXR:grid grid-cols-4

                  // iPhone12Pro (Landscape)
                  ${!open && 'iPhone12Pro:hidden'} iPhone12Pro:grid grid-cols-4

                  // Pixel5 (Landscape)
                  ${!open && 'Pixel5:hidden'} Pixel5:grid grid-cols-4

                  // SamsungS8 (Landscape)
                  ${!open && 'SamsungS8:hidden'} SamsungS8:grid grid-cols-4

                  // SamsungS20Ultra (Landscape)
                  ${
                    !open && 'SamsungS20Ultra:hidden'
                  } SamsungS20Ultra:grid grid-cols-4


                  `}
                  >
                    <a href={`${menu.pathway}`}>
                      <img
                        className={`
                        
                        // 1920px - 640px
                        middle-nav-icons

                        // 639px (sm)
                        ${!open && 'sm:hidden'}
                        `}
                        src={`${menu.src}`}
                        alt="middle nav images"
                      ></img>
                    </a>
                    <a
                      href={`${menu.pathway}`}
                      className={`

                      // 1920px - 640px
                      ${!open && 'hidden'} origin-left duration-200
                    `}
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT MENU */}
            <div
              className={`

            // 1920px - 640px
            pb-16

            // LANDSCAPE
            // ---------

            // iPhone SE (Landscape)
            iPhoneSE:pb-0 iPhoneSE:pt-6

            // iPhone XR (Landscape)
            iPhoneXR:pb-0 iPhoneXR:pt-6

            // iPhone12Pro (Landscape)
            iPhone12Pro:pb-0 iPhone12Pro:pt-6

            // Pixel5 (Landscape)
            Pixel5:pb-0 Pixel5:pt-6

            // SamsungS8 (Landscape)
            SamsungS8:pb-0 SamsungS8:pt-6

            // SamsungS20Ultra (Landscape)
            SamsungS20Ultra:pb-0 SamsungS20Ultra:pt-6

            // iPadAir (Landscape)
              iPadAir:pb-28

            // iPadMini (Landscape)
            iPadMini:pb-16

            // HORIZONTAL
            // ---------
            // iPhone SE (Horizontal)
            iPhoneSEH:pb-10

            // iPhoneXR (Horizontal)
            iPhoneXRH:pb-44

            // iPhone12Pro (Horizontal)
            iPhone12ProH:pb-40

            // Pixel5 (Horizontal)
            Pixel5H:pb-44

            // SamsungS8 (Horizontal)
            SamsungS8H:pb-24

            // SamsungS20Ultra (Horizontal)
            SamsungS20UltraH:pb-40

            // iPadAir (Horizontal)
            iPadAirH:pb-96

            //iPadMini (Horizontal)
            iPadMiniH:pb-52


            `}
            >
              <ul>
                {RightMenu.map((menu, index) => (
                  <li
                    key={index}
                    className={`

                  // 1920px - 640px
                  text-zinc-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md ${
                    menu.gap ? 'mt-9' : 'mt-2'
                  } 
                  h-9
                  
                  // 639px (sm)
                  ${!open && 'sm:hidden'}

                  // iPhone SE (Landscape)
                  ${!open && 'iPhoneSE:hidden'} iPhoneSE:grid grid-cols-4

                  // iPhoneXR (Landscape)
                  ${!open && 'iPhoneXR:hidden'} iPhoneXR:grid grid-cols-4

                  // iPhone12Pro (Landscape)
                  ${!open && 'iPhone12Pro:hidden'} iPhone12Pro:grid grid-cols-4

                  // Pixel5 (Landscape)
                  ${!open && 'Pixel5:hidden'} Pixel5:grid grid-cols-4

                  // SamsungS8 (Landscape)
                  ${!open && 'SamsungS8:hidden'} SamsungS8:grid grid-cols-4

                  // SamsungS20Ultra (Landscape)
                  ${
                    !open && 'SamsungS20Ultra:hidden'
                  } SamsungS20Ultra:grid grid-cols-4


                  `}
                  >
                    <a href={`${menu.pathway}`}>
                      <img
                        className={`
                        
                        // 1920px - 640px
                        right-nav-icons
                        
                        // 639px (sm)
                        ${!open && 'sm:hidden'}
                        `}
                        src={`${menu.src}`}
                        alt="right nav images"
                      ></img>
                    </a>
                    <a
                      href={`${menu.pathway}`}
                      className={`

                      // 1920px - 640px
                      ${!open && 'hidden'} origin-left duration-200
                    `}
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM MENU PARENT DIV */}
          <div
            className={`
          
          // 1920px - 640px
          flex relative

          // iPhone SE (Landscape)
          iPhoneSE:justify-end iPhoneSE:right-9

          // iPhoneXR (Landscape)
          iPhoneXR:justify-end iPhoneXR:right-28

          // iPhone12Pro (Landscape)
          iPhone12Pro:justify-end iPhone12Pro:right-24
        
          // Pixel5 (Landscape)
          Pixel5:justify-end Pixel5:right-24

          // SamsungS8 (Landscape)
          SamsungS8:justify-end SamsungS8:right-14        

          // SamsungS20Ultra (Landscape)
          SamsungS20Ultra:justify-end SamsungS20Ultra:right-28
          
          `}
          >
            {/* BOTTOM MENU */}
            <div
              className={`
              
            `}
            >
              <ul>
                {BottomMenu.map((menu, index) => (
                  <li
                    key={index}
                    className={`

                  // 1920px - 640px
                  text-zinc-900 text-xxs flex items-center gap-x-4 p-2 h-10


                  `}
                  >
                    <a href={`${menu.pathway}`}>
                      <img
                        className={`
                        
                        // 1920px - 640px
                        bottom-nav-icons
                        
                        // 639px (sm)
                        ${!open && 'sm:hidden'}

                        // iPhoneSE (Landscape)
                        ${!open && 'iPhoneSE:hidden'}

                        // iPhoneXR (Landscape)
                        ${!open && 'iPhoneXR:hidden'}

                        // iPhone12Pro (Landscape)
                        ${!open && 'iPhone12Pro:hidden'}

                        // Pixel5 (Landscape)
                        ${!open && 'Pixel5:hidden'} 

                        // SamsungS8 (Landscape)
                        ${!open && 'SamsungS8:hidden'} 

                        // SamsungS20Ultra (Landscape)
                        ${!open && 'SamsungS20Ultra:hidden'} 

                        `}
                        src={`${menu.src}`}
                        alt="right nav images"
                      ></img>
                    </a>
                    <span
                      className={`

                      // 1920px - 640px
                      ${!open && 'hidden'} origin-left duration-200 
                    `}
                    >
                      {menu.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Header */}
      {/* <Header /> */}
    </header>
  );
}

export default Nav;
