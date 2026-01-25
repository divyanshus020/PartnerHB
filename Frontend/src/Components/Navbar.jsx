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
    { name: 'Home', path: '/' },
    { name: 'Workflow', path: '/#workflow' },
    { name: 'Partners', path: '/#partners' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          PartnersHB
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="text-muted-foreground hover:text-primary font-medium transition-colors text-sm">
              {link.name}
            </a>
          ))}
          <Button asChild>
            <Link to="/auth">
              Login / Register
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className="text-foreground font-medium p-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <Button className="w-full" asChild>
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                Login / Register
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
