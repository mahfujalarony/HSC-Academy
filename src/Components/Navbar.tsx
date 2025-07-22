import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const navigationItems = [
    { href: "/", label: "হোম" },
    { href: "/courses", label: "সকল কোর্স" },
    { href: "/success", label: "লক্ষ GPA-5" },
    { href: "/admission", label: "এডমিশন প্রোগ্রাম" },
    { href: "/shop", label: "শিখ শপ" },
    { href: "/about", label: "আমাদের সম্পর্কে" }
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.jpg" 
                alt="HSC Academy Logo" 
                width={50} 
                height={50}
                className="rounded-full"
              />
              <span className="ml-3 text-xl font-bold text-blue-800">HSC Academy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-6">
              {navigationItems.map((item) => (
                <li key={item.href} className="hover:text-blue-600 transition-colors">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            
            {/* Auth Button */}
                        <div className="ml-6">
              <Link 
                href="/login" 
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#393BB2_50%,#E2E8F0_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-800 transition-colors">
                  লগইন / রেজিস্টার
                </span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu - Only this part is client component */}
          <MobileMenu navigationItems={navigationItems} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
