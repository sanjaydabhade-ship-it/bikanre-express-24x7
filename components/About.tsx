
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-[#051408] px-6 overflow-hidden relative border-t border-white/5">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.01] overflow-hidden">
        <span className="text-[25vw] font-serif font-bold absolute -bottom-20 -right-20 select-none text-white leading-none uppercase">Vision</span>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Side: Founders Visuals */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-[#08210c] border border-white/5 relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-end justify-center pb-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">Preeti Sharma</span>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center text-stone-700/30 text-[9px] uppercase tracking-widest font-bold group-hover:hidden">Preeti Sharma</div>
                 <img 
                    src="https://i.ibb.co/JF5V88C1/image.jpg" 
                    alt="Preeti Sharma" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                 />
              </div>
              <div className="h-20 border-l border-accent/30 ml-auto mr-0 w-px hidden md:block"></div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="h-20 border-l border-accent/30 w-px hidden md:block"></div>
              <div className="aspect-[3/4] bg-[#08210c] border border-white/5 relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-end justify-center pb-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">Aarti Thakur</span>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center text-stone-700/30 text-[9px] uppercase tracking-widest font-bold group-hover:hidden">Aarti Thakur</div>
                 <img 
                    src="https://i.ibb.co/fdkgTgPy/image.jpg" 
                    alt="Aarti Thakur" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                 />
              </div>
            </div>
          </div>

          {/* Right Side: The Narrative */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block">The Story Behind the Brand</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                Two Minds. One Commitment. <br /><span className="italic text-accent">Purely Bikaner.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-stone-400 font-light leading-relaxed max-w-2xl">
              <p>
                The game changed when <span className="text-white font-medium italic">Preeti Sharma</span> and <span className="text-white font-medium italic">Aarti Thakur</span> decided that "Pure Veg" dining didn't have to be predictable, and "24x7" didn't have to sacrifice elegance. Recognizing a void in the market for premium, all-day vegetarian sanctuaries, they combined traditional heritage with modern aesthetics.
              </p>
              <p>
                Their vision was simple yet radical: To create a brand where consistency is the primary ingredient. Whether it's our first outlet or our fiftieth, the "Bikaner Express Promise" ensures that every guest receives the same artisanal quality, regardless of the hour. 
              </p>
            </div>

            <div className="py-8 px-10 bg-[#08210c] border-l-4 border-accent relative">
               <p className="text-2xl font-serif text-white italic leading-relaxed">
                 "Excellence is not a destination, but a standard we uphold every single minute of the 24-hour cycle. We aren't just serving food; we are building a legacy of trust."
               </p>
               <span className="mt-4 block text-[10px] text-accent uppercase tracking-[0.3em] font-bold">— Preeti Sharma & Aarti Thakur</span>
            </div>

            {/* Strategic Pillars for Scalability */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/5">
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">Consistency First</h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">Standardizing taste to ensure every future location mirrors our original excellence.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">All-Day Philosophy</h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">Designing environments that adapt—from vibrant breakfasts to soulful midnight meals.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">Built to Scale</h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">A refined premium-casual framework ready to travel to new cities and hearts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
