import Link from 'next/link';
import { ChevronRight, Volume2 } from 'lucide-react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FilmEditorialCard from '@/components/film/FilmEditorialCard';
import { getAllFilms, getFeaturedFilms } from '@/lib/getFilms';

export default function Home() {
  const films = getAllFilms();
  const featuredFilms = getFeaturedFilms();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <NavBar />

      <main className="animate-in fade-in duration-700">
        <Hero featuredFilms={featuredFilms} />

        <section className="py-40 px-6 md:px-12 max-w-[1800px] mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/5 pb-16">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
                Curated Series
              </span>
              <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                THE <br />
                ARCHIVE
              </h2>
            </div>
            <div className="max-w-sm text-right space-y-6">
              <p className="text-white/40 italic text-sm leading-relaxed">
                Our selection is updated every midnight. Discover hand-picked visions from the global
                underground.
              </p>
              <Link
                href="/browse"
                className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] ml-auto w-fit"
              >
                View Complete Index
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ChevronRight size={14} />
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[400px]">
            {films.map((film, idx) => (
              <FilmEditorialCard key={film.id} film={film} large={idx === 0} />
            ))}
          </div>
        </section>

        <section className="py-40 bg-zinc-900/30">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                  JOIN THE <br />
                  COLLECTIVE
                </h2>
                <p className="text-white/40 text-xl italic max-w-md leading-relaxed">
                  Subscribers get exclusive access to filmmaker Q&As, behind-the-scenes assets, and
                  private screenings.
                </p>
                <div className="flex gap-8">
                  <button className="bg-white text-black px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-colors">
                    Start Subscription
                  </button>
                  <button className="border border-white/10 px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-colors">
                    Gift a Pass
                  </button>
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden grayscale group">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Cinema"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <Volume2 size={24} className="text-white opacity-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
