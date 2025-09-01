import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const services = t('contact.services') as string[];
  const budgetRanges = t('contact.budgetRanges') as string[];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.service,
      };
      
      await emailjs.send(
        'service_q3i595l',
        'template_jhtvaaw', 
        templateParams,
        'hu0d0Sfg7GwJKxrIp'
      );
      
      const ownerTemplateParams = {
        customer_name: formData.name,
        customer_email: formData.email,
        service_requested: formData.service,
        budget_range: formData.budget,
        customer_message: formData.message,
      };
      
      await emailjs.send(
        'service_q3i595l',
        'template_jzsam48',
        ownerTemplateParams,
        'hu0d0Sfg7GwJKxrIp'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', service: '', message: '', budget: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white section-transition min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-section">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-black">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="fade-in-section">
            <h3 className="text-3xl font-bold text-black mb-12">{t('contact.contactInfo')}</h3>
            
            <div className="space-y-8">
              {[
                {
                  icon: <Mail size={24} />,
                  label: t('contact.emailUs'),
                  value: 'tandemodson55@gmail.com',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <Phone size={24} />,
                  label: t('contact.callUs'),
                  value: '+233 24 291 1248',
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  icon: <MapPin size={24} />,
                  label: t('contact.location'),
                  value: 'Accra, Ghana',
                  gradient: 'from-purple-500 to-pink-500'
                }
              ].map((contact, index) => (
                <div 
                  key={contact.label}
                  className="flex items-center space-x-6 group animate-slideInLeft"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`p-4 bg-gradient-to-r ${contact.gradient} text-white rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium">{contact.label}</p>
                    <p className="text-black font-bold text-lg">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-green-200 transition-all duration-500 fade-in-section">
              <h4 className="text-xl font-bold text-black mb-6 flex items-center gap-3">
                <Clock size={24} className="text-green-500" />
                {t('contact.businessHours')}
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{t('contact.mondayFriday')}</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{t('contact.saturday')}</span>
                  <span className="font-bold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{t('contact.sunday')}</span>
                  <span className="font-bold text-green-600">{t('contact.emergencySupport')}</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="text-green-600 font-bold">24/7 Emergency Support</span> {t('contact.emergencyAvailable')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-700 card-hover fade-in-section">
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl animate-scaleIn">
                <p className="text-green-600 font-semibold text-center">{t('contact.successMessage')}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl animate-scaleIn">
                <p className="text-red-600 font-semibold text-center">{t('contact.errorMessage')}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-black mb-3">
                    {t('contact.yourName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-green-300"
                    placeholder={t('contact.enterName')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-3">
                    {t('contact.emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-green-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-black mb-3">
                    {t('contact.serviceInterested')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-green-300"
                  >
                    <option value="">{t('contact.selectService')}</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-bold text-black mb-3">
                    {t('contact.projectBudget')}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-green-300"
                  >
                    <option value="">{t('contact.selectBudget')}</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-black mb-3">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none hover:border-green-300"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-green-500 disabled:bg-gray-400 text-white px-8 py-5 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl magnetic-button flex items-center justify-center gap-3 font-bold text-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t('contact.sendMessage')}
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-gray-500 font-medium">
                {t('contact.responseTime')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;