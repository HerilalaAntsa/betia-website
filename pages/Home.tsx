
import React from 'react';
import { Link } from 'react-router-dom';
import { ARTIST_INFO, PRESS_ARTICLES, GALLERY_ASSETS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-no-repeat transition-transform duration-[20000ms] scale-100 hover:scale-95"
          style={{ 
            backgroundImage: `url('${GALLERY_ASSETS.hero}')`, 
            backgroundPosition: 'left top', // place le sujet à gauche
            backgroundSize: 'contain',      // dézoome pour voir plus de corps
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#1A1A1A'      // couleur de fond si l'image ne couvre pas tout
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-[#F5F1ED] px-6">
          <ScrollReveal>
            <h1 className="text-7xl md:text-[10rem] font-serif mb-2 tracking-tighter leading-none italic">Betia</h1>
            <div className="w-24 h-px bg-[#B8976A] mx-auto mb-8"></div>
            <p className="text-[10px] md:text-xs tracking-[0.5em] mb-12 font-light max-w-2xl mx-auto uppercase opacity-80">
              {ARTIST_INFO.baseline}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link 
                to="/music" 
                className="group relative px-12 py-4 text-xs tracking-[0.3em] overflow-hidden"
              >
                <span className="relative z-10">{t('home.hero.discover')}</span>
                <div className="absolute inset-0 border border-[#F5F1ED]/30 group-hover:border-[#F5F1ED] transition-colors"></div>
                <div className="absolute inset-0 bg-[#F5F1ED] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link 
                to="/contact" 
                className="px-12 py-4 bg-[#B8976A] hover:bg-[#A0724D] text-white transition-all duration-300 tracking-[0.3em] text-xs"
              >
                {t('home.hero.booking')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Highlight avec Image Vibrante */}
      <section className="py-32 bg-[#F5F1ED] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="w-full lg:w-1/2">
                <ScrollReveal>
                    <img 
                      src={GALLERY_ASSETS.feature} 
                      alt="Betia - Vision Artistique" 
                      className="w-full h-[600px] object-cover shadow-2xl border-white border-[12px] md:object-center" 
                      style={{ objectPosition: 'left' }}
                    />
                </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
                <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#B8976A] mb-8 font-semibold">{t('home.artistWord.title')}</h2>
                <p className="text-3xl md:text-4xl font-serif leading-[1.4] italic mb-10">
                  "{t('home.artistWord.quote')}"
                </p>
                <p className="font-light text-lg opacity-60 leading-loose mb-12">
                   {t('home.artistWord.desc')}
                </p>
                <Link to="/about" className="text-xs tracking-[0.3em] border-b border-[#B8976A] pb-2 hover:opacity-60 transition-opacity">{t('home.artistWord.more')}</Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Production Preview Grid */}
      <section className="bg-[#1A1A1A] py-32 text-white">
        <div className="container mx-auto px-6 text-center mb-20">
            <ScrollReveal>
                <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#B8976A] mb-4">{t('home.portfolio.title')}</h2>
                <h3 className="text-5xl font-serif italic">{t('home.portfolio.subtitle')}</h3>
            </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
             <div className="relative h-[600px] group overflow-hidden border-r border-white/5">
               <img src="/assets/LION-PHOTO-2025-12-25-04-31-37.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Le Roi Lion" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all flex flex-col items-center justify-center p-8">
                    <h4 className="text-3xl font-serif mb-4">{t('home.portfolio.lion')}</h4>
                    <Link to="/artistic-direction" className="text-[10px] tracking-widest border border-white/30 px-6 py-2 group-hover:bg-white group-hover:text-black transition-all">{t('home.portfolio.seeProject')}</Link>
                </div>
             </div>
             <div className="relative h-[600px] group overflow-hidden">
               <img src="/assets/PHOTO-2025-12-25-04-31-43.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Spectacle Gatsby" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all flex flex-col items-center justify-center p-8">
                    <h4 className="text-3xl font-serif mb-4">{t('home.portfolio.gatsby')}</h4>
                    <Link to="/artistic-direction" className="text-[10px] tracking-widest border border-white/30 px-6 py-2 group-hover:bg-white group-hover:text-black transition-all">{t('home.portfolio.seeProject')}</Link>
                </div>
             </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
