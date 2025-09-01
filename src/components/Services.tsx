import React, { useEffect, useRef } from 'react';
import { TrendingUp, Code, Cpu, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <TrendingUp size={32} />,
      title: t('services.affiliateMarketing'),
      description: t('services.affiliateDesc'),
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <Code size={32} />,
      title: t('services.webDevelopment'),
      description: t('services.webDesc'),
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      icon: <Cpu size={32} />,
      title: t('services.hardwareDesign'),
      description: t('services.hardwareDesc'),
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      icon: <Users size={32} />,
      title: t('services.socialMedia'),
      description: t('services.socialDesc'),
      gradient: 'from-orange-500 to-red-400'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gray-50 section-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-black">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-green-200 transition-all duration-500 card-hover fade-in-section hover:shadow-2xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-black group-hover:text-green-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button className="text-green-500 hover:text-green-600 font-semibold transition-all duration-300 flex items-center gap-2 group-hover:gap-4">
                {t('services.learnMore')}
                <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
              </button>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 rounded-3xl animate-shimmer opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 fade-in-section">
          <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-6">{t('services.ctaTitle')}</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('services.ctaDesc')}
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 magnetic-button font-semibold text-lg"
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