
import React, { useState } from 'react';
import { TIME_SLOTS } from '../constants';

const DiningByTime: React.FC = () => {
  const [activeSlot, setActiveSlot] = useState(TIME_SLOTS[0]);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block">The Full Cycle</span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
            Dining by Time of Day
          </h2>
          <div className="h-[1px] w-20 bg-accent mx-auto mt-8"></div>
        </div>

        {/* Timeline Navigation - Premium Style */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-0 border-b border-neutral-100 mb-20">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot.id}
              onClick={() => setActiveSlot(slot)}
              className={`relative px-8 py-6 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 ${
                activeSlot.id === slot.id
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {slot.title}
              {activeSlot.id === slot.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent animate-fade-in" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area - Restaurant Menu Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-neutral-100 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                key={`${activeSlot.id}-img`}
                src={activeSlot.image} 
                alt={activeSlot.title}
                className="w-full h-full object-cover animate-fade-in transition-transform duration-[2s] scale-100 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="animate-fade-in p-8" key={activeSlot.id}>
            <div className="inline-block px-4 py-1 border border-accent/20 rounded-full mb-6">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Selected Curations</span>
            </div>
            <h3 className="text-5xl font-serif text-neutral-900 mb-6 italic">{activeSlot.title}</h3>
            <p className="text-neutral-500 mb-12 font-light text-lg leading-relaxed border-l-2 border-accent/20 pl-8">
                {activeSlot.description}
            </p>
            
            <div className="space-y-8">
              {activeSlot.dishes.map((dish, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xl font-serif text-neutral-800 group-hover:text-accent transition-colors">{dish}</span>
                    <div className="flex-1 border-b border-dotted border-neutral-200 mx-4 mb-1"></div>
                    <span className="text-accent font-serif italic">Signature</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningByTime;
