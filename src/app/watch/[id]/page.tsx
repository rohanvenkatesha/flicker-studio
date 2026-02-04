import Link from 'next/link';
import { ArrowLeft, Share2, Heart } from 'lucide-react';
import { getFilmById } from '@/lib/getFilmById';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ id: string }> };

export default async function WatchPage({ params }: Props) {
  const { id } = await params;
  const film = getFilmById(id);
  if (!film) notFound();

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="fixed inset-0 z-[200] bg-black overflow-y-auto animate-in slide-in-from-bottom duration-700">
        <div className="p-8 flex items-center justify-between sticky top-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/5">
          <Link
            href="/"
            className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
              <ArrowLeft size={16} />
            </div>
            EXIT SCREENING
          </Link>
          <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-white/30">
            <span>{film.title}</span>
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>LIVE FEED</span>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 space-y-20 pb-40">
          <div className="relative aspect-video w-full bg-zinc-900 shadow-2xl overflow-hidden group">
            <iframe
              src={`https://www.youtube.com/embed/${film.youtubeVideoId}?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1`}
              className="w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
              allowFullScreen
              title={film.title}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">
                  Visual Composition No. {film.id.split('-')[1] ?? film.id}
                </span>
                <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">
                  {film.title}
                </h2>
              </div>
              <p className="text-white/60 text-xl md:text-3xl leading-relaxed italic font-light">
                {film.description}
              </p>
            </div>

            <div className="space-y-12 border-l border-white/5 pl-12">
              <div className="space-y-1">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 block mb-4">
                  Production Data
                </span>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-white/40">
                    Release Year
                  </span>
                  <span className="text-xs font-bold">{film.year}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Language</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{film.language}</span>
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <button className="w-full py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-colors flex items-center justify-center gap-4">
                  <Share2 size={16} /> Share Selection
                </button>
                <button className="w-full py-5 border border-white/10 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-colors flex items-center justify-center gap-4">
                  <Heart size={16} /> Add to Archive
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
