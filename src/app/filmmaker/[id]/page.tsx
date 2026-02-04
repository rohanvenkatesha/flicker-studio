import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getFilmmaker } from '@/lib/getFilms';
import FilmEditorialCard from '@/components/film/FilmEditorialCard';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ id: string }> };

export default async function FilmmakerPage({ params }: Props) {
  const { id } = await params;
  const { creator, films } = getFilmmaker(id);

  if (!creator) notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <header className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-6 bg-black/80 backdrop-blur-3xl border-b border-white/5">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
              <ArrowLeft size={16} />
            </div>
            Back
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
        <section className="mb-24">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-48 h-48 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 bg-zinc-900">
              <img
                src={creator.profileImage}
                alt={creator.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">
                Filmmaker
              </span>
              <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
                {creator.name}
              </h1>
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">{creator.bio}</p>
              <p className="text-[11px] font-black uppercase tracking-widest text-white/40">
                {creator.location}
              </p>
            </div>
          </div>
        </section>

        {films.length > 0 && (
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30 mb-8">
              Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {films.map((film) => (
                <FilmEditorialCard key={film.id} film={film} />
              ))}
            </div>
          </section>
        )}

        {films.length === 0 && (
          <p className="text-white/40 italic">No films in the library for this maker yet.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
