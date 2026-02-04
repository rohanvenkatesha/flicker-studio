'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Film } from '@/types';

type HeroProps = {
  featuredFilms: Film[];
};

export default function Hero({ featuredFilms }: HeroProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning || featuredFilms.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredFilms.length);
      setIsTransitioning(false);
    }, 400);
  }, [featuredFilms.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning || featuredFilms.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + featuredFilms.length) % featuredFilms.length);
      setIsTransitioning(false);
    }, 400);
  }, [featuredFilms.length, isTransitioning]);

  useEffect(() => {
    if (featuredFilms.length === 0) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide, featuredFilms.length]);

  const currentFilm = featuredFilms[currentIndex];
  if (!currentFilm) return null;

  const handleWatch = () => {
    router.push(`/watch/${currentFilm.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center overflow-hidden bg-[#050505]">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {featuredFilms.map((film, index) => (
          <div
            key={film.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={film.banner ?? film.poster}
              className="w-full h-full object-cover grayscale scale-110 animate-slow-zoom"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Main Visual Slot */}
          <div className="hidden md:block w-1/3 aspect-[3/4] max-w-[420px] relative group overflow-hidden">
            <div
              className={`w-full h-full transition-all duration-700 transform ${
                isTransitioning ? 'scale-95 opacity-0 -translate-x-10' : 'scale-100 opacity-100 translate-x-0'
              }`}
            >
              <div className="absolute inset-0 bg-white/5 border border-white/10 -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
              <img
                src={currentFilm.poster}
                className="w-full h-full object-cover grayscale relative z-10 shadow-2xl"
                alt=""
              />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <span className="text-[14rem] font-black italic uppercase leading-none text-transparent stroke-white stroke-1 opacity-10 block origin-center -rotate-90">
                FEATURE
              </span>
            </div>
          </div>

          {/* Text content Slot */}
          <div className="flex-1 space-y-10">
            <div
              className={`space-y-6 transition-all duration-700 delay-100 ${
                isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="flex items-center gap-6">
                <span className="w-12 h-[1px] bg-white/20" />
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40">
                  Premiere Selection • Vol. {currentIndex + 1}
                </span>
              </div>
              <h1 className="text-6xl md:text-[8vw] font-black italic uppercase tracking-tighter leading-[0.85] mix-blend-difference">
                {currentFilm.title.split(' ')[0]} <br />
                <span className="text-transparent stroke-white stroke-1">
                  {currentFilm.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </div>

            <div
              className={`flex flex-col md:flex-row gap-12 items-start md:items-center transition-all duration-700 delay-200 ${
                isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
            >
              <p className="text-white/40 text-lg md:text-xl max-w-md font-light italic leading-relaxed">
                {currentFilm.description}
              </p>
              <div className="space-y-4 border-l border-white/10 pl-8">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-white/30">Category</span>
                  <span className="text-sm font-bold uppercase tracking-widest">
                    {currentFilm.genre ?? currentFilm.genres?.[0]}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-white/30">Language</span>
                  <span className="text-sm font-bold uppercase tracking-widest">{currentFilm.language}</span>
                </div>
              </div>
            </div>

            <div
              className={`flex items-center gap-12 pt-4 transition-all duration-700 delay-300 ${
                isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
            >
              <button
                onClick={handleWatch}
                className="group flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.3em] transition-all"
              >
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                  <Play size={24} className="text-white group-hover:text-black fill-current ml-1" />
                </div>
                <span>Begin Experience</span>
              </button>
              <button className="text-[11px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all underline underline-offset-8 decoration-white/20">
                Read Dossier
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Navigation & Indicators */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex items-center gap-12">
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="flex gap-1 items-end">
              <span className="text-3xl font-black italic leading-none">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-white/20 font-bold mb-1">
                / {String(featuredFilms.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-[600px]">
            {featuredFilms.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="h-[2px] flex-1 bg-white/10 relative cursor-pointer group"
              >
                <div
                  className={`absolute inset-0 bg-white transition-all duration-300 ${
                    idx === currentIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                  }`}
                />
                {idx === currentIndex && (
                  <div className="absolute inset-0 bg-white origin-left animate-banner-progress" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Indicator */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8">
        <span className="text-[9px] font-bold uppercase tracking-[0.5em] rotate-90 origin-center text-white/20 whitespace-nowrap">
          Archives of 2024
        </span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
