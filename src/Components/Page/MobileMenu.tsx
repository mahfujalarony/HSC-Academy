"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavigationItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navigationItems: NavigationItem[];
}

const MobileMenu = ({ navigationItems }: MobileMenuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="xl:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <div className={`
        xl:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}
      `}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Sidebar */}
        <div className={`
          absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-blue-800">মেনু</span>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 hover:text-blue-600"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            <ul className="space-y-4">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="block py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Auth Button */}
            <div className="ml-6">
              <Link 
                href="/login" 
                className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#1d4ed8_50%,#3b82f6_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-blue-700 transition-all duration-300 shadow-lg">
                  লগইন / রেজিস্টার
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;