import Link from 'next/link';
import React from 'react';

function Navbar () {
  const linkStyles = 'px-6 text-xl text-lightRebelRed border-b-4 border-lightRebelRed';
  return (
    <>
      <nav>
        <ul className='flex gap-[150px] ml-[80vh]'>
          <li className={linkStyles}><Link href="/" ><p className='p-6'>Overview</p></Link></li>
          <li className={linkStyles}><Link href="/music" ><p className='p-6'>Music</p></Link></li>
          <li className={linkStyles} ><Link href="/videos" ><p className='p-6'>Videos</p></Link></li>
          <li className={linkStyles}><Link href="/shows" ><p className='p-6'>Shows</p></Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
