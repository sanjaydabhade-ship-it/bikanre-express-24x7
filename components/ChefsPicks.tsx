
import React from 'react';
import { CHEFS_PICKS } from '../constants';

const ChefsPicks: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
                <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Recommended by the Master</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                    Curated Picks <br /><span className="italic text-white/40 font-light">for the Connoisseur</span>
                </h2>
            </div>
            <div className="h-[1px] flex-1 bg-white/10 hidden md:block mb-6 mx-12"></div>
            <button className="text-xs font-bold uppercase tracking-[0.2em] pb-2 border-b-2 border-accent hover:text-accent transition-colors">
                View All Specials
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {CHEFS_PICKS.map((dish, i) => (
            <div key={dish.id} className="group animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-8 relative overflow-hidden aspect-[3/4] shadow-2xl">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-serif text-white group-hover:text-accent transition-colors">{dish.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {dish.description}
                </p>
                <div className="pt-4 flex items-center space-x-2 text-accent text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span>Chef's Choice</span>
                    <div className="h-[1px] w-4 bg-accent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsPicks;
