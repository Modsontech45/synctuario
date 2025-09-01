import React, { useEffect, useRef } from 'react';
import { ExternalLink, Calendar, Users, Shield, DollarSign, Cpu, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
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

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.rfidAttendance.title'),
      description: t('portfolio.projects.rfidAttendance.description'),
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://rfid-attendance-synctuario-theta.vercel.app',
      technologies: ['React', 'Node.js', 'RFID Integration', 'Real-time Updates'],
      features: t('portfolio.projects.rfidAttendance.features'),
      icon: <Users size={20} />,
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
      icon: <DollarSign size={20} />,
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
      icon: <DollarSign size={20} />,
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
      icon: <Users size={20} />,
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
      icon: <Cpu size={20} />,
      category: 'Website'
    },
    {
      id: 6,
      title: t('portfolio.projects.smartHome.title'),
      description: t('portfolio.projects.smartHome.description'),
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      technologies: ['IoT', 'Arduino', 'React Native', 'Node.js'],
      features: t('portfolio.projects.smartHome.features'),
      icon: <Home size={20} />,
      category: 'Hardware + Software'
    }
  ];

  const handleProjectClick = (link: string) => {
    if (link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 bg-white section-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-black">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => handleProjectClick(project.link)}
              className={`group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-green-200 transition-all duration-700 card-hover hover:shadow-2xl fade-in-section ${
                project.link !== '#' ? 'cursor-pointer' : 'cursor-default'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Status Badges */}
                {project.link !== '#' ? (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {t('portfolio.liveProject')}
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t('portfolio.comingSoon')}
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-full text-sm flex items-center gap-2 font-medium">
                  {project.icon}
                  {project.category}
                </div>

                {/* External Link Icon */}
                {project.link !== '#' && (
                  <div className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <ExternalLink size={20} className="text-green-500" />
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-black group-hover:text-green-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.link !== '#' && (
                    <ExternalLink size={20} className="text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
                    <Shield size={16} className="text-green-500" />
                    {t('portfolio.keyFeatures')}
                  </h4>
                  <div className="space-y-2">
                    {(Array.isArray(project.features) ? project.features : []).slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm border border-green-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={14} />
                    <span className="text-sm">
                      {project.link !== '#' ? t('portfolio.liveProject') : t('portfolio.inDevelopment')}
                    </span>
                  </div>
                  {project.link !== '#' ? (
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform group-hover:scale-105 flex items-center gap-2 text-sm font-semibold magnetic-button">
                      {t('portfolio.viewLive')}
                      <ExternalLink size={14} />
                    </button>
                  ) : (
                    <button className="bg-gray-200 text-gray-500 px-6 py-2 rounded-full text-sm cursor-not-allowed">
                      {t('portfolio.comingSoon')}
                    </button>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-green"></div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-20 text-center fade-in-section">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-100">
            <h3 className="text-3xl font-bold text-black mb-6">{t('portfolio.ctaTitle')}</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('portfolio.ctaDesc')}
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black hover:bg-green-500 text-white px-10 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-xl magnetic-button flex items-center gap-3 mx-auto font-semibold text-lg"
            >
              {t('portfolio.startYourProject')}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;