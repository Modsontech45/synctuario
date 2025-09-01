import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-4xl font-black text-gradient-green mb-6 animate-glowPulse inline-block">
              Synctuario
            </Link>
            <p className="text-gray-600 max-w-md leading-relaxed mb-8 text-lg">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[1, 2, 3].map((_, index) => (
                <button 
                  key={index}
                  className="p-4 bg-green-100 hover:bg-green-200 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-black font-bold mb-6 text-lg">{t('footer.services')}</h4>
            <ul className="space-y-3 text-gray-600">
              {(t('footer.servicesList') as string[]).map((service, index) => (
                <li 
                  key={index} 
                  className="hover:text-green-600 transition-colors duration-300 cursor-pointer font-medium"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-bold mb-6 text-lg">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-gray-600">
              {[
                { name: t('nav.home'), href: '/' },
                { name: t('nav.services'), href: '/services' },
                { name: t('nav.portfolio'), href: '/portfolio' },
                { name: t('nav.about'), href: '/about' },
                { name: t('nav.contact'), href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="hover:text-green-600 transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-600 text-center md:text-left">
              <p className="mb-2 font-medium">
                © {currentYear} Synctuario. {t('footer.allRightsReserved')}
              </p>
              <p className="flex items-center justify-center md:justify-start text-sm">
                {t('footer.madeWith')} <Heart size={16} className="text-green-500 mx-2 animate-pulse" /> {t('footer.byTeam')}
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-gray-600 text-sm">
                <a href="#" className="hover:text-green-600 transition-colors duration-300 font-medium">{t('footer.privacyPolicy')}</a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-green-600 transition-colors duration-300 font-medium">{t('footer.termsOfService')}</a>
              </div>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg magnetic-button"
                title="Back to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;