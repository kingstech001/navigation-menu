'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown, FiHome, FiDollarSign, FiTool, FiInfo, FiHelpCircle, FiSearch, FiBell, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Props {
    isAuthenticated: boolean;
}

const MobileNavigation: React.FC<Props> = ({ isAuthenticated }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [view, setView] = useState<'main' | 'tools'>('main');
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'text-orange-500' : 'text-gray-700';
    };

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleLogout = () => {
        
    };

    const handleToolsClick = () => {
        setView('tools'); // Switch to tools view
    };

    const handleBackClick = () => {
        setView('main'); // Switch back to main view
    };

    return (
        <nav className="bg-white list-none">
            <div className="mx-auto flex justify-between items-center px-6 py-4 md:px-8 md:py-6">
                <Link href="/">
                    <Image src="/MOBILE LOGO ICON.png" alt="Logo" width={24} height={27.43} />
                </Link>
                {isAuthenticated ? (
                    <div className="relative flex items-center space-x-4">
                        <FiSearch className="text-gray-700 hover:text-gray-900 cursor-pointer" />
                        <FiBell className="text-gray-700 hover:text-gray-900 cursor-pointer" />
                        <div className="flex items-center cursor-pointer" onClick={handleToggleDropdown}>
                            <Image src="/avatar.jpg" alt="Profile Picture" width={40} height={40} className="rounded-full" />
                            <FiChevronDown className="ml-1 text-gray-700 hover:text-gray-900" />
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-gray-700 hover:text-gray-900"
                    >
                        <FiMenu size={24} />
                    </button>
                )}
            </div>
            {isOpen && !isAuthenticated ? (
                <div className="pb-5 px-6 md:px-8 flex flex-col justify-between h-[92vh] fixed w-full bg-white z-50 max-w-[300px]">
                    <div className="flex items-center justify-between">
                        <Image src="/Desktop Logo.png" alt="Logo" width={64} height={20} />
                        <FiX size={24} onClick={() => setIsOpen(false)} />
                    </div>
                    {view === 'main' && (
                        <ul className="flex flex-col space-y-4 mt-4 text-[16px] flex-1">
                            <li className='pr-[16px] py-[8px]'><Link href="/" className={`${isActive('/')} hover:text-gray-900 flex items-center text`}><FiHome className="mr-2" />Home</Link></li>
                            <li className='pr-[16px] py-[8px]'><Link href="/pricing" className={`${isActive('/pricing')} hover:text-gray-900 flex items-center`}><FiDollarSign className="mr-2" />Pricing</Link></li>
                            <li className='flex items-center justify-between pr -[16px] py-[8px]'><Link href="/tools" className={`${isActive('/tools')} hover:text-gray-900 flex items-center`}><FiTool className="mr-2" />Tools </Link> <FiChevronRight className="ml-1" onClick={handleToolsClick} /></li>
                            <li className='pr-[16px] py-[8px]'><Link href="/about" className={`${isActive('/about')} hover:text-gray-900 flex items-center`}><FiInfo className="mr-2" />About</Link></li>
                        </ul>
                    )}
                    {view === 'tools' && (
                        <div className="px-6 md:px-8 absolute max-w-[300px] bg-white top-0 left-0 w-full h-[90vh] p-[24px]">
                            <div className="flex items-center justify-start cursor-pointer p-4" onClick={handleBackClick}>
                                <FiChevronLeft className='w-[7.78]'/>
                            </div>
                            <ul className="p-4 w-full text-[16px]">
                                <li className="flex items-center p-2 hover:bg-[#F4F4F5] px-[16px] py-[8px] rounded-[8px]">
                                    <Image src="/tool-1.png" alt="Tool 1" width={50} height={50} className="rounded-md" />
                                    <p className="text-gray-700 mt-2 ml-3">Text-to-Video</p>
                                </li>
                                <li className="flex items-center p-2 hover:bg-[#F4F4F5] px-[16px] py-[8px] rounded-[8px]">
                                    <Image src="/tool-2.png" alt="Tool 2" width={50} height={50} className="rounded-md" />
                                    <p className="text-gray-700 mt-2 ml-3">Image-to-Video</p>
                                </li>
                                <li className="flex items-center p-2 hover:bg-[#F4F4F5] px-[16px] py-[8px] rounded-[8px]">
                                    <Image src="/tool-3.png" alt="Tool 3" width={50} height={50} className="rounded-md" />
                                    <p className="text-gray-700 mt-2 ml-3">Create Thumbnail</p>
                                </li>
                                <li className="flex items-center p-2 hover:bg-[#F4F4F5] px-[16px] py-[8px] rounded-[8px]">
                                    <Image src="/tool-4.png" alt="Tool 4" width={50} height={50} className="rounded-md" />
                                    <p className="text-gray-700 mt-2 ml-3">YouTube Summarizer</p>
                                </li>
                                <li className="flex items-center p-2 hover:bg-[#F4F4F5] px-[16px] py-[8px] rounded-[8px]">
                                    <Image src="/tool-5.png" alt="Tool 5" width={50} height={50} className="rounded-md" />
                                    <p className="text-gray-700 mt-2 ml-3">Audio Summarizer</p>
                                </li>
                                <li className="flex items-center p-2 hover:bg-[#F4F4F5] px-[16px] py-[8px] rounded-[8px]">
                                    <Image src="/tool-6.png" alt="Tool 6" width={50} height={50} className="rounded-md" />
                                    <p className="text-gray-700 mt-2 ml-3">Podcast Summarizer</p>
                                </li>
                                <li className="flex items-center p-2 hover:bg-[#F4F4F5] px-[16px] py-[8px] rounded-[8px]">
                                    <Image src="/tool-7.png" alt="Tool 7" width={50} height={50} className="rounded-md" />
                                    <p className="text-gray-700 mt-2 ml-3">PDF Summarizer</p>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div className="flex flex-col gap-5 w-full">
                        <button className="w-full">
                            <Link href="/login" className="block text-[#1A1A1A] bg-[#F4F4F5] px-4 py-2 rounded-full text-sm sm:text-base w-full text-center">
                                Log in
                            </Link>
                        </button>
                        <button className="w-full">
                            <Link href="/signup" className="block text-[#FFFAF6] bg-[#F97316] px-4 py-2 rounded-full text-sm sm:text-base w-full text-center">
                                Get Started
                            </Link>
                        </button>
                    </div>
                </div>
            ) : null}
            <div className="px-6 md:px-8">
                {isDropdownOpen && isAuthenticated ? (
                    <>
                        <div className="flex items-center justify-start cursor-pointer" onClick={handleCloseDropdown}>
                            <FiChevronLeft />
                            <Image src="/Desktop Logo.png" alt="Logo" width={64} height={20} />
                        </div>
                        <div>
                            <Image src="/images/avatar.png" alt="Profile" width={132} height={132} className='block mx-auto mb-[16px]' />
                            <div className="flex flex-col gap-5 w-full mb-[24px]">
                                <button className="w-full">
                                    <Link href="/login" className="block text-[#1A1A1A] bg-[#F4F4F5] px-4 py-2 rounded-full text-sm sm:text-base w-full text-center">
                                        Edit profile
                                    </Link>
                                </button>
                                <button className="w-full">
                                    <Link href="/signup" className="block text-[#FFFAF6] bg-[#F97316] px-4 py-2 rounded-full text-sm sm:text-base w-full text-center">
                                        UPGRADE PLAN
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <ul className="flex flex-col space-y-4 mt-4 text-lg gap-[8px]">
                            <li><Link href="/" className={`${isActive('/')} hover:text-gray-900 flex items-center`}><FiHome className="mr-2" />Home</Link></li>
                            <li><Link href="/tools" className={`${isActive('/tools')} hover:text-gray-900 flex items-center`}><FiTool className="mr-2" />Tools <FiChevronDown className="ml-1" /></Link></li>
                            <li><Link href="/projects" className={`${isActive('/projects')} hover:text-gray-900 flex items-center`}><FiHome className="mr-2" />My Projects</Link></li>
                        </ul>
                    </>
                ) : null}
                {isDropdownOpen && isAuthenticated && (
                    <div className="w-full mt-4 flex flex-col gap-[8px]">
                        <hr />
                        <article className="font-medium text-base leading-5 text-[#4D4E51]">
                            <Link href="/settings" className="flex items-center gap-2 p-2 mt-1">
                                <Image src="/settings.svg" width={20} height={20} alt="settings" />
                                <p>Settings</p>
                            </Link>
                            <Link href="/help" className="flex items-center gap-2 p-2 mt-1">
                                <Image src="/help_support.svg" width={20} height={20} alt="help" />
                                <p>Help & Support</p>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-2 p-2 text-base leading-5 mt-1 rounded-sm text-[#EC2D30]"
                            >
                                <Image src="/images/icon.png" width={20} height={20} alt="logout" />
                                <p>Log out</p>
                            </button>
                        </article>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default MobileNavigation;
