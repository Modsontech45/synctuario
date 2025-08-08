import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const handleGetStarted = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchDemo = () => {
    // Mock demo functionality - could open a modal or redirect
    alert('Demo coming soon! Contact us for a personalized demonstration of our services.');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0">
          <div className="animate-float-1 absolute top-20 left-10 w-20 h-20 bg-green-500/30 rounded-full blur-xl"></div>
          <div className="animate-float-2 absolute top-40 right-20 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"></div>
          <div className="animate-float-3 absolute bottom-40 left-1/4 w-24 h-24 bg-green-400/25 rounded-full blur-xl"></div>
          <div className="animate-float-4 absolute bottom-20 right-1/3 w-28 h-28 bg-teal-500/20 rounded-full blur-xl"></div>
          <div className="animate-float-1 absolute top-1/2 left-1/2 w-16 h-16 bg-green-300/15 rounded-full blur-xl animation-delay-1000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
        </div>

        {/* Video-like Animation Overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-6xl font-bold opacity-5 animate-pulse-slow text-green-500">SYNCTUARIO</div>
          </div>
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-2xl font-light opacity-3 animate-pulse-slow animation-delay-2000 text-green-400">INNOVATION</div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
            <div className="text-3xl font-medium opacity-3 animate-pulse-slow animation-delay-3000 text-emerald-400">SOLUTIONS</div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
              {t('hero.title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-400 mb-4 animate-fadeInUp animation-delay-300 font-semibold">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 animate-fadeInUp animation-delay-600 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-900">
            <button 
              onClick={handleGetStarted}
              className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <span className="flex items-center gap-2">
                {t('hero.startProject')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={handleWatchDemo}
              className="group flex items-center gap-2 text-white border-2 border-green-500/50 hover:border-green-400 px-8 py-4 rounded-full transition-all duration-300 hover:bg-green-500/10"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              {t('hero.viewWork')}
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeInUp animation-delay-1200">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-sm text-gray-400">{t('hero.projectsCompleted')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-sm text-gray-400">{t('hero.happyClients')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">{t('hero.supportAvailable')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5★</div>
              <div className="text-sm text-gray-400">{t('hero.clientRating')}</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;