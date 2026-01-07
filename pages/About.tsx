
import React from 'react';
import { GALLERY_ASSETS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-24 bg-[#F5F1ED]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <div className="relative">
                <img 
                  src={GALLERY_ASSETS.about} 
                  alt="Betia Herimalala" 
                  className="w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B8976A] -z-10"></div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <ScrollReveal>
                <h1 className="text-[10px] tracking-[0.5em] text-[#B8976A] uppercase mb-6 font-semibold">{t('about.bio')}</h1>
                <h2 className="text-5xl font-serif mb-10 leading-tight italic">{t('about.name')}</h2>
                <div className="space-y-6 text-[#1A1A1A] leading-loose tracking-wide font-light opacity-80">
                  <p>{t('about.p1')}</p>
                  <p>{t('about.p2')}</p>
                  <p>{t('about.p3')}</p>
                </div>
                <div className="mt-16 p-10 border border-[#B8976A]/20 italic font-serif text-2xl text-[#B8976A] bg-white">
                  "{t('about.quote')}"
                </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
