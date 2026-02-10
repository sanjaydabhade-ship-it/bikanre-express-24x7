
import React, { useState } from 'react';
import { REVIEWS } from '../constants';

const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState(REVIEWS);
  const [isRecording, setIsRecording] = useState(false);
  const [formData, setFormData] = useState({ name: '', comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    const newReview = {
      id: `rev-${Date.now()}`,
      name: formData.name,
      comment: formData.comment,
      images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400'], // Placeholder for user image
      date: 'Just now'
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: '', comment: '' });
    setIsRecording(false);
  };

  return (
    <section className="py-32 bg-[#08210c] px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Guest Journal</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white italic">Shared Experiences</h2>
            <p className="text-stone-400 mt-6 font-light leading-relaxed">
              Every visit is a new chapter. We cherish the moments shared by our guests across all hours of the day.
            </p>
          </div>
          <button 
            onClick={() => setIsRecording(true)}
            className="px-10 py-4 border border-accent/40 text-accent text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500"
          >
            Record Your View
          </button>
        </div>

        {/* Recording Form Overlay/Panel */}
        {isRecording && (
          <div className="mb-20 animate-fade-in">
            <div className="bg-[#051408] border border-accent/20 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <button onClick={() => setIsRecording(false)} className="text-stone-500 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="max-w-2xl mx-auto text-center space-y-10">
                <h3 className="text-3xl font-serif text-white">Share Your Story</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Your Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Your Experience</label>
                    <textarea 
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent outline-none transition-colors resize-none"
                      placeholder="Describe your dining moment..."
                    />
                  </div>
                  <div className="pt-6">
                    <div className="aspect-video w-48 bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:border-accent transition-colors mx-auto group">
                      <svg className="w-6 h-6 text-stone-500 group-hover:text-accent mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Add Picture</span>
                    </div>
                  </div>
                  <div className="pt-8">
                    <button type="submit" className="px-16 py-5 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all">
                      Submit to Journal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((rev) => (
            <div key={rev.id} className="group animate-fade-in border-l border-white/5 pl-8 space-y-6">
              <div className="space-y-1">
                <span className="text-accent text-[9px] font-bold uppercase tracking-[0.2em]">{rev.date}</span>
                <h4 className="text-2xl font-serif text-white">{rev.name}</h4>
              </div>
              <p className="text-stone-400 font-light leading-relaxed italic">
                "{rev.comment}"
              </p>
              {rev.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {rev.images.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden bg-[#051408] border border-white/5">
                      <img 
                        src={img} 
                        alt="Guest experience" 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
