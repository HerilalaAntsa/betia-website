
import React, { useState, useEffect, useRef } from 'react';
import { ARTISTIC_PROJECTS, ARTIST_INFO } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { useTranslation } from 'react-i18next';

const ArtisticDirection: React.FC = () => {
  const [openGallery, setOpenGallery] = useState<string | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const galleryModalRef = useRef<HTMLDivElement>(null);

  // Fermer la galerie sur Esc
  useEffect(() => {
    if (!openGallery) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenGallery(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openGallery]);

  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-24 bg-[#1A1A1A] text-[#F5F1ED]">
      {/* Galerie modale */}
      {openGallery && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80"
          onClick={e => {
            // Ferme si on clique en dehors du contenu principal
            if (galleryModalRef.current && e.target === e.currentTarget) setOpenGallery(null);
          }}
        >
          <div
            ref={galleryModalRef}
            className="relative bg-[#1A1A1A] rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <button
              className="absolute top-4 right-4 text-[#B8976A] text-2xl font-bold hover:opacity-70"
              onClick={() => setOpenGallery(null)}
              aria-label="Fermer la galerie"
            >
              ×
            </button>
            <h4 className="text-2xl font-serif mb-8 italic text-center">{t('artistic.gallery')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ARTISTIC_PROJECTS.find(p => p.id === openGallery)?.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Galerie spectacle ${i + 1}`}
                  className="w-full h-72 object-cover rounded-lg shadow-lg border border-[#B8976A]/20 bg-[#222] cursor-zoom-in"
                  onClick={() => setPreviewImg(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Aperçu plein écran (lightbox) */}
      {previewImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setPreviewImg(null)}>
          <img
            src={previewImg}
            alt="Aperçu galerie"
            className="max-w-4xl max-h-[90vh] rounded-xl shadow-2xl border-4 border-[#B8976A] bg-[#222]"
            style={{ cursor: 'zoom-out' }}
          />
          <button
            className="absolute top-8 right-8 text-[#B8976A] text-3xl font-bold hover:opacity-70"
            onClick={e => { e.stopPropagation(); setPreviewImg(null); }}
            aria-label="Fermer l'aperçu"
          >
            ×
          </button>
        </div>
      )}
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-32">
          <h1 className="text-[10px] tracking-[0.5em] text-[#B8976A] uppercase mb-6 font-semibold">{t('artistic.expertise')}</h1>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8">{t('artistic.title')}</h2>
          <p className="max-w-2xl mx-auto font-light opacity-50 leading-relaxed text-lg">
            {t('artistic.desc')}
          </p>
        </ScrollReveal>

        <div className="space-y-48">
          {ARTISTIC_PROJECTS.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center`}
            >
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 border-[1px] border-white/10 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 text-left">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-[#B8976A]"></div>
                  <span className="text-[10px] tracking-[0.4em] text-[#B8976A] uppercase font-bold">{project.type}</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-serif mb-10 italic leading-tight">{project.title}</h3>
                <p className="font-light leading-loose text-lg opacity-70 mb-12 max-w-xl">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12 border-t border-white/10 pt-8">
                  <div>
                    <span className="block text-[10px] tracking-widest text-[#B8976A] uppercase mb-2">{t('artistic.status')}</span>
                    <span className="text-sm font-light">{t('artistic.soldout')}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-widest text-[#B8976A] uppercase mb-2">{t('artistic.role')}</span>
                    {Array.isArray(project.roles) && project.roles.length > 0
                      ? project.roles.map((role, i) => (
                          <span key={i} className="text-sm font-light block">{role}</span>
                        ))
                      : <span className="text-sm font-light">Directrice Artistique</span>
                    }
                  </div>
                </div>
                
                {Array.isArray(project.gallery) && project.gallery.length > 0 && (
                  <button
                    className="text-[10px] tracking-[0.3em] border-b border-[#B8976A] pb-2 hover:opacity-50 transition-opacity uppercase font-medium"
                    onClick={() => setOpenGallery(project.id)}
                  >
                    {t('artistic.gallery')}
                  </button>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal className="mt-48 text-center py-24 border-t border-white/5 bg-[#1f1f1f]">
          <h4 className="text-4xl font-serif mb-8 italic">{t('artistic.visionTitle')}</h4>
          <p className="max-w-xl mx-auto font-light opacity-50 mb-12 text-lg">
            {t('artistic.visionDesc')}
          </p>
          <a 
            href={`mailto:${ARTIST_INFO.email}`}
            className="inline-block px-14 py-5 bg-[#B8976A] hover:bg-[#A0724D] text-white transition-all duration-300 tracking-[0.3em] text-xs font-bold"
          >
            {t('artistic.discuss')}
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ArtisticDirection;
