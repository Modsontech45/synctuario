import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.portfolio'), href: '/portfolio' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="text-3xl font-black tracking-tight animate-glowPulse text-gradient-green">
            Synctuario
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative transition-all duration-300 font-medium group ${
                  isActivePage(item.href) 
                    ? 'text-green-500' 
                    : 'text-black hover:text-green-500'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                  isActivePage(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-black hover:text-green-500 transition-all duration-300 px-4 py-2 rounded-full hover:bg-green-50 animate-magneticHover"
              title={language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
            >
              <Globe size={20} />
              <span className="text-sm font-semibold">{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black p-3 rounded-full hover:bg-green-50 transition-all duration-300 animate-magneticHover"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : ''
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl mt-4 py-6 border border-gray-100 shadow-xl">
            {/* Mobile Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-3 px-6 py-3 text-black hover:text-green-500 hover:bg-green-50 transition-all duration-300 w-full animate-slideInLeft"
            >
              <Globe size={20} />
              <span className="font-medium">{language === 'en' ? 'Français' : 'English'}</span>
            </button>
            
            <div className="border-t border-gray-100 my-4"></div>
            
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 transition-all duration-300 font-medium animate-slideInLeft ${
                  isActivePage(item.href)
                    ? 'text-green-500 bg-green-50'
                    : 'text-black hover:text-green-500 hover:bg-green-50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;