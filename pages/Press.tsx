
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PRESS_ARTICLES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { useTranslation } from 'react-i18next';

const Press: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-24 bg-[#F5F1ED]">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-24">
          <h1 className="text-[10px] tracking-[0.5em] text-[#B8976A] uppercase mb-6 font-semibold">{t('press.news')}</h1>
          <h2 className="text-6xl md:text-7xl font-serif italic">{t('press.title')}</h2>
          <div className="mt-12 w-16 h-px bg-[#B8976A] mx-auto opacity-30"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRESS_ARTICLES.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 150}>
              <div className="bg-white p-12 border border-black/5 flex flex-col h-full hover:shadow-2xl transition-all duration-500 group relative">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#B8976A] transition-all duration-500 group-hover:h-full"></div>
                
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#B8976A]">{article.source}</span>
                  <span className="text-[10px] tracking-widest opacity-30">{article.date}</span>
                </div>
                
                <h3 className="text-2xl font-serif mb-8 leading-snug flex-grow hover:text-[#B8976A] transition-colors">{article.title}</h3>
                
                <p className="text-sm font-light text-gray-500 mb-10 leading-loose italic">
                  "{article.excerpt}"
                </p>
                
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-[10px] tracking-[0.3em] font-bold hover:text-[#B8976A] transition-colors border-t border-gray-100 pt-8 mt-auto uppercase"
                >
                  {t('press.read')} <ExternalLink size={14} className="opacity-50" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-32 p-16 lg:p-24 bg-[#1A1A1A] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8976A]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-4xl font-serif mb-8 italic relative z-10">{t('press.pressSpace')}</h3>
          <p className="max-w-2xl mx-auto font-light opacity-60 mb-12 leading-loose text-lg relative z-10">
            {t('press.pressDesc')}
          </p>
          <a 
            href={`mailto:betia.herimalala@gmail.com?subject=Demande Kit Média`}
            className="inline-block px-12 py-4 border border-white/20 hover:border-[#B8976A] hover:text-[#B8976A] transition-all duration-300 tracking-[0.3em] text-[10px] font-bold uppercase relative z-10"
          >
            {t('press.askKit')}
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Press;
