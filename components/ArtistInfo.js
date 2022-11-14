import React from 'react';

function ArtistInfo () {
  return (
    <div className='flex flex-col ml-[80vh]'>
      <h1 className='text-6xl text-white font-bold mt-[30vh]'>Tony 777</h1>
      <div className='flex gap-4'>
        <p className='text-2xl text-white'>6000 followers</p>
        <p className='text-2xl text-white'>21000 likes</p>
        <p className='text-2xl text-white'>600000 plays</p>
      </div>
    </div>
  );
}

export default ArtistInfo;
