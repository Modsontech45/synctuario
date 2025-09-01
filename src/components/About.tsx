import React, { useEffect, useRef } from 'react';
import { CheckCircle, Target, Zap, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
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

  const features = [
    {
      icon: <Target size={28} />,
      title: t('about.strategicApproach'),
      description: t('about.strategicDesc')
    },
    {
      icon: <Zap size={28} />,
      title: t('about.rapidExecution'),
      description: t('about.rapidDesc')
    },
    {
      icon: <CheckCircle size={28} />,
      title: t('about.provenResults'),
      description: t('about.provenDesc')
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gray-50 section-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="fade-in-section">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-black">
              {t('about.title')}
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex items-start space-x-6 group fade-in-section"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 p-3 bg-green-500 text-white rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expertise List */}
            <div className="mt-12 p-8 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 fade-in-section">
              <h4 className="text-xl font-bold text-green-600 mb-6 flex items-center gap-3">
                <Award size={24} />
                {t('about.expertiseIncludes')}
              </h4>
              <ul className="text-gray-600 space-y-3">
                {[
                  t('about.performanceMarketing'),
                  t('about.webApplications'),
                  t('about.iotDevices'),
                  t('about.socialGrowth')
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 hover:text-green-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Stats & Mission */}
          <div className="relative fade-in-section">
            <div className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-700 card-hover">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-full animate-float delay-100"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-50 rounded-full animate-float delay-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-black mb-6">{t('about.mission')}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {t('about.missionDesc')}
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '100+', label: t('about.projectsCompleted') },
                    { number: '98%', label: t('about.clientSatisfaction') },
                    { number: '24/7', label: t('about.support') },
                    { number: '3+', label: t('about.yearsExperience') }
                  ].map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all duration-500 group animate-scaleIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-3xl font-black text-green-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;