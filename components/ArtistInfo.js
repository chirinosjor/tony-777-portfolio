import React from 'react';
import Image from 'next/image';

function ArtistInfo () {
  return (
    <div className='flex flex-col ml-[80vh]'>
      <h1 className='text-6xl text-lightRebelRed font-bold mt-[25vh] mb-6'>TONY 777</h1>
      <div className='flex gap-10 ml-4 mb-2'>
        <p className='text-sm text-white'>6000 FOLLOWERS</p>
        <p className='text-sm text-white'>21000 LIKES</p>
        <p className='text-sm text-white'>600000 PLAYS</p>
      </div>
      <div className='flex gap-8 ml-4 mb-10'>
        <button
          className='
          w-40 bg-black text-white font-bold py-2 px-4 rounded-full mt-6 flex gap-4 border-white border-2'>
          <Image src='/assets/icons/play.png' width={25} height={25} />
          PLAY ALL
        </button>
      </div>
    </div>
  );
}

export default ArtistInfo;
