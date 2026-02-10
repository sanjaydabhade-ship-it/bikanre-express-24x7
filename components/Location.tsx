
import React from 'react';

const Location: React.FC = () => {
  // Encoded address for the map
  const address = "UGF-CP-7, Vipul Complex, Faizabad Road, Gomti Nagar, Lucknow, Uttar Pradesh 226010";
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY || ''}&q=${encodeURIComponent(address)}&zoom=15`;
  
  // Note: Since we don't have a specific API key for the static embed without billing, 
  // we use the standard iframe embed approach which is more reliable for public sites.
  const standardEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.980644342416!2d81.01833447614044!3d26.872336361848525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be26458569801%3A0x7d6a5c3785293d9a!2sVipul%20Complex!5e0!3m2!1sen!2sin!4v1710345678901!5m2!1sen!2sin";

  return (
    <section id="locations" className="py-32 bg-[#08210c] px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-12">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Visit Us</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight italic">Find the Flavour</h2>
            </div>
            
            <div className="space-y-1 pt-6 border-t border-white/5">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">Our Address</h4>
              <p className="text-stone-300 font-light leading-relaxed text-lg">
                UGF-CP-7, Vipul Complex, Faizabad Road,<br />
                Vijayendra Khand, Gomti Nagar,<br />
                Lucknow, Uttar Pradesh 226010
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">Availability</h4>
              <p className="text-white font-medium text-xl">Open 24x7</p>
              <p className="text-stone-500 font-light">Dine-in and Takeaway available all day</p>
            </div>

            <div className="space-y-1 pt-4">
               <p className="text-xs text-accent/50 font-light italic">Adjacent to Chandan Hospital</p>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-8 h-[600px] bg-[#051408] shadow-2xl relative overflow-hidden group border border-white/5 flex flex-col">
             {/* Map Container */}
             <div className="flex-1 relative overflow-hidden">
                {/* Custom Styling Overlay to darken standard Google Maps */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-[#051408]/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
                
                <iframe 
                  src={standardEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{ 
                    border: 0, 
                    filter: 'grayscale(1) invert(0.92) contrast(1.2) brightness(0.85) hue-rotate(80deg)',
                  }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bikaner Express Location"
                  className="absolute inset-0 transition-all duration-1000"
                ></iframe>
             </div>

             {/* Directions Bar matching the visual provided */}
             <div className="bg-[#051408] p-8 border-t border-white/5 z-20">
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center group/btn"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white group-hover/btn:text-accent transition-colors">Get Directions</span>
                    <div className="h-[1px] flex-1 bg-white/10 mx-8"></div>
                    <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center group-hover/btn:border-accent transition-all">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
