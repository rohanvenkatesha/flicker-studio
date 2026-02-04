'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import FilmEditorialCard from '@/components/film/FilmEditorialCard';
import { getAllFilms } from '@/lib/getFilms';
import { FILTER_OPTIONS } from '@/lib/filterOptions';
import type { Film } from '@/types';

function filterAndSort(
  films: Film[],
  genre: string,
  language: string,
  duration: string,
  mood: string,
  sortBy: string
): Film[] {
  let results = films.filter((film) => {
    const genreVal = film.genre ?? film.genres?.[0];
    const matchesGenre = genre === 'All' || genreVal === genre;
    const matchesLanguage = language === 'All' || film.language === language;
    const moods = film.moods ?? [];
    const matchesMood = mood === 'All' || moods.includes(mood);

    let matchesDuration = true;
    const dur = typeof film.duration === 'number' ? film.duration : parseInt(String(film.duration), 10) || 0;
    if (duration === 'Under 5 min') matchesDuration = dur < 5;
    else if (duration === '5–10 min') matchesDuration = dur >= 5 && dur <= 10;
    else if (duration === '10+ min') matchesDuration = dur > 10;

    return matchesGenre && matchesLanguage && matchesMood && matchesDuration;
  });

  results = [...results].sort((a, b) => {
    switch (sortBy) {
      case 'Newest':
        return b.year - a.year;
      case 'Most Watched':
        return Number(b.views) - Number(a.views);
      case 'Highest Rated':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return results;
}

export default function BrowsePage() {
  const films = getAllFilms();
  const [genre, setGenre] = useState('All');
  const [language, setLanguage] = useState('All');
  const [duration, setDuration] = useState('All');
  const [mood, setMood] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const filteredAndSortedFilms = useMemo(
    () => filterAndSort(films, genre, language, duration, mood, sortBy),
    [films, genre, language, duration, mood, sortBy]
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <NavBar />

      <main className="pt-40 pb-0 px-6 md:px-12 max-w-[1800px] mx-auto animate-in fade-in duration-500">
        <header className="mb-24 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-white/30">
                Vault Exploration
              </span>
              <h2 className="text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter leading-none">
                THE VAULT
                {/* <span className="text-transparent stroke-white stroke-1 opacity-20"></span> */}
              </h2>
            </div>
            <div className="w-full md:max-w-md border-b border-white/20 flex items-center py-4">
              <Search className="text-white/20 mr-4" size={20} />
              <input
                type="text"
                placeholder="QUERY THE INDEX..."
                className="w-full bg-transparent text-[11px] font-bold uppercase tracking-widest outline-none placeholder:text-white/10"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 border-y border-white/5 py-12">
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                Genre
              </label>
              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="w-full bg-transparent border border-white/10 rounded-none py-3 px-4 text-[10px] font-black uppercase tracking-widest outline-none hover:border-white/40 appearance-none transition-colors"
              >
                {FILTER_OPTIONS.genres.map((opt) => (
                  <option key={opt} value={opt} className="bg-zinc-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-transparent border border-white/10 rounded-none py-3 px-4 text-[10px] font-black uppercase tracking-widest outline-none hover:border-white/40 appearance-none transition-colors"
              >
                {FILTER_OPTIONS.languages.map((opt) => (
                  <option key={opt} value={opt} className="bg-zinc-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-transparent border border-white/10 rounded-none py-3 px-4 text-[10px] font-black uppercase tracking-widest outline-none hover:border-white/40 appearance-none transition-colors"
              >
                {FILTER_OPTIONS.durations.map((opt) => (
                  <option key={opt} value={opt} className="bg-zinc-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                Mood
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full bg-transparent border border-white/10 rounded-none py-3 px-4 text-[10px] font-black uppercase tracking-widest outline-none hover:border-white/40 appearance-none transition-colors"
              >
                {FILTER_OPTIONS.moods.map((opt) => (
                  <option key={opt} value={opt} className="bg-zinc-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                Sort
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white text-black border-none rounded-none py-3 px-4 text-[10px] font-black uppercase tracking-widest outline-none appearance-none font-bold"
              >
                {FILTER_OPTIONS.sorts.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-16 px-6 md:px-12 pb-32">
  {filteredAndSortedFilms.map((film) => (
    <FilmEditorialCard key={film.id} film={film} />
  ))}
</div>

        <Footer />
      </main>
    </div>
  );
}
