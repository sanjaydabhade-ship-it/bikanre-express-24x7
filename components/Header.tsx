
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'MENU', href: '#full-menu' },
    { label: 'THE BRAND STORY', href: '#about' },
    { label: 'LOCATION', href: '#locations' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 md:px-12 py-6 ${
        isScrolled 
          ? 'bg-[#051408] border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <a 
          href="#hero" 
          className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white group"
        >
          <span className="transition-colors duration-500">Bikaner </span>
          <span className="text-accent italic transition-all duration-500">Express</span>
          <span className="transition-colors duration-500"> 24x7</span>
        </a>

        {/* Navigation Section */}
        <div className="flex items-center space-x-12 md:space-x-16">
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold text-white/90 hover:text-white transition-all duration-300 uppercase tracking-[0.3em] relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Solid CTA Button */}
          <a 
            href="#book"
            className="hidden sm:block px-10 py-4 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 hover:brightness-110 shadow-lg"
          >
            BOOK A TABLE
          </a>

          {/* Mobile Menu Trigger */}
          <button className="lg:hidden text-white/80 p-2 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
