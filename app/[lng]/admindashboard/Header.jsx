'use client';

import React, {useState, useEffect} from 'react';


const Header = ({ toggleMobileView }) => {



    return (
        <header className="flex items-center justify-between p-6 bg-header-bg text-white">
            <div className="md:hidden">
                <button onClick={toggleMobileView} className="text-white hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <h1 className={'text-2xl font-semibold ml-0 md:ml-64'}>ADMIN DASHBOARD</h1>
            <img
                src="https://flowbite.com/application-ui/demo/images/users/neil-sims.png"
                alt="user"
                className='w-10 h-10 rounded-full'
            />
        </header>
    );
}

export default Header;