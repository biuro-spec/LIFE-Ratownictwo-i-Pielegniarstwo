import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, HeartPulse } from 'lucide-react';
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
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navLinks = [
    { name: 'Strona Główna', path: '/' },
    { name: 'O nas', path: '/o-nas' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header
      className="fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        top: scrolled ? '12px' : '24px',
        width: scrolled ? 'min(85%, 850px)' : 'min(95%, 1100px)',
      }}
    >
      <nav
        className={`
          rounded-[50px] border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${scrolled
            ? 'bg-[#0f2b46]/80 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] py-3 px-6'
            : 'bg-white/5 backdrop-blur-md border-white/10 py-4 px-8'
          }
        `}
      >
        <div className={`flex items-center transition-all duration-500 ${scrolled ? 'justify-center gap-10' : 'justify-between'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <HeartPulse className={`transition-all duration-500 ${scrolled ? 'w-6 h-6' : 'w-8 h-8'} text-primary-red`} />
            <span className={`font-extrabold tracking-tighter transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              <span className="text-white">LIFE</span>
              <span className="text-primary-red">-RATOWNICTWO</span>
            </span>
          </Link>

          {/* Spacer - shrinks on scroll */}
          <div className={`hidden md:block transition-all duration-500 ${scrolled ? 'flex-grow-0 w-0' : 'flex-grow'}`} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  font-medium transition-all duration-300 hover:-translate-y-0.5
                  ${scrolled ? 'text-[0.9rem]' : 'text-[1rem]'}
                  ${location.pathname === link.path
                    ? 'text-primary-red'
                    : 'text-white/70 hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.4)]'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:602622840"
              className={`
                bg-gradient-to-r from-primary-red to-[#ff4136] text-white rounded-full font-bold
                flex items-center gap-2 shadow-lg shadow-primary-red/30
                transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-red/40
                ${scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'}
              `}
            >
              <Phone size={scrolled ? 14 : 16} />
              602 622 840
            </a>
          </div>

          {/* Mobile Toggle - Animated Hamburger */}
          <button
            className="md:hidden relative w-8 h-6 flex flex-col justify-between items-center"
            onClick={toggleMenu}
            aria-label="Menu nawigacyjne"
          >
            <span
              className={`block w-7 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                isOpen ? 'rotate-45 translate-y-[11px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                isOpen ? '-rotate-45 -translate-y-[11px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mt-3 bg-[#0a1929]/95 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:hidden flex flex-col gap-5 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-lg font-semibold transition-colors ${
                  location.pathname === link.path ? 'text-primary-red' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:602622840"
              className="bg-gradient-to-r from-primary-red to-[#ff4136] text-white p-4 rounded-2xl font-bold flex justify-center items-center gap-2 shadow-lg shadow-primary-red/30 mt-2"
            >
              <Phone size={20} />
              Zadzwoń Teraz
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
