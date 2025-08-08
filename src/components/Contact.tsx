import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = t('contact.services') as string[];
  const budgetRanges = t('contact.budgetRanges') as string[];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Template parameters for customer auto-reply
      const templateParams = {
        name: formData.name,
        email: formData.email,  // This goes to {{email}} field
        title: formData.service, // This goes to {{title}} in message
      };
      
      // Send auto-reply to customer
      await emailjs.send(
        'service_q3i595l',
        'template_jhtvaaw', 
        templateParams,
        'hu0d0Sfg7GwJKxrIp'
      );
      
      // Send notification to you (owner)
      const ownerTemplateParams = {
        customer_name: formData.name,
        customer_email: formData.email,
        service_requested: formData.service,
        budget_range: formData.budget,
        customer_message: formData.message,
      };
      
      // Send to owner
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">{t('contact.contactInfo')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-400">{t('contact.emailUs')}</p>
                  <p className="text-white font-semibold">tandemodson55@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-400">{t('contact.callUs')}</p>
                  <p className="text-white font-semibold">+233 24 291 1248</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-400">{t('contact.location')}</p>
                  <p className="text-white font-semibold">Accra, Ghana</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/30">
              <h4 className="text-lg font-semibold text-white mb-4">{t('contact.businessHours')}</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>{t('contact.mondayFriday')}</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.saturday')}</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.sunday')}</span>
                  <span>{t('contact.emergencySupport')}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-green-500/20">
                <p className="text-sm text-gray-400">
                  <span className="text-green-400 font-semibold">24/7 Emergency Support</span> {t('contact.emergencyAvailable')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-green-500/30">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-semibold">{t('contact.successMessage')}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg">
                <p className="text-red-400 font-semibold">{t('contact.errorMessage')}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.yourName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder={t('contact.enterName')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.emailAddress')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.serviceInterested')}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                >
                  <option value="">{t('contact.selectService')}</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.projectBudget')}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                >
                  <option value="">{t('contact.selectBudget')}</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/25 flex items-center justify-center gap-2 font-semibold disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t('contact.sendMessage')}
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-gray-400">
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