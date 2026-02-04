import { ShieldCheck, Info } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="py-48 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.02] -skew-y-3 translate-y-20 pointer-events-none" />
      <div className="max-w-5xl mx-auto bg-zinc-900/50 rounded-[4rem] p-12 md:p-28 border border-white/5 text-center space-y-12 relative overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white">
            The <span className="text-white/20">Flicker</span> Club
          </h2>
          <p className="text-white/40 text-sm md:text-lg italic font-medium">
            Weekly curation of the finest independent cinema delivered to your inbox.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10">
          <input
            type="email"
            placeholder="Cinema lover email..."
            className="flex-1 bg-black/50 border border-white/10 rounded-full px-8 py-5 text-xs font-bold text-white focus:outline-none focus:border-white/40 focus:bg-black transition-all"
          />
          <button
            type="button"
            className="bg-white text-black px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Subscribe
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10 flex items-center gap-2">
            <ShieldCheck className="w-3 h-3" /> Certified Originals
          </p>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10 flex items-center gap-2">
            <Info className="w-3 h-3" /> No Commercial Ads
          </p>
        </div>
      </div>
    </section>
  );
}
