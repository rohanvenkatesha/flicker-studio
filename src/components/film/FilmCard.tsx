'use client';

import Link from 'next/link';
import { Play } from 'lucide-react';
import type { Film } from '@/types';

type FilmCardProps = {
  film: Film;
};

function formatDuration(d: number | string): string {
  return typeof d === 'number' ? `${d}m` : d;
}

export default function FilmCard({ film }: FilmCardProps) {
  const duration = formatDuration(film.duration);
  const genre = film.genre ?? film.genres?.[0] ?? '';

  return (
    <Link href={`/watch/${film.id}`} className="group cursor-pointer space-y-5 block animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="aspect-[16/10] rounded-[2rem] overflow-hidden relative border border-white/5 bg-zinc-900">
        <img
          src={film.poster}
          alt={film.title}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
          <div className="bg-white text-black p-4 rounded-full shadow-2xl">
            <Play className="w-4 h-4 fill-current" />
          </div>
        </div>
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="bg-black/50 backdrop-blur-md text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
            {duration}
          </span>
        </div>
      </div>
      <div className="px-2">
        <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">{genre} • {film.language}</p>
        <h4 className="text-xl font-black italic uppercase tracking-tighter text-white group-hover:text-white/80 transition-colors">{film.title}</h4>
      </div>
    </Link>
  );
}
