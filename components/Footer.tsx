
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {/* Left: Branding */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold">Bikaner Express 24x7</h2>
          <p className="text-neutral-400 text-sm tracking-widest uppercase font-light">
            Pure Vegetarian &bull; Open 24x7
          </p>
        </div>

        {/* Center: Links */}
        <div className="grid grid-cols-2 gap-8 text-sm">
          <ul className="space-y-3">
            <li><a href="#hero" className="text-neutral-400 hover:text-white transition-colors">Experience</a></li>
            <li><a href="#menu" className="text-neutral-400 hover:text-white transition-colors">Menu</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="#locations" className="text-neutral-400 hover:text-white transition-colors">Locations</a></li>
            <li><a href="#hero" className="text-neutral-400 hover:text-white transition-colors">About</a></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="space-y-4 text-right md:text-right text-sm">
          <p className="text-neutral-400 font-light">UGF-CP-7, Vipul Complex, Faizabad Rd, Lucknow</p>
          <p className="text-white font-medium">+91 522 123 4567</p>
          <div className="flex justify-end pt-4">
            <a href="#" className="text-white hover:text-neutral-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-500 uppercase tracking-widest">
         <p>&copy; 2024 Bikaner Express 24x7. All Rights Reserved.</p>
         <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
