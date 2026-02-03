import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Workflow', path: '/#workflow' },
    { name: 'Partners', path: '/#partners' },
    { name: 'Success Stories', path: '/#stories' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl border-b border-neutral-200 dark:border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-3xl font-black uppercase italic tracking-tighter text-indigo-600 flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform shadow-indigo-500/50" />
          <span>PartnersHB</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 px-6 py-2 rounded-full bg-neutral-100/50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold uppercase italic text-xs tracking-widest transition-all hover:scale-105 active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-bold uppercase italic text-xs tracking-widest hover:bg-neutral-100 dark:hover:bg-white/5 rounded-full px-6" asChild>
              <Link to="/auth">Login</Link>
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/30 rounded-full px-8 font-bold uppercase italic text-xs tracking-widest h-11" asChild>
              <Link to="/auth">Join Network</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-foreground hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-white/5 shadow-2xl p-6 flex flex-col gap-6 md:hidden overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-2xl font-black uppercase italic tracking-tighter text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-neutral-100 dark:border-white/5 flex flex-col gap-4">
              <Button variant="outline" className="w-full text-lg h-14 rounded-2xl font-black uppercase italic" asChild>
                <Link to="/auth" onClick={() => setIsOpen(false)}>Login</Link>
              </Button>
              <Button className="w-full bg-indigo-600 text-lg h-14 rounded-2xl font-black uppercase italic" asChild>
                <Link to="/auth" onClick={() => setIsOpen(false)}>Join as Partner</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
