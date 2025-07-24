"use client";
import { Facebook, Youtube, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialIcons = [
    { icon: Facebook, color: "bg-blue-600 hover:bg-blue-700", name: "facebook" },
    { icon: Youtube, color: "bg-red-600 hover:bg-red-700", name: "youtube" },
    { icon: Instagram, color: "bg-pink-600 hover:bg-pink-700", name: "instagram" },
    { icon: Linkedin, color: "bg-blue-700 hover:bg-blue-800", name: "linkedin" },
  ];

  const links = [
    { text: "আমাদের সম্পর্কে", href: "#" },
    { text: "ক্যারিয়ার", href: "#" },
    { text: "হেল্প", href: "#" },
    { text: "টিচার পোর্টাল", href: "#" },
  ];

  const legalLinks = [
    { text: "Terms & Conditions", href: "#" },
    { text: "Refund Policy", href: "#" },
    { text: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-indigo-50 text-gray-700">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and App Download Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-indigo-600 mb-2 transition-colors hover:text-indigo-700">
                HSC Academy
              </h2>
              <p className="text-gray-600">নিয়ে আপ ডাউনলোড করুন!</p>
            </div>
            
            {/* Google Play Store */}
            <button 
              className="flex items-center space-x-3 bg-gray-900 text-white px-4 py-2 rounded-lg w-fit transition-all 
                         hover:bg-gray-800 active:scale-95 shadow-md hover:shadow-lg"
              aria-label="Download from Google Play"
            >
              <div className="text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div>
                <div className="text-xs">Google Play</div>
              </div>
            </button>

            <div>
              <p className="text-gray-800 font-medium mb-3">আমাদের সাথে কানেক্ট থাকুন</p>
              <div className="flex space-x-4">
                {socialIcons.map(({ icon: Icon, color, name }) => (
                  <div 
                    key={name}
                    className="relative group"
                    onMouseEnter={() => setHoveredIcon(name)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <Icon 
                      className={`w-8 h-8 p-1.5 text-white rounded-full cursor-pointer transition-all ${color} 
                                 transform group-hover:-translate-y-1 group-hover:scale-110`}
                    />
                    <span 
                      className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap`}
                    >
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4 text-lg">লিংক</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 block py-1"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4 text-lg">যোগাযোগ</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <a 
                  href="tel:16780" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  16780
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <a 
                  href="mailto:team@shikho.com" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 break-all"
                >
                  team@shikho.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                <address className="text-gray-600 not-italic">
                  <p>Rangs Paramount, Level 11</p>
                  <p>Block-K, Plot-11 Rd No 17, Dhaka 1213</p>
                </address>
              </div>
            </div>
          </div>

          {/* Company Info Column */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4 text-lg">কোম্পানির তথ্য</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">Trade licence No:</span>
                <p className="text-gray-600">TRAD/DNCC/037245/2022</p>
              </div>
              <div>
                <span className="text-gray-500">E-TIN Number :</span>
                <p className="text-gray-600">197682866359</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              {legalLinks.map((link, index) => (
                <div key={index} className="flex items-center">
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-300 mx-2">|</span>
                  )}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              © {new Date().getFullYear()} Shikho Technologies Bangladesh Ltd.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;