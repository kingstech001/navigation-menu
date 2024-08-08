'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiChevronDown, FiSearch, FiBell } from 'react-icons/fi';
import CustomDropdown from '../CustomDropdown';

interface Props {
  isAuthenticated: boolean;
}

const DesktopNavigation: React.FC<Props> = ({ isAuthenticated }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const toolsDropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleToolsMouseEnter = () => {
    if (toolsDropdownTimeout.current) {
      clearTimeout(toolsDropdownTimeout.current);
    }
    setIsToolsDropdownOpen(true);
  };

  const handleToolsMouseLeave = () => {
    toolsDropdownTimeout.current = setTimeout(() => {
      setIsToolsDropdownOpen(false);
    }, 300);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const isActive = (path: string) => {
    return pathname === path ? 'text-orange-500' : 'text-gray-700';
  };

  return (
    <nav className="bg-white w-full md:px-[30px] lg:px-[100px] py-[28px] relative">
      <div className="mx-auto flex justify-between items-center text-[20px]">
        <div className="flex-none">
          <Link href="/">
            <Image src="/Desktop Logo.png" alt="Logo" width={160} height={40} />
          </Link>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <ul className="flex space-x-6">
            {isAuthenticated ? (
              <>
                <li 
                  onMouseEnter={handleToolsMouseEnter}
                  onMouseLeave={handleToolsMouseLeave}
                  className="relative"
                >
                  <Link href="/tools" className={`${isActive('/tools')} hover:text-gray-900 flex items-center`}>
                    Tools <FiChevronDown className="ml-1" />
                  </Link>
                </li>
                <li><Link href="/projects" className={`${isActive('/projects')} hover:text-gray-900`}>Projects</Link></li>
                <li><Link href="/help" className={`${isActive('/help')} hover:text-gray-900`}>Help</Link></li>
              </>
            ) : (
              <>
                <li><Link href="/" className={`${isActive('/')} hover:text-gray-900`}>Home</Link></li>
                <li><Link href="/pricing" className={`${isActive('/pricing')} hover:text-gray-900`}>Pricing</Link></li>
                <li 
                  onMouseEnter={handleToolsMouseEnter}
                  onMouseLeave={handleToolsMouseLeave}
                  className="relative"
                >
                  <Link href="/tools" className={`${isActive('/tools')} hover:text-gray-900 flex items-center`}>
                    Tools <FiChevronDown className="ml-1" />
                  </Link>
                </li>
                <li><Link href="/about" className={`${isActive('/about')} hover:text-gray-900`}>About</Link></li>
              </>
            )}
          </ul>
        </div>
        <div className='relative'>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4 relative">
              <>
                <div className="relative">
                  <FiSearch
                    className={`text-gray-700 hover:text-gray-900 cursor-pointer ${isSearchOpen ? 'hidden' : ''}`}
                    onClick={handleToggleSearch}
                  />
                  {isSearchOpen && (
                    <div className="bg-white border border-gray-300 rounded-full flex items-center px-2 py-1">
                      <FiSearch className="text-gray-700" />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 outline-none text-gray-700 w-full md:w-20 lg:w-64 focus:border-black"
                      />
                    </div>
                  )}
                </div>
                <FiBell className="text-gray-700 hover:text-gray-900 cursor-pointer" />
                <div className="flex items-center cursor-pointer" onClick={handleToggleDropdown}>
                  <Image src="/avatar.jpg" alt="Profile Picture" width={40} height={40} className="rounded-full" />
                  <FiChevronDown className="ml-1 text-gray-700 hover:text-gray-900" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-12 w-60 right-0">
                    <CustomDropdown handleLogout={handleLogout} />
                  </div>
                )}
              </>
            </div>
          ) : (
            <div className="flex-none space-x-4">
              <button className="flex-shrink-0">
                <Link href="/login" className="text-[#1A1A1A] bg-[#F4F4F5] px-4 py-2 lg:px-8 md:py-4 rounded-full text-sm sm:text-base">
                  Log in
                </Link>
              </button>
              <button className="flex-shrink-0">
                <Link href="/signup" className="text-[#FFFAF6] bg-[#F97316] px-4 py-2 lg:px-8 md:py-4 rounded-full text-sm sm:text-base">
                  Get Started
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
      {isToolsDropdownOpen && (
        <div 
          onMouseEnter={handleToolsMouseEnter}
          onMouseLeave={handleToolsMouseLeave}
          className="absolute top-18.5 left-0 mt-2 w-full bg-white z-10 flex "
        >
         <ul className="p-4 flex flex-wrap justify-around w-full">
  <li className="flex flex-col items-center p-2 hover:bg-gray-100 hover:scale-10 hover:shadow-md transition transform duration-200 rounded-md">
    <Image src="/tool-1.png" alt="Tool 1" width={50} height={50} className="rounded-md" />
    <p className="text-gray-700 mt-2">Text-to-Video</p>
  </li>
  <li className="flex flex-col items-center p-2 hover:bg-gray-100 hover:scale-10 hover:shadow-lg transition transform duration-200 rounded-md">
    <Image src="/tool-2.png" alt="Tool 2" width={50} height={50} className="rounded-md" />
    <p className="text-gray-700 mt-2">Image-to-Video</p>
  </li>
  <li className="flex flex-col items-center p-2 hover:bg-gray-100 hover:scale-10 hover:shadow-lg transition transform duration-200 rounded-md">
    <Image src="/tool-3.png" alt="Tool 3" width={50} height={50} className="rounded-md" />
    <p className="text-gray-700 mt-2">Create Thumbnail</p>
  </li>
  <li className="flex flex-col items-center p-2 hover:bg-gray-100 hover:scale-10 hover:shadow-lg transition transform duration-200 rounded-md">
    <Image src="/tool-4.png" alt="Tool 4" width={50} height={50} className="rounded-md" />
    <p className="text-gray-700 mt-2">YouTube Summarizer</p>
  </li>
  <li className="flex flex-col items-center p-2 hover:bg-gray-100 hover:scale-10 hover:shadow-lg transition transform duration-200 rounded-md">
    <Image src="/tool-5.png" alt="Tool 5" width={50} height={50} className="rounded-md" />
    <p className="text-gray-700 mt-2">Audio Summarizer</p>
  </li>
  <li className="flex flex-col items-center p-2 hover:bg-gray-100 hover:scale-10 hover:shadow-lg transition transform duration-200 rounded-md">
    <Image src="/tool-6.png" alt="Tool 6" width={50} height={50} className="rounded-md" />
    <p className="text-gray-700 mt-2">Podcast Summarizer</p>
  </li>
  <li className="flex flex-col items-center p-2 hover:bg-gray-100 hover:scale-10 hover:shadow-lg transition transform duration-200 rounded-md">
    <Image src="/tool-7.png" alt="Tool 7" width={50} height={50} className="rounded-md" />
    <p className="text-gray-700 mt-2">PDF Summarizer</p>
  </li>
</ul>

        </div>
      )}
    </nav>
  );
};

export default DesktopNavigation;
