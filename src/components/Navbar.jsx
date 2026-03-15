import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, HeartPulse } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Strona Główna', path: '/' },
    { name: 'O nas', path: '/o-nas' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-white/60 backdrop-blur-md p-2 rounded-full border border-white/80 shadow-sm transition-transform group-hover:scale-110">
            <HeartPulse className="text-primary-red w-8 h-8" />
          </div>
          <span className="font-extrabold text-2xl tracking-tighter">
            <span className="text-navy-blue">LIFE</span>
            <span className="text-primary-red">-RATOWNICTWO</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold transition-colors hover:text-primary-red ${location.pathname === link.path ? 'text-primary-red' : 'text-navy-blue'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:602622840"
            className="bg-primary-red text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary-red/20 transition-all hover:scale-105 hover:bg-[#ba1e17]"
          >
            <Phone size={18} />
            602 622 840
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navy-blue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-navy-blue hover:text-primary-red"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:602622840"
              className="bg-primary-red text-white p-4 rounded-xl font-bold flex justify-center items-center gap-2"
            >
              <Phone size={20} />
              Zadzwoń Teraz
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
