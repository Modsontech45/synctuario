import React from 'react';
import { CheckCircle, Target, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Target size={24} />,
      title: t('about.strategicApproach'),
      description: t('about.strategicDesc')
    },
    {
      icon: <Zap size={24} />,
      title: t('about.rapidExecution'),
      description: t('about.rapidDesc')
    },
    {
      icon: <CheckCircle size={24} />,
      title: t('about.provenResults'),
      description: t('about.provenDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/20">
              <h4 className="text-lg font-semibold text-green-400 mb-3">{t('about.expertiseIncludes')}</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {t('about.performanceMarketing')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {t('about.webApplications')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {t('about.iotDevices')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {t('about.socialGrowth')}
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-3xl p-8 border border-green-500/30">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-teal-500 to-green-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">{t('about.mission')}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('about.missionDesc')}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-black/50 rounded-xl border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400 mb-2">100+</div>
                    <div className="text-sm text-gray-400">{t('about.projectsCompleted')}</div>
                  </div>
                  <div className="text-center p-4 bg-black/50 rounded-xl border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400 mb-2">98%</div>
                    <div className="text-sm text-gray-400">{t('about.clientSatisfaction')}</div>
                  </div>
                  <div className="text-center p-4 bg-black/50 rounded-xl border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">{t('about.support')}</div>
                  </div>
                  <div className="text-center p-4 bg-black/50 rounded-xl border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400 mb-2">3+</div>
                    <div className="text-sm text-gray-400">{t('about.yearsExperience')}</div>
                  </div>
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