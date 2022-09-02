import React, { useState } from 'react';
import './header.css';

// Images
// Page Icons
import navImg1 from '../../assets/home-outline.svg';
import navImg2 from '../../assets/create-outline.svg';
import navImg3 from '../../assets/images-outline.svg';
import navImg4 from '../../assets/mail-outline.svg';
import navImg5 from '../../assets/clipboard-outline.svg';

// Social Media Icons
import navImg7 from '../../assets/logo-facebook.svg';
import navImg8 from '../../assets/logo-instagram.svg';
import navImg9 from '../../assets/logo-twitter.svg';
import navImg10 from '../../assets/logo-tiktok.svg';

// Phone, Email, and Copyright Icons
import navImg11 from '../../assets/call-outline.svg';
import navImg13 from '../../assets/globe-outline.svg';

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
    {
      title: 'Register',
      src: navImg5,
      pathway:
        'https://docs.google.com/forms/d/e/1FAIpQLSeN5gkyLOgwY10k-v8oOXCGx2rJiw_BosrU5DJtsmaeWI25EQ/viewform',
    },
  ];

  const RightMenu = [
    // Will have social media links
    {
      title: 'Facebook',
      src: navImg7,
      pathway: 'https://www.facebook.com/MedCares',
    },
    {
      title: 'Instagram',
      src: navImg8,
      pathway: 'https://www.instagram.com/medcares1/',
    },
    {
      title: 'Twitter',
      src: navImg9,
      pathway: 'https://twitter.com/medcareinfos',
    },
    {
      title: 'TikTok',
      src: navImg10,
      pathway:
        'https://www.tiktok.com/@medcarehealthcert?_d=secCgYIASAHKAESPgo8YjzpuiEzdiXkwtR4WHk1rEZmUX%2FwbR6Ga8IavRLz0Qc0s26a6GIzSmXcHA5S0EfM9RTxMxQnOY795fjUGgA%3D&_r=1&checksum=7c45a515ed653b87c284f387c46073fd7b812aaa83c24dfba7d55b59da727b95&language=en&sec_uid=MS4wLjABAAAAPC_xK2YrNZ0cRjxmdwtC5HBLT3AXRYxvY1CGimeGM4z_zGpz7J2j3291u9iC18pI&sec_user_id=MS4wLjABAAAA4k_eoBxI4CR7LkPoAa4PSsLTamC82-65BUg9bbY8ISfV9mZVCZJykVPZ6q7chhtA&share_app_id=1233&share_author_id=6810637229493601285&share_link_id=0D717981-37C7-4180-AF4F-FFF24F0AB1F0&source=h5_m&timestamp=1658421640&tt_from=copy&u_code=db0h334f0g1bc5&ug_btm=b7200%2Cb5836&user_id=6794243478852207621&utm_campaign=client_share&utm_medium=ios&utm_source=copy',
    },
  ];

  const BottomMenu = [
    { title: '404- 944-2346', src: navImg11, pathway: '/contact' },
    { title: 'Copyright Images', src: navImg13, pathway: '/credit' },
  ];

  return (
    <header className="overflow-x-visible">
      {/* Navbar */}
      <nav className="flex z-50">
        {/* Nav Width (w-72 === 18rem || 288px; w-20 === 5rem || 80px) */}
        <div
          className={`

        // ALL SIZES
        z-40 shadow-lg shadow-black overflow-hidden
          
        // 1920px - 640px
        ${
          open ? 'w-80 sm:bg-sky-300 ' : 'w-20'
        }  h-screen p-5 pt-8 bg-slate-200 fixed 

        639px | sm
        sm:bg-white

        // iPhoneSE (Landscape)
          iPhoneSE:shadow-none iPhoneSE:bg-white

        // iPhoneXR (Landscape)
          iPhoneXR:shadow-none iPhoneXR:bg-white

        // iPhone12Pro (Landscape)
          iPhone12Pro:shadow-none iPhone12Pro:bg-white

        // Pixel5 (Landscape)
          Pixel5:shadow-none Pixel5:bg-white

        // SamsungS8 (Landscape)
          SamsungS8:shadow-none SamsungS8:bg-white

        // SamsungS20Ultra (Landscape)
          SamsungS20Ultra:shadow-none SamsungS20Ultra:bg-white

        // GalaxyFold (Landscape)
          GalaxyFold:shadow-none GalaxyFold:bg-white
        
        // iPadAir
          iPadAir:overflow-y-hidden

        // iPadMini
          iPadMini:overflow-y-hidden

        // iPhone8Plus
          iPhone8Plus:shadow-none iPhone8Plus:bg-white

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

        // GalaxyFold (Landscape)
        ${
          open ? 'GalaxyFold:h-screen' : 'GalaxyFold:h-24'
        } GalaxyFold:w-screen GalaxyFold:duration-300

        // iPhone8Plus (Landscape)
        ${
          open ? 'iPhone8Plus:h-screen' : 'iPhone8Plus:h-24'
        } iPhone8Plus:w-screen iPhone8Plus:duration-300

        `}
        >
          {/* Menu Arrow Btn */}
          <img
            className={`

          // 1920px - 640px
          ${
            !open && 'rotate-[180deg] duration-300'
          } absolute cursor-pointer rounded-full right-1 top-20 w-7 border-2 border-black bg-white

          // 639px (sm)
          sm:right-5 sm:rotate-[-90deg] ${
            open && 'sm:rotate-[-270deg] sm:duration-300'
          } sm:top-10

          // iPhone SE (Landscape)
          iPhoneSE:right-5 iPhoneSE:rotate-[-90deg] ${
            open && 'iPhoneSE:rotate-[-270deg] iPhoneSE:duration-300'
          } iPhoneSE:top-10

          // iPhoneXR (Landscape)
          iPhoneXR:right-5 iPhoneXR:rotate-[-90deg] ${
            open && 'iPhoneXR:rotate-[-270deg] iPhoneXR:duration-300'
          } iPhoneXR:top-10

          // iPhone12Pro (Landscape)
          iPhone12Pro:right-5 iPhone12Pro:rotate-[-90deg] ${
            open && 'iPhone12Pro:rotate-[-270deg] iPhone12Pro:duration-300'
          } iPhone12Pro:top-10

          // Pixel5 (Landscape)
          Pixel5:right-5 Pixel5:rotate-[-90deg] ${
            open && 'Pixel5:rotate-[-270deg] Pixel5:duration-300'
          } Pixel5:top-10

          // SamsungS8 (Landscape)
          SamsungS8:right-5 SamsungS8:rotate-[-90deg] ${
            open && 'SamsungS8:rotate-[-270deg] SamsungS8:duration-300'
          } SamsungS8:top-10

          // SamsungS20Ultra (Landscape)
          SamsungS20Ultra:right-5 SamsungS20Ultra:rotate-[-90deg] ${
            open &&
            'SamsungS20Ultra:rotate-[-270deg] SamsungS20Ultra:duration-300'
          } SamsungS20Ultra:top-10

          // GalaxyFold (Landscape)
          GalaxyFold:right-5 GalaxyFold:rotate-[-90deg] ${
            open && 'GalaxyFold:rotate-[-270deg] GalaxyFold:duration-300'
          } GalaxyFold:top-10

          // iPhone8Plus (Landscape)
          iPhone8Plus:right-5 iPhone8Plus:rotate-[-90deg] ${
            open && 'iPhone8Plus:rotate-[-270deg] iPhone8Plus:duration-300'
          } iPhone8Plus:top-10


          `}
            src={process.env.PUBLIC_URL + '/left-arrow.png'}
            alt="navbar arrow"
            onClick={() => setOpen(!open)}
          ></img>

          {/* Nav Logo */}

          <a href={`/`}>
            <div className="nav-list flex gap-x-4 items-center overflow-hidden">
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

                text-slate-40300 origin-left font-medium text-xl duration-300 ${
                  !open && 'hidden'
                } drop-shadow-md hover:drop-shadow-xl


                // 639px (sm)
                sm:text-black
                ${!open && 'sm:scale-100'}
                
                // iPhoneSE (Landscape)
                ${!open && 'iPhoneSE:scale-100'}
                iPhoneSE:text-black

                // iPhoneXR (Landscape)
                ${!open && 'iPhoneXR:scale-100'}
                iPhoneXR:text-black

                // iPhone12Pro (Landscape)
                ${!open && 'iPhone12Pro:scale-100'}
                iPhone12Pro:text-black

                // Pixel5 (Landscape)
                ${!open && 'Pixel5:scale-100'}
                Pixel5:text-black

                // SamsungS8 (Landscape)
                ${!open && 'SamsungS8:scale-100'}
                SamsungS8:text-black

                // SamsungS20Ultra (Landscape)
                ${!open && 'SamsungS20Ultra:scale-100'}
                SamsungS20Ultra:text-black

                // GalaxyFold (Landscape)
                ${!open && 'GalaxyFold:scale-100'}
                GalaxyFold:text-black

                // iPhone8Plus (Landscape)
                ${!open && 'iPhone8Plus:scale-100'}
                iPhone8Plus:text-black


                `}
              >
                MedCare HealthCert
              </h1>
            </div>
          </a>

          {/* NAV LIST PARENT DIV */}
          <div
            className={`

            overflow-hidden
          
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

              // GalaxyFold (Landscape)
              GalaxyFold:grid-cols-3

              // iPhone8Plus (Landscape)
              iPhone8Plus:grid-cols-3


          `}
          >
            {/* LEFT MENU */}
            <div
              className={`

              // 1920px - 640px
              ULTIMATE:pb-6 ULTIMATE:pt-0
            
              // SUPERULTIMATE
              SUPERULTIMATE:pb-40 SUPERULTIMATE:pt-10

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

              // GalaxyFold (Landscape)
              GalaxyFold:pb-10 GalaxyFold:bottom-5 GalaxyFold:relative

              // iPhone8Plus (Landscape)
              iPhone8Plus:pb-10

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

              // GalaxyFold (Horizontal)
              GalaxyFoldH:pb-6

            `}
            >
              <ul
                className="
              
              // Base
              pt-8


              
              "
              >
                {LeftMenu.map((menu, index) => (
                  <a href={`${menu.pathway}`}>
                    <li
                      key={index}
                      className={`

                  overflow-hidden

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
                    ${
                      !open && 'iPhone12Pro:hidden'
                    } iPhone12Pro:grid grid-cols-4

                    // Pixel5 (Landscape)
                    ${!open && 'Pixel5:hidden'} Pixel5:grid grid-cols-4

                    // SamsungS8 (Landscape)
                    ${!open && 'SamsungS8:hidden'} SamsungS8:grid grid-cols-4

                    // SamsungS20Ultra (Landscape)
                    ${
                      !open && 'SamsungS20Ultra:hidden'
                    } SamsungS20Ultra:grid grid-cols-4

                    // GalaxyFold (Landscape)
                    ${!open && 'GalaxyFold:hidden'} GalaxyFold:grid grid-cols-4

                    // iPhone8Plus (Landscape)
                    ${
                      !open && 'iPhone8Plus:hidden'
                    } iPhone8Plus:grid grid-cols-4


                    `}
                    >
                      <span href={`${menu.pathway}`}>
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
                      </span>
                      <span
                        href={`${menu.pathway}`}
                        className={`

                        // 1920px - 640px
                        ${!open && 'hidden'} origin-left duration-200
                         

                        `}
                      >
                        {menu.title}
                      </span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>

            {/* MIDDLE MENU */}
            <div
              className={`

              // 1920px - 640px
              ULTIMATE:pb-6

              // SUPERULTIMATE
              SUPERULTIMATE:pb-40

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

              // GalaxyFold (Landscape)
              GalaxyFold:pb-20 GalaxyFold:top-3
              GalaxyFold:relative

              // iPhone8Plus (Landscape)
              iPhone8Plus:pb-0 iPhone8Plus:pt-6

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

              // GalaxyFold (Horizontal)
              GalaxyFold:pb-36


            `}
            >
              <ul>
                {MiddleMenu.map((menu, index) => (
                  // `rel="nonreferrer"` instructs the browser, when navigating to the target resource, to omit the Referer header and otherwise leak no referrer information — and additionally to behave as if the noopener keyword were also specified.
                  <a href={`${menu.pathway}`} target="_blank" rel="noreferrer">
                    <li
                      key={index}
                      className={`
                      overflow-hidden

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
                    ${
                      !open && 'iPhone12Pro:hidden'
                    } iPhone12Pro:grid grid-cols-4

                    // Pixel5 (Landscape)
                    ${!open && 'Pixel5:hidden'} Pixel5:grid grid-cols-4

                    // SamsungS8 (Landscape)
                    ${!open && 'SamsungS8:hidden'} SamsungS8:grid grid-cols-4

                    // SamsungS20Ultra (Landscape)
                    ${
                      !open && 'SamsungS20Ultra:hidden'
                    } SamsungS20Ultra:grid grid-cols-4

                    // GalaxyFold (Landscape)
                    ${!open && 'GalaxyFold:hidden'} GalaxyFold:grid grid-cols-4

                    // iPhone8Plus (Landscape)
                    ${
                      !open && 'iPhone8Plus:hidden'
                    } iPhone8Plus:grid grid-cols-4

                    `}
                    >
                      <span href={`${menu.pathway}`}>
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
                      </span>
                      <span
                        href={`${menu.pathway}`}
                        className={`

                        // 1920px - 640px
                        ${!open && 'hidden'} origin-left duration-200
                      `}
                      >
                        {menu.title}
                      </span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>

            {/* RIGHT MENU */}
            <div
              className={`

            // 1920px - 640px
              ULTIMATE:pb-16

            // SUPERULTIMATE
              SUPERULTIMATE:pb-32

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

            // GalaxyFold (Landscape)
            GalaxyFold:pb-16 GalaxyFold:top-5
            GalaxyFold:relative

            // iPhone8Plus (Landscape)
            iPhone8Plus:pb-0 iPhone8Plus:pt-6

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
            
            //GalaxyFold (Horizontal)
            GalaxyFoldH:pb-8

            `}
            >
              <ul>
                {RightMenu.map((menu, index) => (
                  // `rel="nonreferrer"` instructs the browser, when navigating to the target resource, to omit the Referer header and otherwise leak no referrer information — and additionally to behave as if the noopener keyword were also specified.
                  <a href={`${menu.pathway}`} target="_blank" rel="noreferrer">
                    <li
                      key={index}
                      className={`
                      overflow-hidden

                    // 1920px - 640px
                    text-zinc-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md ${
                      menu.gap ? 'mt-9' : 'mt-0'
                    } 
                    h-9
                    
                    // 639px (sm)
                    ${!open && 'sm:hidden'}

                    // iPhone SE (Landscape)
                    ${!open && 'iPhoneSE:hidden'} iPhoneSE:grid grid-cols-4

                    // iPhoneXR (Landscape)
                    ${!open && 'iPhoneXR:hidden'} iPhoneXR:grid grid-cols-4

                    // iPhone12Pro (Landscape)
                    ${
                      !open && 'iPhone12Pro:hidden'
                    } iPhone12Pro:grid grid-cols-4

                    // Pixel5 (Landscape)
                    ${!open && 'Pixel5:hidden'} Pixel5:grid grid-cols-4

                    // SamsungS8 (Landscape)
                    ${!open && 'SamsungS8:hidden'} SamsungS8:grid grid-cols-4

                    // SamsungS20Ultra (Landscape)
                    ${
                      !open && 'SamsungS20Ultra:hidden'
                    } SamsungS20Ultra:grid grid-cols-4

                    // GalaxyFold (Landscape)
                    ${!open && 'GalaxyFold:hidden'} GalaxyFold:grid grid-cols-4

                    // iPhone8Plus (Landscape)
                    ${
                      !open && 'iPhone8Plus:hidden'
                    } iPhone8Plus:grid grid-cols-4


                    `}
                    >
                      <span
                        href={`${menu.pathway}
                      
                      `}
                      >
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
                      </span>
                      <span
                        href={`${menu.pathway}`}
                        className={`

                        // 1920px - 640px
                        ${!open && 'hidden'} origin-left duration-200
                      `}
                      >
                        {menu.title}
                      </span>
                    </li>
                  </a>
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
          iPhoneSE:justify-end iPhoneSE:right-20

          // iPhoneXR (Landscape)
          iPhoneXR:justify-end iPhoneXR:right-36

          // iPhone12Pro (Landscape)
          iPhone12Pro:justify-end iPhone12Pro:right-32
        
          // Pixel5 (Landscape)
          Pixel5:justify-end Pixel5:right-36

          // SamsungS8 (Landscape)
          SamsungS8:justify-end SamsungS8:right-24 SamsungS8:bottom-2     

          // SamsungS20Ultra (Landscape)
          SamsungS20Ultra:justify-end SamsungS20Ultra:right-40
          
          // GalaxyFold (Landscape)
          GalaxyFold:hidden

          // iPhone8Plus (Landscape)
          iPhone8Plus:justify-end iPhone8Plus:right-24

          `}
          >
            {/* BOTTOM MENU */}
            <div
              className={`
              
            `}
            >
              <ul>
                {BottomMenu.map((menu, index) => (
                  <a href={`${menu.pathway}`}>
                    <li
                      key={index}
                      className={`

                  // 1920px - 640px
                  text-zinc-900 text-xxs flex items-center gap-x-4 p-2 h-8 hover:bg-slate-400 rounded-md ${
                    menu.gap ? 'mt-9' : 'mt-2'
                  }
                  h-9

                  `}
                    >
                      <span href={`${menu.pathway}`}>
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

                        // GalaxyFold (Landscape)
                        ${!open && 'GalaxyFold:hidden'}

                        // iPhone8Plus (Landscape)
                        ${!open && 'iPhone8Plus:hidden'}

                        `}
                          src={`${menu.src}`}
                          alt="right nav images"
                        ></img>
                      </span>
                      <span
                        href={`${menu.pathway}`}
                        className={`

                      // 1920px - 640px
                      ${!open && 'hidden'} origin-left duration-200 
                    `}
                      >
                        {menu.title}
                      </span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
