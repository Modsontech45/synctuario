import React from 'react';
import { ExternalLink, Calendar, Users, Shield, DollarSign, GraduationCap, Building2, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.rfidAttendance.title'),
      description: t('portfolio.projects.rfidAttendance.description'),
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://rfid-attendance-synctuario-theta.vercel.app',
      technologies: ['React', 'Node.js', 'RFID Integration', 'Real-time Updates'],
      features: t('portfolio.projects.rfidAttendance.features'),
      icon: <Users size={24} />,
      category: 'Web Application'
    },
    {
      id: 2,
      title: t('portfolio.projects.financeRecord.title'),
      description: t('portfolio.projects.financeRecord.description'),
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://financedemo-phi.vercel.app/login',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      features: t('portfolio.projects.financeRecord.features'),
      icon: <DollarSign size={24} />,
      category: 'Web Application'
    },
    {
      id: 3,
      title: t('portfolio.projects.financialTips.title'),
      description: t('portfolio.projects.financialTips.description'),
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      features: t('portfolio.projects.financialTips.features'),
      icon: <DollarSign size={24} />,
      category: 'Website'
    },
    {
      id: 4,
      title: t('portfolio.projects.relationshipTips.title'),
      description: t('portfolio.projects.relationshipTips.description'),
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'CMS'],
      features: t('portfolio.projects.relationshipTips.features'),
      icon: <Users size={24} />,
      category: 'Website'
    },
    {
      id: 5,
      title: t('portfolio.projects.itTips.title'),
      description: t('portfolio.projects.itTips.description'),
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      features: t('portfolio.projects.itTips.features'),
      icon: <Cpu size={24} />,
      category: 'Website'
    }
  ];

  const handleProjectClick = (link: string) => {
    if (link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => handleProjectClick(project.link)}
              className={`group relative bg-gray-900/50 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10 ${
                project.link !== '#' ? 'cursor-pointer' : 'cursor-default'
              }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Live Project Badge */}
                {project.link !== '#' && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    {t('portfolio.liveProject')}
                  </div>
                )}

                {/* Coming Soon Badge */}
                {project.link === '#' && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t('portfolio.comingSoon')}
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {project.icon}
                  {project.category}
                </div>

                {/* External Link Icon */}
                {project.link !== '#' && (
                  <div className="absolute bottom-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={20} className="text-green-400" />
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.link !== '#' && (
                    <ExternalLink size={20} className="text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                  )}
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Shield size={16} className="text-green-400" />
                    {t('portfolio.keyFeatures')}
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {(Array.isArray(project.features) ? project.features : []).slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300 text-xs">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={14} />
                    <span className="text-xs">
                      {project.link !== '#' ? t('portfolio.liveProject') : t('portfolio.inDevelopment')}
                    </span>
                  </div>
                  {project.link !== '#' ? (
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-1.5 rounded-lg transition-all duration-300 transform group-hover:scale-105 flex items-center gap-2 text-sm">
                      {t('portfolio.viewLive')}
                      <ExternalLink size={14} />
                    </button>
                  ) : (
                    <button className="bg-gray-600 text-gray-300 px-4 py-1.5 rounded-lg text-sm cursor-not-allowed">
                      {t('portfolio.comingSoon')}
                    </button>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">{t('portfolio.ctaTitle')}</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('portfolio.ctaDesc')}
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2 mx-auto"
            >
              {t('portfolio.startYourProject')}
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;