import React from 'react'

function NavButton(props) {

    return (
      <button className='bg-black text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-cyan-600 duration-500'>
        {props.children}
      </button>
    );
  }

export default NavButton;
