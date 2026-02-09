
import React from 'react';

const Promise: React.FC = () => {
  const pillars = [
    { title: 'Open 24x7', desc: 'Dine comfortably, anytime', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Pure Vegetarian', desc: '100% veg kitchen', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
    { title: 'Freshly Prepared', desc: 'No reheats, no shortcuts', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'Comfortable Ambience', desc: 'Relaxed seating', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { title: 'Trusted Taste', desc: 'Consistent excellence', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  return (
    <section id="experience" className="py-32 bg-[#fcfaf7] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="mb-6 p-4 rounded-full border border-accent/20 group-hover:border-accent transition-colors duration-500">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={pillar.icon} />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-neutral-900 mb-3 uppercase tracking-[0.2em]">
                {pillar.title}
              </h3>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-medium uppercase tracking-wider">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promise;
