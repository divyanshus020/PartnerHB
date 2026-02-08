import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    { name: 'For Employers', path: '/' },
    { name: 'For Students', path: '/#students' },
    { name: 'For HB Partners', path: '/#partners' },
    { name: 'Contact', path: 'mailto:contact@hiringbazaar.in' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200/70 dark:border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white flex items-center gap-3 group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white text-sm font-bold shadow-lg shadow-indigo-500/30">
            HB
          </span>
          <span className="leading-none">
            <span className="block text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">Hiring Bazaar</span>
            <span className="block">Partners</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 px-6 py-2 rounded-full bg-white/70 dark:bg-white/5 border border-neutral-200/70 dark:border-white/10 backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-xs tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-semibold text-xs tracking-wide hover:bg-neutral-100 dark:hover:bg-white/5 rounded-full px-6" asChild>
              <Link to="/auth">Login</Link>
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/30 rounded-full px-8 font-semibold text-xs tracking-wide h-11" asChild>
              <Link to="/auth">Apply as a Partner</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-12 h-12 rounded-2xl bg-white/80 dark:bg-white/5 border border-neutral-200/70 dark:border-white/10 flex items-center justify-center text-foreground hover:bg-neutral-200/80 dark:hover:bg-white/10 transition-colors"
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
                className="text-xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-neutral-100 dark:border-white/5 flex flex-col gap-4">
              <Button variant="outline" className="w-full text-base h-12 rounded-2xl font-semibold" asChild>
                <Link to="/auth" onClick={() => setIsOpen(false)}>Login</Link>
              </Button>
              <Button className="w-full bg-indigo-600 text-base h-12 rounded-2xl font-semibold" asChild>
                <Link to="/auth" onClick={() => setIsOpen(false)}>Apply as a Partner</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
