import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Kanban, DollarSign, Globe, Heart, Code, Home, Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'rfidAttendance',
      icon: <Zap className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Hardware & Web',
      status: 'live',
      url: '#'
    },
    {
      id: 'financeRecord',
      icon: <DollarSign className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Application',
      status: 'development',
      url: '#'
    },
    {
      id: 'financialTips',
      icon: <Heart className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Website',
      status: 'development',
      url: '#'
    },
    {
      id: 'relationshipTips',
      icon: <Heart className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Website',
      status: 'development',
      url: '#'
    },
    {
      id: 'itTips',
      icon: <Code className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Website',
      status: 'development',
      url: '#'
    },
    {
      id: 'smartHome',
      icon: <Home className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'IoT & Hardware',
      status: 'development',
      url: '#'
    },
    {
      id: 'taskflow',
      icon: <Kanban className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Application',
      status: 'live',
      url: 'https://taskflow-nine-henna.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Portfolio Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('portfolio.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(`portfolio.projects.${project.id}.title`)}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status === 'live' ? t('portfolio.liveProject') : t('portfolio.comingSoon')}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="text-green-600 mr-3">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {t(`portfolio.projects.${project.id}.title`)}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(`portfolio.projects.${project.id}.description`)}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      {t('portfolio.keyFeatures')}:
                    </h4>
                    <ul className="space-y-1">
                      {t(`portfolio.projects.${project.id}.features`).map((feature: string, index: number) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    {project.status === 'live' ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold group"
                      >
                        {t('portfolio.viewLive')}
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-600 rounded-lg font-semibold">
                        {t('portfolio.inDevelopment')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('portfolio.ctaTitle')}
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            {t('portfolio.ctaDesc')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold text-lg group"
          >
            {t('portfolio.startYourProject')}
            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;