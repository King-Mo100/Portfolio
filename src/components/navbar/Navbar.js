import React from 'react';
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  return (
    <div>
        <div className='w-full h-20 mx-auto flex justify-between items-center font-titleFont'>
            <img src={logo} alt="logo" className='rounded-full'style={{ width: '6.25rem', height: '6.25rem' }} />
        </div>
        <div>
    <ul className='flex items-center gap-10'>
        {navLinksdata.map(({_id, title, link})=>(
            <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}> {title}</li>
            ))}   
    </ul>        
        </div>
    </div>
  );
}

export default Navbar;
