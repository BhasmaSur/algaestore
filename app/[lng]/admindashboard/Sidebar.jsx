// src/components/Sidebar.js
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';


const Sidebar = ({ option, setOption }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClick = (sidebarOption) => {
    setOption(sidebarOption)
  }

  return (
    <aside className={`w-64 md:w-1/6 bg-sidebar-bg text-white p-6 max-h-screen md:block fixed top-30 md:top-0 left-0 bottom-0 right-0 z-10`}>
      {/* Hamburger Menu for Mobile */}


      {/* Sidebar Content */}
      <div className='mt-16'>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul>
            <li className="mb-2" onClick={() => handleClick('Dashboard')}>
              <a href="#"
                className={`text-gray-300 hover:text-white`}>
                Dashboard
              </a>
            </li>
            <li className="mb-2" onClick={() => handleClick('Buyer')}>
              <a href="#" className="text-gray-300 hover:text-white">Buyers</a>
            </li>
            <li className="mb-2" onClick={() => handleClick('Seller')}>
              <a href="#" className="text-gray-300 hover:text-white">Sellers</a>
            </li>
            <li className="mb-2" onClick={() => handleClick('Addproduct')}>
              <a href="#" className="text-gray-300 hover:text-white">Add Product</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">Profile</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">Notifications</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
