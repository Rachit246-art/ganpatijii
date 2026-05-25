"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1609137144814-9d998069696d?auto=format&fit=crop&w=1920&q=80",
    tagline: "100% Natural & Biodegradable",
    title: "Eco-Friendly Clay Ganesha",
    description: "Crafted with pure Shaddu Mati (river clay) and organic water-soluble colors. Celebrate Ganeshotsav responsibly with home immersion.",
    cta: "Book Clay Murti"
  },
  {
    image: "https://images.unsplash.com/photo-1630260579111-799969997c90?auto=format&fit=crop&w=1920&q=80",
    tagline: "Majestic & Traditional Designs",
    title: "Traditional Ornate Ganesha",
    description: "Inspired by the legendary Lalbaugcha Raja and Dagdusheth Halwai. Adorned with intricate hand-painted ornaments and a royal crown.",
    cta: "Book Ornate Murti"
  },
  {
    image: "https://images.unsplash.com/photo-1567591910360-697e50743726?auto=format&fit=crop&w=1920&q=80",
    tagline: "Elegant & Everlasting Grace",
    title: "Premium Marble Finish Ganesha",
    description: "Exquisite white marble-look finish with subtle gold leaf detailing. Perfect for home temples, offices, and lifelong devotion.",
    cta: "Book Marble Murti"
  }
];

interface HeroCarouselProps {
  onCtaClick: (sectionId: string) => void;
}

export default function HeroCarousel({ onCtaClick }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-stone-950">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Premium Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[6000ms] ease-out"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === current ? 'scale(1)' : 'scale(1.05)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-stone-950" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-20">
            <div className="max-w-3xl space-y-6 transform translate-y-0 transition-all duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium tracking-wider uppercase animate-pulse">
                <Sparkles className="w-4 h-4" />
                {slide.tagline}
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-stone-100 tracking-tight leading-none">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={word === "Ganesha" || word === "Ornate" || word === "Clay" || word === "Marble" ? "text-amber-500 block sm:inline" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
                {slide.description}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onCtaClick('inquiry')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-full shadow-lg shadow-orange-950/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {slide.cta}
                </button>
                <button
                  onClick={() => onCtaClick('gallery')}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  View 3 Types
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-amber-600/80 text-white border border-white/10 backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-amber-600/80 text-white border border-white/10 backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === current ? 'w-8 bg-amber-500' : 'w-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}