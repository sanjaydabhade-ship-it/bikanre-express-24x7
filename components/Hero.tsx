
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* High-end dramatic background - Real Indian Food Context */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-105 hover:scale-100"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=1920')` }}
      />
      <div className="absolute inset-0 bg-black/60 z-[1]" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-6 inline-flex items-center space-x-4 animate-fade-in">
          <div className="h-[1px] w-8 bg-accent"></div>
          <span className="text-accent uppercase tracking-[0.4em] text-xs font-semibold">Est. 2024</span>
          <div className="h-[1px] w-8 bg-accent"></div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
          All-Day Dining. <span className="italic">Pure Veg.</span><br />Open 24x7.
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 font-light mb-12 tracking-wide max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          From sun-up breakfasts to artisanal late-night cravings. A sanctuary for the modern palate in the heart of the city.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <button className="group relative overflow-hidden w-full sm:w-auto px-12 py-5 bg-accent text-white text-xs font-bold uppercase tracking-[0.2em] transition-all">
            <span className="relative z-10">Book a Table</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <button className="w-full sm:w-auto px-12 py-5 border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-neutral-900 transition-all">
            View Menu
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-[10px] text-white uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="h-10 w-[1px] bg-white/30"></div>
      </div>
    </section>
  );
};

export default Hero;
