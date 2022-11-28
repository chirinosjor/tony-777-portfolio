import Link from 'next/link';
import React from 'react';

function Navbar () {
  const linkStyles = 'px-6 text-xl text-white hover:text-lightRebelRed border-b-4 border-lightRebelRed';
  const navLink = (label, route) => (
    <li className={linkStyles}><Link href={route} ><p className='p-6'>{label}</p></Link></li>
  );
  return (
    <nav>
      <ul className='flex gap-[150px] ml-[80vh]'>
        {navLink('Overview', '/')}
        {navLink('Music', '/music')}
        {navLink('Videos', '/videos')}
        {navLink('Shows', '/shows')}
      </ul>
    </nav>
  );
}

export default Navbar;
