// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Film, Search } from 'lucide-react';

// export default function NavBar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 transition-all duration-700 ${
//         scrolled ? 'bg-black/80 backdrop-blur-3xl py-4 border-b border-white/5' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-[1800px] mx-auto flex items-center justify-between">
//         <div className="flex items-center gap-12">
//           <Link href="/" className="group cursor-pointer flex items-center gap-3">
//             <div className="w-8 h-8 bg-white flex items-center justify-center rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500">
//               <Film className="w-4 h-4 text-black fill-black" />
//             </div>
//             <span className="text-xl font-black italic uppercase tracking-tighter">
//               Flicker<span className="text-white/30">.Studio</span>
//             </span>
//           </Link>

//           {/* <div className="hidden lg:flex gap-8 text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
//             {['Archive', 'Laboratory', 'Makers'].map((item) => (
//               <button key={item} className="hover:text-white transition-colors relative group">
//                 {item}
//                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
//               </button>
//             ))}
//           </div> */}
//         </div>

//         <div className="flex items-center gap-8">
//           <Link
//             href="/browse"
//             className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors"
//           >
//             <Search size={16} />
//             <span className="hidden sm:inline">Search Library</span>
//           </Link>
//           <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
//           {/* <button className="relative group overflow-hidden bg-white text-black px-8 py-3 text-[9px] font-black uppercase tracking-[0.2em]">
//             <span className="relative z-10">Access Pass</span>
//             <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//           </button> */}
//         </div>
//       </div>
//     </nav>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Film, Search } from 'lucide-react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // We increase this to 50 so it stays transparent longer while viewing the Hero
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' 
          : 'bg-transparent py-6 md:py-10' 
      }`}
    >
      {/* Optional: This subtle gradient ensures the white text is readable 
          if your Hero image is very bright at the top */}
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none -z-10" />
      )}

      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="group cursor-pointer flex items-center gap-3">
            <div className="w-8 h-8 bg-white flex items-center justify-center rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500">
              <Film className="w-4 h-4 text-black fill-black" />
            </div>
            <span className="text-xl font-black italic uppercase tracking-tighter text-white">
              Flicker<span className="text-white/30">.Studio</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/browse"
            className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            <Search size={16} />
            <span className="hidden sm:inline">Search Library</span>
          </Link>
          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
        </div>
      </div>
    </nav>
  );
}