
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-stone-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-4xl font-serif text-neutral-900 leading-tight">Visit Us</h2>
            
            <div className="space-y-1">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-900 mb-4">Our Address</h4>
              <p className="text-neutral-600 font-light leading-relaxed">
                UGF-CP-7, Vipul Complex, Faizabad Road,<br />
                Vijayendra Khand, Gomti Nagar,<br />
                Lucknow, Uttar Pradesh 226010
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-900 mb-4">Availability</h4>
              <p className="text-neutral-900 font-medium">Open 24x7</p>
              <p className="text-neutral-600 font-light">Dine-in and Takeaway available all day</p>
            </div>

            <div className="space-y-1 pt-4">
               <p className="text-sm text-neutral-400 font-light italic">Adjacent to Chandan Hospital</p>
            </div>
          </div>

          <div className="lg:col-span-8 h-[450px] bg-neutral-200 shadow-inner relative overflow-hidden grayscale">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center text-neutral-400 uppercase tracking-[0.2em] text-sm">
                Interactive Map Placeholder
             </div>
             <div 
                className="w-full h-full bg-cover bg-center opacity-30" 
                style={{ backgroundImage: `url('https://picsum.photos/seed/map/1200/800')` }}
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
