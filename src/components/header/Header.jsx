"use client"
import React from 'react';
import Headroom from 'react-headroom';
import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import BottomHeader from './BottomHeader';
import { usePathname } from 'next/navigation';

const Header = () => {
    // Get the current pathname
    const pathname = usePathname();

    // Check if the current route includes '/signin'
    if (pathname.includes('/register')|| pathname.includes('/signin')) {
      return null;
    }
  return (
    <Headroom>
      <div className=" bg-themeColor/40 shadow">
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />
      </div>
    </Headroom>
  );
};

export default Header;
