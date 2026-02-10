import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* High-end dramatic background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-105 hover:scale-100"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=1920')` }}
      />
      <div className="absolute inset-0 bg-black/80 z-[1]" />
      
      {/* Techie Grid Overlay */}
      <div className="absolute inset-0 z-[2] opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(180,138,77,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(180,138,77,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-6 max-w-7xl pt-24 md:pt-32 flex flex-col items-center">
        {/* Top Accent */}
        <div className="mb-12 inline-flex items-center space-x-6 animate-fade-in">
          <div className="h-[1px] w-12 bg-accent/30"></div>
          <span className="text-accent uppercase tracking-[0.7em] text-[9px] font-extrabold">Lucknow's Premium Choice</span>
          <div className="h-[1px] w-12 bg-accent/30"></div>
        </div>

        {/* Primary Rhyming Line */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-8 animate-fade-in tracking-tight leading-tight" style={{ animationDelay: '0.1s' }}>
          <span className="whitespace-nowrap italic">Pure Veg</span> 
          <span className="mx-4 md:mx-10 text-white/10 font-thin">|</span> 
          <span className="whitespace-nowrap">Pure Lucknow</span>
        </h1>
        
        {/* Secondary Headline */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-xl md:text-3xl text-white/70 font-light tracking-[0.2em] uppercase">
            All-Day Dining. Open 24x7.
          </h2>
        </div>
        
        {/* Tech-styled AI Tagline Box - Now Minimalist Single Line */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative group">
            <div className="absolute -inset-10 bg-accent/5 blur-[100px] opacity-20"></div>
            
            <div className="relative bg-[#051408]/60 backdrop-blur-3xl border border-white/10 px-8 py-5 md:px-16 md:py-6 rounded-none shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
              <p className="text-neutral-300 font-mono text-[10px] md:text-sm tracking-[0.15em] leading-relaxed uppercase whitespace-nowrap">
                Lucknow ka favourite pure veg restaurant 
                <span className="text-accent/60 mx-4 md:mx-6">—</span> 
                <span className="text-white font-bold">ab AI Assistance ke saath.</span>
              </p>

              {/* Minimalist Tech Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/20"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/20"></div>
            </div>
          </div>
        </div>

        {/* Narrative Statement - Adjusted width and spacing to prevent cutting */}
        <div className="max-w-4xl mx-auto mt-6">
          <p className="text-base md:text-xl text-white/40 font-light animate-fade-in leading-relaxed italic tracking-wide" style={{ animationDelay: '0.4s' }}>
            Blending heritage culinary arts with futuristic intelligence. 
            A 24-hour sanctuary where tradition meets technology.
          </p>
        </div>
      </div>

      {/* Subtle Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/5 z-[2] animate-[scan_10s_linear_infinite] pointer-events-none"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce opacity-40">
        <span className="text-[9px] text-white uppercase tracking-[0.6em] mb-6 font-bold">Experience More</span>
        <div className="h-16 w-[1px] bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;