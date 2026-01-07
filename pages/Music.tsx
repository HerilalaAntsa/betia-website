
import React from 'react';
import { VIDEO_CLIPS, ARTIST_INFO } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { useTranslation } from 'react-i18next';

const Music: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-24 bg-[#F5F1ED]">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-32">
          <h1 className="text-[10px] tracking-[0.5em] text-[#B8976A] uppercase mb-6 font-semibold">{t('music.discography')}</h1>
          <h2 className="text-6xl md:text-7xl font-serif italic">{t('music.title')}</h2>
          <div className="mt-12 w-16 h-px bg-[#B8976A] mx-auto opacity-30"></div>
        </ScrollReveal>

        {/* Spotify Section */}
        <section className="mb-48">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-2/5">
              <ScrollReveal>
                <h3 className="text-[10px] tracking-[0.5em] text-[#B8976A] uppercase mb-6 font-semibold">{t('music.streaming')}</h3>
                <h4 className="text-4xl font-serif mb-8 italic">{t('music.spotifyProfile')}</h4>
                <p className="font-light leading-relaxed mb-10 opacity-70 text-lg">
                  {t('music.spotifyDesc')}
                </p>
                <a 
                  href={ARTIST_INFO.socials.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-[#1DB954] text-white rounded-full text-xs tracking-[0.2em] font-bold hover:scale-105 transition-transform duration-300"
                >
                  {t('music.openSpotify')}
                </a>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-3/5">
              <ScrollReveal delay={200}>
                <div className="bg-white p-4 shadow-2xl rounded-2xl">
                  <iframe 
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/artist/36S78IuKubidUxMaDCXCDU?utm_source=generator&theme=0" 
                    width="100%" 
                    height="400" 
                    frameBorder="0" 
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section>
          <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-[10px] tracking-[0.5em] text-[#B8976A] uppercase mb-4 font-semibold">{t('music.videos')}</h3>
              <h4 className="text-4xl font-serif italic">{t('music.clips')}</h4>
            </div>
            <a 
              href={ARTIST_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] border-b border-[#B8976A] pb-2 hover:opacity-50 transition-opacity uppercase font-medium"
            >
              {t('music.youtube')}
            </a>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {VIDEO_CLIPS.map((video, index) => (
              <ScrollReveal key={video.id} delay={index * 150}>
                <a
                  href={video.youtubeUrl ? video.youtubeUrl : `https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden mb-6 bg-black shadow-xl">
                    <img 
                      src={video.thumbnail ? video.thumbnail : `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
                      alt={video.title} 
                      className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                      <div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <h5 className="text-xl font-serif italic tracking-wide">{video.title}</h5>
                    <span className="text-[10px] tracking-widest opacity-40 uppercase">{t('music.watch')}</span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <ScrollReveal className="mt-48 text-center py-24 border-t border-black/5">
          <p className="text-sm tracking-[0.3em] uppercase opacity-40 mb-8">{t('music.moreOn')}</p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
             <span className="text-xl font-serif font-bold">Deezer</span>
             <span className="text-xl font-serif font-bold">Apple Music</span>
             <span className="text-xl font-serif font-bold">Tidal</span>
             <span className="text-xl font-serif font-bold">Amazon Music</span>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Music;
