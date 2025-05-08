import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Poppins } from 'next/font/google';

// Configure Poppins with only light/regular weight (400)
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (isMenuOpen && sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Navigation items data
  const navItems = [
    { name: 'Home', href: '#top' },
    { name: 'About me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'My Work', href: '#work' },
    { name: 'Contact me', href: '#contact' },
  ];

  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 right-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <Image
          src={assets.header_bg_color}
          alt="Background"
          className="w-full h-full object-cover"
          priority
          fill
        />
      </div>

      {/* Main Navigation */}
      <nav
        className={`${poppins.className} w-full fixed px-4 sm:px-6 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? 'bg-white bg-opacity-80 backdrop-blur-lg shadow-sm' : ''
        }`}
      >
        {/* Logo */}
        <a href="#top" aria-label="Home" className="focus:outline-none focus:ring-2 focus:ring-rose-300 rounded">
          <Image
            src={assets.name2}
            alt="Logo"
            className="w-24 h-5 cursor-pointer md:mr-14"
            width={96}
            height={20}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 rounded-full px-6 lg:px-8 py-2 ${
            isScroll ? '' : 'bg-white bg-opacity-50 shadow-sm'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="px-2 py-1 text-gray-700 hover:text-rose-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:rounded"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle dark mode"
            className="p-1 focus:outline-none focus:ring-2 focus:ring-rose-300 rounded"
          >
            <Image
              className="w-5 sm:w-6"
              src={assets.moon_icon}
              alt="Dark mode"
              width={24}
              height={24}
            />
          </button>

          {/* Contact Button (Desktop) */}
          <a
            className={`${poppins.className} hidden lg:flex items-center gap-2 px-6 py-2 sm:px-8 sm:py-2.5 border border-gray-300 rounded-full ml-2 sm:ml-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300`}
            href="#contact"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" width={12} height={12} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden ml-2 p-1 focus:outline-none focus:ring-2 focus:ring-rose-300 rounded"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <Image
              className="w-6"
              src={isMenuOpen ? assets.close_black : assets.menu_black}
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:hidden`}
          onClick={toggleMenu}
        />

        {/* Mobile Menu Content */}
        <ul
          ref={sideMenuRef}
          className={`${poppins.className} flex md:hidden flex-col gap-6 py-12 px-8 fixed top-0 right-0 w-64 sm:w-72 h-full z-50 bg-white shadow-lg transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className="absolute right-6 top-6 p-1 focus:outline-none focus:ring-2 focus:ring-rose-300 rounded"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <Image src={assets.close_black} alt="" className="w-5" width={20} height={20} />
          </button>

          {navItems.map((item) => (
            <li key={item.name}>
              <a
                onClick={toggleMenu}
                href={item.href}
                className="block py-2 px-4 text-gray-700 hover:bg-rose-50 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;