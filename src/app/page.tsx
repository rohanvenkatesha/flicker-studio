import { Volume2 } from 'lucide-react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FilmSections from '@/components/home/FilmSections';
import { getFeaturedFilms } from '@/lib/getFilms';

export default function Home() {
  const featuredFilms = getFeaturedFilms();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <NavBar />

      <main className="animate-in fade-in duration-700">
        <Hero featuredFilms={featuredFilms} />

        <FilmSections />

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
