
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import { ARTIST_INFO } from '../constants';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch('https://formspree.io/f/xwkgyyqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="text-center mb-20">
          <h1 className="text-xs tracking-[0.5em] text-[#B8976A] uppercase mb-4">{t('contact.title')}</h1>
          <h2 className="text-5xl font-serif italic">{t('contact.subtitle')}</h2>
        </header>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-3xl font-serif mb-10">Booking & Inquiries</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm rounded-lg text-[#B8976A]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-1">{t('contact.form.location', 'Localisation')}</h4>
                  <p className="font-light">{t('contact.location')}</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="text-xs font-bold tracking-widest uppercase mb-3">{t('contact.socials.facebook', 'Suivez-nous')}</h4>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-6">{t('contact.info')}</h4>
              <div className="flex space-x-6">
                <a href={ARTIST_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#B8976A] transition-colors border-b border-black/10 pb-1">
                  <Facebook size={16} /> {t('contact.socials.facebook')}
                </a>
                <a href={ARTIST_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#B8976A] transition-colors border-b border-black/10 pb-1">
                  <Instagram size={16} /> {t('contact.socials.instagram')}
                </a>
                <a href={ARTIST_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#B8976A] transition-colors border-b border-black/10 pb-1">
                  <Youtube size={16} /> {t('contact.socials.youtube')}
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 bg-white p-10 lg:p-16 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t('contact.form.name') + '...'}
                    className="border-b border-gray-200 py-3 focus:outline-none focus:border-[#B8976A] font-light transition-colors"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder={t('contact.form.email') + '...'}
                    className="border-b border-gray-200 py-3 focus:outline-none focus:border-[#B8976A] font-light transition-colors"
                  />
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest font-bold">{t('contact.form.subject')}</label>
                <input 
                  type="text" 
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder={t('contact.form.subject') + '...'}
                  className="border-b border-gray-200 py-3 focus:outline-none focus:border-[#B8976A] font-light transition-colors"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold">{t('contact.form.message')}</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder={t('contact.form.message') + '...'}
                  className="border-b border-gray-200 py-3 focus:outline-none focus:border-[#B8976A] font-light transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-12 py-4 bg-[#1A1A1A] hover:bg-[#B8976A] text-white transition-all duration-300 tracking-widest text-xs font-bold flex items-center justify-center gap-2"
              >
                {t('contact.form.send')} <Send size={16} />
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm font-medium animate-pulse">{t('contact.form.success')}</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm font-medium animate-pulse">{t('contact.form.error')}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
