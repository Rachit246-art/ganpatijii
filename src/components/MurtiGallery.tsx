"use client";

import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';

const murtis = [
  {
    id: 1,
    name: "Eco-Friendly Clay Ganesha",
    category: "100% Biodegradable",
    size: "1.5 Feet to 3 Feet",
    material: "Shaddu Mati (River Clay)",
    image: "https://images.unsplash.com/photo-1609137144814-9d998069696d?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted using pure river clay and organic, non-toxic water-soluble colors. Dissolves completely in water within hours, leaving zero environmental footprint.",
    price: "Eco-Friendly Choice"
  },
  {
    id: 2,
    name: "Traditional Ornate Ganesha",
    category: "Royal & Majestic",
    size: "2 Feet to 4 Feet",
    material: "Premium Clay & Gold Detailing",
    image: "https://images.unsplash.com/photo-1630260579111-799969997c90?auto=format&fit=crop&w=800&q=80",
    description: "Inspired by the iconic Lalbaugcha Raja and Dagdusheth Halwai. Features rich, vibrant hand-painted ornaments, a majestic crown, and traditional saffron robes.",
    price: "Most Popular"
  },
  {
    id: 3,
    name: "Premium Marble Finish Ganesha",
    category: "Everlasting Grace",
    size: "1 Foot to 2.5 Feet",
    material: "Premium Cultured Marble",
    image: "https://images.unsplash.com/photo-1567591910360-697e50743726?auto=format&fit=crop&w=800&q=80",
    description: "An elegant, pristine white marble-look finish with subtle gold leaf highlights. Designed for lifelong devotion in home temples, offices, or as a sacred gift.",
    price: "Exclusive Masterpiece"
  }
];

interface MurtiGalleryProps {
  onSelectMurti: (murtiName: string) => void;
}

export default function MurtiGallery({ onSelectMurti }: MurtiGalleryProps) {
  const [selectedMurti, setSelectedMurti] = useState<typeof murtis[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm block mb-3">Our Three Sacred Creations</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            The Three Divine Types
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 text-lg">
            We specialize exclusively in crafting three premium styles of Ganesha Ji idols. Select your preferred style to book or customize.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {murtis.map((murti) => (
            <div 
              key={murti.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img 
                  src={murti.image} 
                  alt={murti.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button 
                    onClick={() => setSelectedMurti(murti)}
                    className="p-3 rounded-full bg-white text-stone-900 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg"
                    title="View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => onSelectMurti(murti.name)}
                    className="px-4 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-500 transition-all duration-300 font-medium text-sm shadow-lg"
                  >
                    Inquire Now
                  </button>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {murti.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                      {murti.name}
                    </h3>
                  </div>
                  <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100 mb-3">
                    {murti.price}
                  </span>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-3">
                    {murti.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs text-stone-500">
                  <span>Sizes: <strong className="text-stone-800">{murti.size}</strong></span>
                  <span>Material: <strong className="text-stone-800">{murti.material}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedMurti && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-100 animate-in fade-in zoom-in-95 duration-300">
              <div className="relative h-72 sm:h-96">
                <img 
                  src={selectedMurti.image} 
                  alt={selectedMurti.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedMurti(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors text-2xl"
                >
                  &times;
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">{selectedMurti.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">{selectedMurti.name}</h3>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-sm border border-amber-100">
                    {selectedMurti.price}
                  </span>
                </div>

                <p className="text-stone-600 mb-6 leading-relaxed">
                  {selectedMurti.description}
                </p>

                <div className="grid grid-cols-2 gap-4 p-4 bg-stone-50 rounded-xl mb-6 text-sm">
                  <div>
                    <span className="text-stone-400 block">Available Sizes</span>
                    <strong className="text-stone-800 text-base">{selectedMurti.size}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Material Used</span>
                    <strong className="text-stone-800 text-base">{selectedMurti.material}</strong>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      onSelectMurti(selectedMurti.name);
                      setSelectedMurti(null);
                    }}
                    className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-amber-600/20"
                  >
                    Book / Inquire for this Murti
                  </button>
                  <button 
                    onClick={() => setSelectedMurti(null)}
                    className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-xl transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}