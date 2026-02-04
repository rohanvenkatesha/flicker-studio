// import Link from 'next/link';
// import { ArrowLeft, Share2, Heart } from 'lucide-react';
// import { getFilmById } from '@/lib/getFilms';
// import Footer from '@/components/layout/Footer';
// import { notFound } from 'next/navigation';

// type Props = { params: Promise<{ id: string }> };

// export default async function WatchPage({ params }: Props) {
//   const { id } = await params;
//   const film = getFilmById(id);
//   if (!film) notFound();

//   return (
//     <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
//       <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

//       <div className="fixed inset-0 z-[200] bg-black overflow-y-auto animate-in slide-in-from-bottom duration-700">
//         <div className="p-8 flex items-center justify-between sticky top-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/5">
//           <Link
//             href="/"
//             className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all"
//           >
//             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
//               <ArrowLeft size={16} />
//             </div>
//             EXIT SCREENING
//           </Link>
//           <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-white/30">
//             <span>{film.title}</span>
//             <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
//             <span>LIVE FEED</span>
//           </div>
//         </div>

//         <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 space-y-20 pb-40">
//           <div className="relative aspect-video w-full bg-zinc-900 shadow-2xl overflow-hidden group">
//             <iframe
//               src={`https://www.youtube.com/embed/${film.youtubeVideoId}?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1`}
//               className="w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
//               allowFullScreen
//               title={film.title}
//             />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
//             <div className="lg:col-span-2 space-y-12">
//               <div className="space-y-4">
//                 <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">
//                   Visual Composition No. {film.id.split('-')[1] ?? film.id}
//                 </span>
//                 <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">
//                   {film.title}
//                 </h2>
//               </div>
//               <p className="text-white/60 text-xl md:text-3xl leading-relaxed italic font-light">
//                 {film.description}
//               </p>
//             </div>

//             <div className="space-y-12 border-l border-white/5 pl-12">
//               <div className="space-y-1">
//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 block mb-4">
//                   Production Data
//                 </span>
//                 <div className="flex justify-between items-center py-4 border-b border-white/5">
//                   <span className="text-[10px] uppercase tracking-widest text-white/40">
//                     Release Year
//                   </span>
//                   <span className="text-xs font-bold">{film.year}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-4 border-b border-white/5">
//                   <span className="text-[10px] uppercase tracking-widest text-white/40">Language</span>
//                   <span className="text-xs font-bold uppercase tracking-widest">{film.language}</span>
//                 </div>
//               </div>

//               <div className="pt-8 space-y-6">
//                 <button className="w-full py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-colors flex items-center justify-center gap-4">
//                   <Share2 size={16} /> Share Selection
//                 </button>
//                 <button className="w-full py-5 border border-white/10 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-colors flex items-center justify-center gap-4">
//                   <Heart size={16} /> Add to Archive
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// 'use client';

import Link from 'next/link';
import { X, Share2, Heart, Volume2, Maximize, Globe, Star } from 'lucide-react';
import { getFilmById } from '@/lib/getFilmById';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar'; // Assuming your path
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ id: string }> };

export default async function WatchPage({ params }: Props) {
  const { id } = await params;
  const film = getFilmById(id);
  if (!film) notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
      {/* 1. Standard NavBar */}
      <NavBar />

      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="relative pt-24 md:pt-32 px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto">
          
          {/* 2. Enhanced Header Area with Exit Button */}
          <div className="flex justify-between items-end mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Live Screening</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/80">{film.title}</h2>
            </div>

            <Link
              href="/"
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 pl-4 pr-2 py-2 rounded-full transition-all"
            >
              <span className="text-[9px] font-black tracking-widest text-white/60 group-hover:text-white uppercase transition-colors">
                Exit Screening
              </span>
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <X size={14} strokeWidth={3} />
              </div>
            </Link>
          </div>

          {/* 3. Video Player */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl ring-1 ring-white/10">
            <iframe
              src={`https://www.youtube.com/embed/${film.youtubeVideoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
              className="w-full h-full"
              allowFullScreen
              title={film.title}
            />
          </div>

          {/* 4. Action Row (Wishlist/Share/Stats) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 md:py-12 border-b border-white/10">
            <div className="flex flex-row gap-3">
              <button className="flex-1 md:flex-none px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3">
                <Heart size={14} fill="black" /> Wishlist
              </button>
              <button className="px-6 py-4 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                <Share2 size={14} />
              </button>
            </div>
            
            <div className="flex items-center justify-between md:justify-end gap-8 text-white/30">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[7px] uppercase tracking-widest mb-1">Runtime</span>
                    <span className="text-sm font-bold text-white">{film.duration}m</span>
                </div>
                <div className="h-8 w-px bg-white/5 hidden md:block" />
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[7px] uppercase tracking-widest mb-1">Genre</span>
                    <span className="text-sm font-bold text-white uppercase">{film.genre}</span>
                </div>
                <div className="h-8 w-px bg-white/5 hidden md:block" />
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[7px] uppercase tracking-widest mb-1">Rating</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1">★ {film.rating}</span>
                </div>
            </div>
          </div>

          {/* 5. Main Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 py-12 md:py-24">
            <div className="lg:col-span-8 space-y-10">
              <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-[0.9] break-words">
                {film.title}
              </h1>
              <p className="text-white/60 text-xl md:text-3xl leading-relaxed max-w-4xl font-light italic">
                {film.description}
              </p>

              {/* Cast/Crew Row */}
              <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-10 border-t border-white/5">
                <div className="space-y-2">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">Directed By</span>
                  <p className="text-sm md:text-lg font-bold">Anand K. Shrivastav</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">Cinematography</span>
                  <p className="text-sm md:text-lg font-bold">Raya Santhanam</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">Original Score</span>
                  <p className="text-sm md:text-lg font-bold">Karthik Iyer</p>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div className="space-y-8 p-8 border border-white/5 rounded-2xl bg-white/[0.02]">
                  <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40 border-b border-white/5 pb-4">Film Specs</h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center group">
                      <div className="flex items-center gap-3 text-white/30 group-hover:text-white/60 transition-colors">
                          <Volume2 size={14} />
                          <span className="text-[9px] uppercase tracking-widest">Audio Master</span>
                      </div>
                      <span className="text-[10px] font-bold">DOLBY ATMOS</span>
                    </div>

                    <div className="flex justify-between items-center group">
                      <div className="flex items-center gap-3 text-white/30 group-hover:text-white/60 transition-colors">
                          <Maximize size={14} />
                          <span className="text-[9px] uppercase tracking-widest">Aspect Ratio</span>
                      </div>
                      <span className="text-[10px] font-bold">2.39:1</span>
                    </div>

                    <div className="flex justify-between items-center group">
                      <div className="flex items-center gap-3 text-white/30 group-hover:text-white/60 transition-colors">
                          <Globe size={14} />
                          <span className="text-[9px] uppercase tracking-widest">Orig. Audio</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase">{film.language}</span>
                    </div>
                  </div>

                  {/* External Audio Links */}
                  <div className="pt-6 flex gap-4">
                     <button className="flex-1 bg-white/5 hover:bg-white/10 py-4 rounded-xl border border-white/5 transition-all flex justify-center items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" className="w-5 h-5 opacity-40 invert" alt="Spotify" />
                     </button>
                     <button className="flex-1 bg-white/5 hover:bg-white/10 py-4 rounded-xl border border-white/5 transition-all flex justify-center items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="w-5 h-5 opacity-40 invert" alt="Apple Music" />
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}