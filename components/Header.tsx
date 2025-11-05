// =============================
// components/Header.tsx
// =============================
'use client';

import React from 'react';
import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { FiInstagram } from 'react-icons/fi';

const navItems = [
  // { name: 'Shop', href: '/shop' },
  // { name: 'Best Sellers', href: '/about' },
  // { name: 'Science', href: '/science' },
  // { name: 'Journal', href: '/journal' },
  { name: 'Skin & Body Care', href: '/shop' },
  { name: 'Hair Care', href: '/shop' },
  { name: 'Track Order', href: '/shop' },

];

// const Header: React.FC = () => {
function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo */}
        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        > */}
          <Link href="/">
            <span className="text-3xl font-semibold  text-gray-900 hover:text-purple-400 hover:bg-purple-100 px-2 py-1 rounded-full transition">
              Skinflow
            </span>
          </Link>
        {/* </motion.div> */}

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-pink-700 text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Instagram Button */}
        {/* <motion.a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition"
        > */}
          {/* <FiInstagram className="text-lg" /> */}
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-pink-400 hover:bg-pink-600 text-white font-semibold py-1 px-4 rounded-full transition">
            Follow
          </Link>
        {/* </motion.a> */}
      </div>
    </header>
  );
};

export default Header;
