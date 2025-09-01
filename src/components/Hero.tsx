import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWatchDemo = () => {
    alert('Demo coming soon! Contact us for a personalized demonstration of our services.');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full animate-float delay-100 opacity-60"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full animate-float delay-300 opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-green-50 rounded-full animate-float delay-500 opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-100 rounded-full animate-float delay-700 opacity-30"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-1/3 left-1/3 animate-float delay-200">
          <Sparkles size={24} className="text-green-400 opacity-60" />
        </div>
        <div className="absolute top-2/3 right-1/4 animate-float delay-600">
          <Sparkles size={20} className="text-green-500 opacity-40" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Main Title with Typewriter Effect */}
          <div className="mb-8">
            <h1 className="text-responsive-xl font-black mb-4 text-black">
              <span className="inline-block animate-textReveal delay-100">
                {t('hero.title').split('').map((char, index) => (
                  <span 
                    key={index}
                    className="inline-block animate-textReveal"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>
            
            <div className="relative">
              <p className="text-responsive-lg text-green-500 mb-6 font-bold animate-textReveal delay-500">
                {t('hero.subtitle')}
              </p>
              <div className="absolute -top-2 -right-2 animate-float delay-800">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-fadeInUp delay-700">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp delay-900">
            <Link 
              to="/contact"
              className="group bg-black hover:bg-green-500 text-white px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 magnetic-button font-semibold"
            >
              <span className="flex items-center gap-3">
                {t('hero.startProject')}
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            
            <button 
              onClick={handleWatchDemo}
              className="group flex items-center gap-3 text-black border-2 border-black hover:border-green-500 hover:text-green-500 px-8 py-4 rounded-full transition-all duration-500 hover:bg-green-50 animate-magneticHover font-semibold"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              {t('hero.viewWork')}
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeInUp delay-1000">
            {[
              { number: '100+', label: t('hero.projectsCompleted') },
              { number: '50+', label: t('hero.happyClients') },
              { number: '24/7', label: t('hero.supportAvailable') },
              { number: '5★', label: t('hero.clientRating') }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group animate-scaleIn"
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                <div className="text-4xl font-black text-green-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float delay-1000">
          <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center cursor-pointer hover:border-green-600 transition-colors duration-300">
            <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;