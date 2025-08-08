import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Synctuario
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:underline hover:underline-offset-4"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-green-500/10"
              title={language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
            >
              <Globe size={20} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-md hover:bg-green-500/20 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 py-4 animate-fadeIn border border-green-500/20">
            {/* Mobile Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 w-full"
            >
              <Globe size={20} />
              <span>{language === 'en' ? 'Français' : 'English'}</span>
            </button>
            <div className="border-t border-gray-700 my-2"></div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;