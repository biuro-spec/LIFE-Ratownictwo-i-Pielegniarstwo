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
          rounded-[50px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${scrolled
            ? 'bg-primary-red/90 backdrop-blur-xl border-2 border-white/30 shadow-[0_10px_40px_rgba(218,37,29,0.35)] py-3 px-6'
            : 'bg-white/80 backdrop-blur-xl border-2 border-primary-red/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-4 px-8'
          }
        `}
      >
        <div className={`flex items-center transition-all duration-500 ${scrolled ? 'justify-center gap-10' : 'justify-between'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <HeartPulse className={`transition-all duration-500 ${scrolled ? 'w-6 h-6 text-white' : 'w-8 h-8 text-primary-red'}`} />
            <span className={`font-extrabold tracking-tighter transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              <span className={`transition-colors duration-500 ${scrolled ? 'text-white' : 'text-navy-blue'}`}>LIFE</span>
              <span className={`transition-colors duration-500 ${scrolled ? 'text-white/80' : 'text-primary-red'}`}>-RATOWNICTWO</span>
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
                  font-semibold transition-all duration-300 hover:-translate-y-0.5
                  ${scrolled ? 'text-[0.9rem]' : 'text-[1rem]'}
                  ${location.pathname === link.path
                    ? scrolled ? 'text-white font-bold' : 'text-primary-red'
                    : scrolled
                      ? 'text-white/80 hover:text-white'
                      : 'text-navy-blue/70 hover:text-navy-blue'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:602622840"
              className={`
                rounded-full font-bold flex items-center gap-2
                transition-all duration-300 hover:scale-105 hover:-translate-y-0.5
                ${scrolled
                  ? 'bg-white text-primary-red px-5 py-2 text-sm shadow-lg shadow-black/10 hover:shadow-xl'
                  : 'bg-primary-red text-white px-6 py-2.5 text-base shadow-lg shadow-primary-red/25 hover:shadow-xl hover:shadow-primary-red/35'
                }
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
              className={`block w-7 h-0.5 rounded-full transition-all duration-300 origin-center ${
                scrolled ? 'bg-white' : 'bg-navy-blue'
              } ${isOpen ? 'rotate-45 translate-y-[11px]' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-white' : 'bg-navy-blue'
              } ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}
            />
            <span
              className={`block w-7 h-0.5 rounded-full transition-all duration-300 origin-center ${
                scrolled ? 'bg-white' : 'bg-navy-blue'
              } ${isOpen ? '-rotate-45 -translate-y-[11px]' : ''}`}
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
            className={`mt-3 backdrop-blur-xl rounded-3xl p-8 md:hidden flex flex-col gap-5
              ${scrolled
                ? 'bg-primary-red/95 border-2 border-white/20 shadow-[0_20px_40px_rgba(218,37,29,0.3)]'
                : 'bg-white/95 border-2 border-primary-red/15 shadow-[0_20px_40px_rgba(0,0,0,0.1)]'
              }
            `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-lg font-semibold transition-colors ${
                  location.pathname === link.path
                    ? scrolled ? 'text-white font-bold' : 'text-primary-red'
                    : scrolled ? 'text-white/80 hover:text-white' : 'text-navy-blue hover:text-primary-red'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:602622840"
              className={`p-4 rounded-2xl font-bold flex justify-center items-center gap-2 mt-2 transition-all
                ${scrolled
                  ? 'bg-white text-primary-red shadow-lg shadow-black/10'
                  : 'bg-primary-red text-white shadow-lg shadow-primary-red/25'
                }
              `}
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
