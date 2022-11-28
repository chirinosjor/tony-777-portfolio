import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import ArtistInfo from './ArtistInfo';
import ArttistBiography from './ArtistBiography';

function Layout ({ children }) {
  return (
    <>
      <div className='bg-scroll bg-[url("/assets/header.jpg")] h-[550px] w-full bg-cover'>
        <Header />
        <ArtistInfo />
        <Navbar />
        <div className='flex'>
          <ArttistBiography />
          <main className='mt-2 ml-[700px] p-[50px]'>{children}</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
