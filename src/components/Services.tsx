import React from 'react';
import { TrendingUp, Code, Cpu, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <TrendingUp size={40} />,
      title: t('services.affiliateMarketing'),
      description: t('services.affiliateDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code size={40} />,
      title: t('services.webDevelopment'),
      description: t('services.webDesc'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Cpu size={40} />,
      title: t('services.hardwareDesign'),
      description: t('services.hardwareDesc'),
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Users size={40} />,
      title: t('services.socialMedia'),
      description: t('services.socialDesc'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6">
                <button className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                  {t('services.learnMore')}
                  <ArrowRight size={16} className="transition-all duration-300" />
                </button>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">{t('services.ctaTitle')}</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('services.ctaDesc')}
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              {t('services.freeConsultation')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;