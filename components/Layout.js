import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import ArtistInfo from './ArtistInfo';
import ArttistBiography from './ArtistBiography';

function Layout ({ children }) {
  return (
    <>
      <div className='bg-scroll bg-[url("/assets/header.jpg")] h-[61vh] w-full bg-cover'>
        <Header />
        <ArtistInfo />
        <Navbar />
        <div className='flex'>
          <ArttistBiography />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
