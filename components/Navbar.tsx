
import React, { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'music', path: '/music' },
    { key: 'artisticDirection', path: '/artistic-direction' },
    { key: 'press', path: '/press' },
    { key: 'contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F5F1ED] shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-widest font-serif">
          BETIA
        </Link>

        {/* Desktop Links + Language Selector */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest hover:text-[#B8976A] transition-colors ${location.pathname === link.path ? 'text-[#B8976A] font-semibold' : 'text-[#1A1A1A]'}`}
            >
              {t(`navbar.${link.key}`)}
            </Link>
          ))}
          <div className="ml-4"><LanguageSelector /></div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#F5F1ED] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-serif tracking-widest hover:text-[#B8976A]"
          >
            {t(`navbar.${link.key}`)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
