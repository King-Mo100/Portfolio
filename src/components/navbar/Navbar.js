import React from 'react';
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  return (
    <div>
        <div className='w-full h-20 mx-auto flex justify-between items-center'>
            <img src={logo} alt="logo" className='rounded-full'/>
        </div>
        <div>
    <ul className='flex items-center gap-10'>
     {
        navLinksdata.map((navLink)=>(
            <lil>
                {navLink.title}
            </lil>
        ))
     }   
    </ul>        
        </div>
    </div>
  );
}

export default Navbar;
