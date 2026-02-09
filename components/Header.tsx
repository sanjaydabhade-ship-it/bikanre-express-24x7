
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
    { label: 'Experience', href: '#experience' },
    { label: 'Menu', href: '#menu' },
    { label: 'Locations', href: '#locations' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-16 py-6 ${
        isScrolled ? 'bg-[#fcfaf7]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <a 
          href="#hero" 
          className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors duration-500 ${
            isScrolled ? 'text-neutral-900' : 'text-white'
          }`}
        >
          Bikaner <span className="text-accent italic">Express</span> 24x7
        </a>

        <nav className="hidden lg:flex items-center space-x-12">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-[10px] font-bold transition-all duration-300 uppercase tracking-[0.3em] relative group ${
                isScrolled ? 'text-neutral-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#book"
            className={`px-8 py-3 text-[10px] font-bold transition-all duration-500 uppercase tracking-[0.3em] border ${
              isScrolled 
                ? 'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800' 
                : 'bg-white text-neutral-900 border-white hover:bg-transparent hover:text-white'
            }`}
          >
            Book a Table
          </a>
        </nav>

        <div className="lg:hidden">
            <button className={`${isScrolled ? 'text-neutral-900' : 'text-white'} p-2`}>
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
