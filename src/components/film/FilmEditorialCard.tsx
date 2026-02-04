'use client';

import Link from 'next/link';
import { Play } from 'lucide-react';
import type { Film } from '@/types';

type FilmEditorialCardProps = {
  film: Film;
  large?: boolean;
};

export default function FilmEditorialCard({ film, large = false }: FilmEditorialCardProps) {
  const posterOrBanner = large ? (film.banner ?? film.poster) : film.poster;

  return (
    <Link
      href={`/watch/${film.id}`}
      className={`group cursor-pointer relative overflow-hidden bg-zinc-900 border border-white/5 block ${
        large ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div
        className={`relative aspect-square md:aspect-auto ${
          large ? 'h-full' : 'h-[400px] md:h-[500px]'
        }`}
      >
        <img
          src={posterOrBanner}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          alt={film.title}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
          <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-700 space-y-4">
            <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-white/60">
              <span>{film.genre ?? film.genres?.[0]}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{typeof film.duration === 'number' ? film.duration : film.duration} MIN</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
              {film.title}
            </h3>
            <p className="text-white/60 text-sm italic line-clamp-2 max-w-sm">{film.description}</p>
            <div className="pt-4 flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em]">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Play size={14} className="text-black fill-black ml-0.5" />
              </div>
              <span>Play Now</span>
            </div>
          </div>
        </div>
      </div>
      {!large && (
        <div className="absolute top-6 left-6 z-10 opacity-100 group-hover:opacity-0 transition-opacity">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1 text-[9px] font-bold uppercase tracking-widest">
            {film.year}
          </div>
        </div>
      )}
    </Link>
  );
}
