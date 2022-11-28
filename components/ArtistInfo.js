import React, { useState } from 'react';
import Image from 'next/image';
import useSound from 'use-sound';

function ArtistInfo () {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound('/sound.mp3');

  const handlePlay = () => {
    setIsPlaying(true);
    play();
  };

  const handleStop = () => {
    setIsPlaying(false);
    pause();
  };

  const statsStyles = 'text-sm text-white';
  const socialsStyles = 'bg-black text-white font-bold py-2 px-4 rounded-full mt-6 flex gap-4 border-white border-2 hover:border-darkRebelRed';

  return (
    <div className='flex flex-col ml-[80vh]'>
      <h1 className='text-6xl text-lightRebelRed font-bold mt-[25vh] mb-6'>TONY 777</h1>
      <div className='flex gap-10 ml-4 mb-2'>
        <p className={statsStyles}>6000 FOLLOWERS</p>
        <p className={statsStyles}>21000 LIKES</p>
        <p className={statsStyles}>600000 PLAYS</p>
      </div>
      <div className='flex gap-8 ml-4 mb-10'>
        <button
          onClick={() => (isPlaying ? handleStop() : handlePlay())}
          className='
          hover:border-darkRebelRed w-40 bg-black text-white font-bold py-2 px-4 rounded-full mt-6 flex gap-4 border-white border-2'>
          {!isPlaying ? <Image src='/assets/icons/play.png' width={25} height={25} /> : <Image src='/assets/icons/pause.png' width={25} height={25} />}
          PLAY ALL
        </button>
        <div className="wrapper flex gap-4">
          <a href="#" className={socialsStyles}>
            <span><i className="fab fa-facebook-f"></i></span>
          </a>
          <a href="#" className={socialsStyles}>
            <span><i className="fab fa-twitter"></i></span>
          </a>
          <a href="#" className={socialsStyles}>
            <span><i className="fab fa-instagram"></i></span>
          </a>
          <a href="#" className={socialsStyles}>
            <span><i className="fab fa-youtube"></i></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArtistInfo;
