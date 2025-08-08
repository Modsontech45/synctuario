import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
              Synctuario
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors duration-300">
                <div className="w-5 h-5 bg-green-400 rounded"></div>
              </button>
              <button className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors duration-300">
                <div className="w-5 h-5 bg-green-400 rounded"></div>
              </button>
              <button className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors duration-300">
                <div className="w-5 h-5 bg-green-400 rounded"></div>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-gray-300">
              {(t('footer.servicesList') as string[]).map((service, index) => (
                <li key={index} className="hover:text-green-400 transition-colors cursor-pointer">{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-green-400 transition-colors"
                >
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-green-400 transition-colors"
                >
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-green-400 transition-colors"
                >
                  {t('nav.portfolio')}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-green-400 transition-colors"
                >
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-green-400 transition-colors"
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm text-center md:text-left">
              <p className="mb-2">
                © {currentYear} Synctuario. {t('footer.allRightsReserved')}
                <span className="flex items-center justify-center md:justify-start mt-1">
                  {t('footer.madeWith')} <Heart size={16} className="text-green-500 mx-1" /> {t('footer.byTeam')}
                </span>
              </p>
              <p className="text-xs">
                © {currentYear} Synctuario. Tous droits réservés.
                <span className="block mt-1">
                  Conçu avec <Heart size={14} className="text-green-500 inline mx-1" /> par l'équipe Synctuario
                </span>
              </p>
            </div>
            
            <div className="text-gray-300 text-sm text-center md:text-right">
              <p>
                <a href="#" className="hover:text-green-400 transition-colors">{t('footer.privacyPolicy')}</a> | 
                <a href="#" className="hover:text-green-400 transition-colors ml-1">{t('footer.termsOfService')}</a>
              </p>
              <p className="text-xs mt-1">Politique de confidentialité | Conditions d'utilisation</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;