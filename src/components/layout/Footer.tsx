import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="YOUR@EMAIL.COM"
                  className="flex-1 bg-transparent border-b border-white/20 py-4 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-white transition-colors"
                />
                <button className="text-[11px] font-black uppercase tracking-[0.3em] hover:text-white/60 transition-colors">
                  Join List
                </button>
              </div>
            </div>
            <div className="flex gap-12">
              {['Instagram', 'Twitter', 'Vimeo', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            <div className="space-y-6">
              <h5 className="text-white/40">Collections</h5>
              <ul className="space-y-3">
                <li className="hover:text-white cursor-pointer transition-colors">Midnight Specials</li>
                <li className="hover:text-white cursor-pointer transition-colors">Experimental Lab</li>
                <li className="hover:text-white cursor-pointer transition-colors">Urban Narratives</li>
                <li className="hover:text-white cursor-pointer transition-colors">Documentaries</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-white/40">Flicker</h5>
              <ul className="space-y-3">
                <li className="hover:text-white cursor-pointer transition-colors">The Manifesto</li>
                <li className="hover:text-white cursor-pointer transition-colors">Our Studio</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Submit Film</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden pt-12 border-t border-white/5">
          <div className="text-[20vw] font-black italic uppercase tracking-tighter leading-none text-white opacity-[0.02] absolute -bottom-10 left-0 whitespace-nowrap select-none">
            FLICKER STUDIO 2024 FLICKER STUDIO 2024
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 relative z-10">
            <span>&copy; 2024 Flicker Visual Arts Inc.</span>
            <span>Designed for the Future of Cinema</span>
            <span>Privacy & Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
