import React from 'react';
import Image from 'next/image';
import artistImage from '../public/assets/artist.jpg';

function ArtistBiography () {
  return (
    <>
      <div className='absolute left-[200px] top-[150px]'>
        <Image src={artistImage} width={400} height={500} />
        <div className='w-[400px]'>
          <h1 className='text-[50px]'>Biografía</h1>
          <p className='text-justify w-[380px] m-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec et commodo ante. Maecenas interdum dictum dolor sit amet euismod.
            Nulla facilisi. Quisque tempor malesuada rutrum. Nam accumsan tellus
            quis lacus finibus, vitae feugiat tellus dapibus. Phasellus viverra,
            turpis sed faucibus ultrices, sem ante vulputate mauris, mattis accumsan
            eros massa vel odio. Sed et nulla vitae arcu scelerisque molestie at nec mi.
            Nam maximus elit vel eleifend condimentum. Aliquam tincidunt mattis vestibulum.
            Sed scelerisque at felis eu faucibus. Morbi dignissim ipsum at tellus maximus,
            sed feugiat metus porttitor. Curabitur fermentum rutrum eros, nec pretium
            tortor ullamcorper a. Cras mollis, ex et laoreet varius, metus ipsum
            scelerisque nibh, id tristique lacus neque id nisi. Aliquam quis quam
            dignissim, porttitor justo vel, aliquam ante.
          </p>
        </div>
      </div>
    </>
  );
}

export default ArtistBiography;
