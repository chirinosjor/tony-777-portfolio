import Link from 'next/link';
import React from 'react';

function Navbar () {
  return (
    <>
      <nav>
        <ul className='flex gap-[150px] ml-[80vh]'>
          <li className='text-2xl text-white border-b-8'><Link href="/overview" ><p className='p-6'>Overview</p></Link></li>
          <li className='text-2xl text-white border-b-8'><Link href="/music" ><p className='p-6'>Music</p></Link></li>
          <li className='text-2xl text-white border-b-8'><Link href="/videos" ><p className='p-6'>Videos</p></Link></li>
          <li className='text-2xl text-white border-b-8'><Link href="/shows" ><p className='p-6'>Shows</p></Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
