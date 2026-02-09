
import React from 'react';
import { FOOD_CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section id="menu" className="py-32 bg-[#fcfaf7] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 mb-4">
            The Gastronomy Collection
          </h2>
          <p className="text-neutral-400 font-light tracking-[0.1em] uppercase text-sm">Seven Pillars of Taste</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {FOOD_CATEGORIES.map((cat, idx) => {
            const span = idx < 3 ? 'md:col-span-4' : 'md:col-span-3';
            return (
              <div key={cat.id} className={`${span} group cursor-pointer`}>
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-neutral-200">
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-[12px] border-white/0 group-hover:border-white/20 transition-all duration-500" />
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-accent text-xs font-bold italic">0{idx + 1}</span>
                    <h3 className="text-lg font-serif text-neutral-900 group-hover:text-accent transition-colors">{cat.name}</h3>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="text-[10px] uppercase tracking-widest font-bold">Discover Selection</span>
                   <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
