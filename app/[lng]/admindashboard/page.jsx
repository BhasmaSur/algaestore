// src/pages/page.js
'use client';

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const Page = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [option, setOption] = useState('Dashboard');

  const toggleMobileView = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <div className="bg-header-bg">
      <div>
        <Header toggleMobileView={toggleMobileView} />
      </div>
      <div className="flex justify-center items-center">
        <div className={`md:w-1/6 ${isMobileView ? 'block' : 'md:block'}`}>
          <div className="md:flex">
            <div className={`md:block ${isMobileView ? 'block' : 'hidden'}`}>
              <Sidebar setOption={setOption} />
            </div>
          </div>
        </div>

        <Content option={option} />
      </div>
    </div>
  );
};

export default Page;
