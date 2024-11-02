"use client"
import React from 'react';
import Headroom from 'react-headroom';
import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import BottomHeader from './BottomHeader';

const Header = () => {
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
