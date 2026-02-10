
import React from 'react';

const Promise: React.FC = () => {
  const pillars = [
    { 
      title: 'Open 24x7', 
      desc: 'Dine comfortably, anytime', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: 'Pure Vegetarian', 
      desc: '100% Veg Kitchen', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      title: 'Freshly Prepared', 
      desc: 'No Reheats, No Shortcuts', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      title: 'Comfortable Ambience', 
      desc: 'Relaxed Seating', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      title: 'Trusted Taste', 
      desc: 'Consistent Excellence', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <section id="experience" className="py-40 bg-[#051408] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center group animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
              {/* Refined Circle Icon Container */}
              <div className="relative mb-8 w-20 h-20 flex items-center justify-center rounded-full border border-white/10 group-hover:border-accent/40 transition-all duration-700 bg-white/[0.02]">
                <div className="text-accent transition-transform duration-500 group-hover:scale-110">
                  {pillar.icon}
                </div>
              </div>

              {/* Typography matching reference image */}
              <div className="text-center space-y-3">
                <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.3em]">
                  {pillar.title}
                </h3>
                <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-medium leading-relaxed max-w-[150px] mx-auto">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promise;
