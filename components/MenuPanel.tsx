
import React, { useState } from 'react';
import { FULL_MENU } from '../constants';

const MenuPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(FULL_MENU[0].id);

  const activeCategory = FULL_MENU.find(cat => cat.id === activeTab);

  return (
    <section id="full-menu" className="relative bg-[#051408] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-900/10 rounded-full blur-[100px]" />
      </div>

      <div className={`transition-all duration-1000 ease-in-out ${isOpen ? 'py-20' : 'py-64'}`}>
        {!isOpen ? (
          <div className="max-w-7xl mx-auto px-6 text-center animate-fade-in">
            <div className="mb-12 inline-block">
                <div className="flex items-center space-x-4 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-accent/30"></div>
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.4em]">Curated Collection</span>
                    <div className="h-[1px] w-12 bg-accent/30"></div>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-12 italic">
                    Taste the <span className="text-accent">Excellence</span>
                </h2>
            </div>
            
            <div className="relative inline-block group">
              <button 
                onClick={() => setIsOpen(true)}
                className="relative z-10 px-16 py-6 bg-transparent border border-white/20 text-white text-xs font-bold uppercase tracking-[0.4em] transition-all duration-500 group-hover:bg-accent group-hover:border-accent"
              >
                Explore Menu
              </button>
              <div className="absolute -inset-2 border border-accent/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-6 animate-fade-in">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              
              {/* Sidebar Navigation - Sticky and Compact */}
              <div className="lg:w-1/4 space-y-2 sticky top-24">
                <div className="mb-8">
                  <h3 className="text-2xl font-serif text-white mb-1">Our Menu</h3>
                  <p className="text-accent text-[9px] uppercase tracking-[0.3em] font-bold">Interactive Gastronomy</p>
                  <div className="h-[1px] w-8 bg-accent mt-3"></div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                  {FULL_MENU.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`text-left px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-all border-l-2 ${
                        activeTab === category.id 
                          ? 'border-accent bg-accent/10 text-white' 
                          : 'border-white/5 text-stone-500 hover:text-stone-300 hover:border-white/20'
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-accent/5 border border-accent/20 hidden lg:block">
                   <h4 className="text-accent font-bold uppercase tracking-widest text-[9px] mb-2">In-Store Privilege</h4>
                   <p className="text-white text-base font-serif italic mb-2">Get 10% OFF Dining</p>
                   <p className="text-stone-400 text-[9px] leading-relaxed">Show this page to our server for your discount.</p>
                </div>

                <button 
                  onClick={() => setIsOpen(false)}
                  className="mt-6 text-[9px] text-stone-500 uppercase tracking-widest hover:text-accent transition-colors flex items-center group"
                >
                  <svg className="w-3 h-3 mr-2 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Close Menu
                </button>
              </div>

              {/* Menu Display Area - Optimized for Density */}
              <div className="lg:w-3/4 bg-[#08210c] p-8 lg:p-12 shadow-2xl border border-white/5 relative min-h-[600px]">
                <div className="absolute top-4 right-6 text-white/5 text-5xl font-serif pointer-events-none select-none italic hidden sm:block">
                    {activeCategory?.title}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <h4 className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">Select Offerings</h4>
                    <span className="text-stone-500 text-[9px] uppercase tracking-widest">• All Prices in INR •</span>
                  </div>
                  
                  {/* Two-column grid for menu items to fit one frame */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {activeCategory?.items.map((item, idx) => (
                      <div key={idx} className="group border-b border-white/5 pb-3">
                        <div className="flex justify-between items-end mb-1">
                          <div className="flex items-center space-x-3 overflow-hidden">
                             {item.isSignature && (
                               <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></span>
                             )}
                             <h5 className="text-lg font-serif text-white group-hover:text-accent transition-colors truncate">
                               {item.name}
                             </h5>
                          </div>
                          <div className="text-stone-300 font-serif italic text-base ml-4">
                            ₹{item.price}
                          </div>
                        </div>
                        {item.description && (
                          <p className="text-stone-500 text-[10px] font-light italic pl-4 leading-tight">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {activeTab === 'hungry-hours' && (
                    <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="p-4 bg-white/5 border border-white/5 rounded">
                          <span className="text-accent text-[9px] font-bold uppercase tracking-widest mb-1 block">Flash Deal</span>
                          <p className="text-white font-serif italic text-base">Tea + Samosa @ ₹39</p>
                          <p className="text-stone-500 text-[9px]">8AM - 11:45AM</p>
                       </div>
                       <div className="p-4 bg-white/5 border border-white/5 rounded">
                          <span className="text-accent text-[9px] font-bold uppercase tracking-widest mb-1 block">Midnight Comfort</span>
                          <p className="text-white font-serif italic text-base">Executive Thali @ ₹249</p>
                          <p className="text-stone-500 text-[9px]">9PM - 11PM</p>
                       </div>
                    </div>
                  )}

                  <div className="mt-12 flex items-center space-x-4 opacity-20">
                     <span className="text-[9px] uppercase tracking-widest text-stone-500">Pure Vegetarian</span>
                     <div className="h-[1px] flex-1 bg-white/10"></div>
                     <span className="text-[9px] uppercase tracking-widest text-stone-500">Bikaner Express 24x7</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuPanel;
