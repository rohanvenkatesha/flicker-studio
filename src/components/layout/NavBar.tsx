'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Film, Search, LogOut, LogIn } from 'lucide-react';
import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = () => signOut(auth);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6 md:py-10'
    }`}>
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none -z-10" />
      )}

      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 bg-white flex items-center justify-center rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500">
            <Film className="w-4 h-4 text-black fill-black" />
          </div>
          <span className="text-xl font-black italic uppercase tracking-tighter text-white">
            Flicker<span className="text-white/30">.Studio</span>
          </span>
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          <Link href="/browse" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">
            <Search size={16} />
            <span className="hidden sm:inline">Search Library</span>
          </Link>

          <div className="h-4 w-[1px] bg-white/10 hidden xs:block" />

          {user ? (
            <div className="flex items-center gap-4 group">
              {/* Always visible on mobile, hover-only on desktop */}
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest text-white/40 hover:text-red-500 transition-all md:opacity-0 md:group-hover:opacity-100"
              >
                <LogOut size={12} />
                <span className="xs:inline">Logout</span>
              </button>
              <img 
                src={user.photoURL || ""} 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-white/20 grayscale hover:grayscale-0 transition-all cursor-pointer"
              />
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest bg-white text-black px-5 py-2 hover:bg-zinc-200 transition-all"
            >
              <LogIn size={14} className="md:hidden" />
              <span>Join</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}