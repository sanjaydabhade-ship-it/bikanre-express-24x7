
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-40 bg-[#fcfaf7] px-6 overflow-hidden relative border-t border-accent/10">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="text-[20vw] font-serif font-bold absolute -bottom-20 -left-10 select-none">Heritage</span>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Side: The Story */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Our Legacy</span>
              <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 leading-tight">
                The Spirit of <br /><span className="italic text-accent">Bikaner</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              <p>
                Bikaner Express 24x7 wasn't born from a business plan, but from a profound respect for the artisanal traditions of pure vegetarian cuisine. What started as a singular commitment to authentic flavors has evolved into a sanctuary for diners who seek excellence at any hour.
              </p>
              <p>
                The journey from a local favorite to a burgeoning multi-outlet brand is a testament to the meticulous standards set by our leadership. Every recipe in our kitchen carries the weight of history, refined for the modern palate without losing its soul.
              </p>
            </div>

            <div className="flex items-center space-x-6 pt-4">
               <div className="h-[1px] w-12 bg-accent"></div>
               <span className="text-neutral-900 text-xs font-bold uppercase tracking-widest">Est. 2024 &bull; Lucknow</span>
            </div>
          </div>

          {/* Right Side: The Owner's Vision */}
          <div className="lg:col-span-5 bg-white p-12 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl font-serif text-neutral-900 italic">A Visionary's Pursuit</h3>
              
              <p className="text-sm text-neutral-500 leading-relaxed italic border-l-2 border-accent/30 pl-6">
                "True hospitality is not measured by the clock, but by the consistency of the experience. My goal was never just to open a restaurant, but to build a brand where 'Pure Veg' and 'Premium Quality' are synonymous, 24 hours a day, 7 days a week."
              </p>
              
              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">The Leadership Role</p>
                <div className="h-[1px] w-full bg-neutral-100 my-4"></div>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  Our owner personally oversees the curation of every outlet, ensuring that the "Bikaner Express Promise" of 100% fresh, never-reheated meals is upheld. It is this hands-on dedication to brand-building that ensures our future expansion is built on a foundation of absolute trust.
                </p>
              </div>

              <div className="pt-6">
                <span className="font-serif text-3xl text-neutral-300 opacity-50 select-none">— Our Founder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Three Pillars for scalability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-32 border-t border-neutral-100 pt-16">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Consistency First</h4>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">Preserving heirloom recipes with industrial precision to ensure the same taste across all future locations.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">All-Day Philosophy</h4>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">Designing environments that adapt to the guest's needs, whether it's a 7 AM breakfast or a 3 AM comfort meal.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Built to Scale</h4>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">A premium-casual framework ready to bring the authentic Bikaner experience to new neighborhoods.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
