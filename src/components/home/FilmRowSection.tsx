// 'use client';

// import Link from 'next/link';
// import { ChevronRight } from 'lucide-react';
// import FilmEditorialCard from '@/components/film/FilmEditorialCard';
// import type { Film } from '@/types';

// type FilmRowSectionProps = {
//   label: string;
//   title: string;
//   description?: string;
//   viewAllHref?: string;
//   viewAllLabel?: string;
//   films: Film[];
//   /** Card width in horizontal row. Default 320. */
//   cardWidth?: number;
// };

// export default function FilmRowSection({
//   label,
//   title,
//   description,
//   viewAllHref,
//   viewAllLabel = 'View All',
//   films,
//   cardWidth = 320,
// }: FilmRowSectionProps) {
//   if (films.length === 0) return null;

//   return (
//     <section className="border-b border-white/5 pb-16">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
//         <div className="space-y-4">
//           <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
//             {label}
//           </span>
//           <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
//             {title}
//           </h2>
//         </div>
//         {(description || viewAllHref) && (
//           <div className="max-w-sm text-right space-y-6">
//             {description && (
//               <p className="text-white/40 italic text-sm leading-relaxed">{description}</p>
//             )}
//             {viewAllHref && (
//               <Link
//                 href={viewAllHref}
//                 className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] ml-auto w-fit"
//               >
//                 {viewAllLabel}
//                 <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
//                   <ChevronRight size={14} />
//                 </div>
//               </Link>
//             )}
//           </div>
//         )}
//       </div>

//       <div className="overflow-x-auto overflow-y-hidden -mx-6 md:-mx-12 px-6 md:px-12 scroll-smooth">
//         <div className="flex gap-6 pb-2" style={{ minWidth: 'min-content' }}>
//           {films.map((film) => (
//             <div
//               key={film.id}
//               className="flex-shrink-0"
//               style={{ width: cardWidth }}
//             >
//               <div className="h-[400px] md:h-[500px]">
//                 <FilmEditorialCard film={film} large={false} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import FilmEditorialCard from '@/components/film/FilmEditorialCard';
import type { Film } from '@/types';

type FilmRowSectionProps = {
  label: string;
  title: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  films: Film[];
  /** Card width in horizontal row. Default 320. */
  cardWidth?: number;
};

export default function FilmRowSection({
  label,
  title,
  description,
  viewAllHref,
  viewAllLabel = 'View All',
  films,
  cardWidth = 320,
}: FilmRowSectionProps) {
  if (films.length === 0) return null;

  // Limit to first 10 films for the horizontal scroll
  const displayFilms = films.slice(0, 10);
  const hasMore = films.length > 10;

  return (
    <section className="border-b border-white/5 pb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
            {label}
          </span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
            {title}
          </h2>
        </div>
        {(description || viewAllHref) && (
          <div className="max-w-sm text-right space-y-6">
            {description && (
              <p className="text-white/40 italic text-sm leading-relaxed">{description}</p>
            )}
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] ml-auto w-fit"
              >
                {viewAllLabel}
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ChevronRight size={14} />
                </div>
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="overflow-x-auto overflow-y-hidden -mx-6 md:-mx-12 px-6 md:px-12 scroll-smooth">
        <div className="flex gap-6 pb-2" style={{ minWidth: 'min-content' }}>
          {displayFilms.map((film) => (
            <div
              key={film.id}
              className="flex-shrink-0"
              style={{ width: cardWidth }}
            >
              <div className="h-[400px] md:h-[500px]">
                <FilmEditorialCard film={film} large={false} />
              </div>
            </div>
          ))}

          {/* "View All" end-card appears if there are more than 10 movies */}
          {hasMore && viewAllHref && (
            <div className="flex-shrink-0" style={{ width: cardWidth }}>
              <Link 
                href={viewAllHref}
                className="group relative h-[400px] md:h-[500px] flex flex-col items-center justify-center bg-zinc-900/40 border border-white/5 rounded-2xl hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative background circle */}
                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-white/40 transition-all duration-500">
                    <ArrowRight className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors">
                    Explore All
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}