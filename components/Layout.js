import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import ArtistInfo from './ArtistInfo';

function Layout ({ children }) {
  return (
    <div className='bg-scroll bg-[url("/assets/header.jpg")] h-[60vh] w-full bg-cover'>
      <Header />
      <ArtistInfo />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
