import React from 'react';

const Ambience: React.FC = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800', span: 'md:col-span-4 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', span: 'md:col-span-4 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800', span: 'md:col-span-4 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200', span: 'md:col-span-8 md:row-span-1' },
  ];

  return (
    <section className="py-24 bg-[#051408] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`${img.span} overflow-hidden bg-[#08210c] aspect-video md:aspect-auto border border-white/5`}
            >
              <img 
                src={img.src} 
                alt="Ambience" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambience;