
import { PressArticle, MusicalProject, VideoClip } from './types';

export const ARTIST_INFO = {
  name: 'Betia',
  baseline: 'Auteure-compositrice-interprète & Directrice Artistique',
  email: 'betia.herimalala@gmail.com',
  socials: {
    facebook: 'https://www.facebook.com/betiarakoto',
    instagram: 'https://www.instagram.com/betia_rkt/',
    youtube: 'https://www.youtube.com/@Betia_rkt',
    spotify: 'https://open.spotify.com/artist/36S78IuKubidUxMaDCXCDU',
  }
};

export const PRESS_ARTICLES: PressArticle[] = [
  {
    id: '1',
    title: 'Betia Radiovisionnaire',
    source: 'NoComment',
    date: '2025',
    url: 'https://www.nocomment.mg/betia-radiovisionnaire',
    excerpt: 'Découvrez le parcours unique de Betia, une artiste visionnaire qui redéfinit la scène musicale malgache.'
  },
  {
    id: '2',
    title: 'Concours Radiovision 2025 : Betia fait sensation',
    source: "L'Express de Madagascar",
    date: 'Juin 2025',
    url: 'https://www.lexpress.mg/2025/06/concours-radiovision-2025-betia-fait.html',
    excerpt: "Une performance remarquée qui place l'artiste parmi les favorites du concours national."
  },
  {
    id: '3',
    title: 'Betia en lice pour le titre mondial de Music Marvel',
    source: 'La 1ère France Info',
    date: '2024',
    url: 'https://la1ere.franceinfo.fr/reunion/madagascar-la-chanteuse-betia-en-lice-pour-le-titre-mondial-de-la-music-marvel-1141537.html',
    excerpt: "Le rayonnement international de la musique malgache porté par la voix exceptionnelle de Betia."
  }
];

export const ARTISTIC_PROJECTS: MusicalProject[] = [
  {
    id: 'lion-king',
    title: 'Le Roi Lion',
    type: 'Comédie Musicale',
    description: 'Une adaptation majestueuse fusionnant Broadway et l\'âme malgache. Direction artistique et performance scénique récompensée.',
    image: 'assets/LION-PHOTO-2025-12-25-04-31-37.jpg',
    roles: ['Directrice Artistique', 'Actrice (Nala)'],
    gallery: [
      'assets/LION-PHOTO-2025-12-25-04-31-37.jpg',
      'assets/LION-PHOTO-2025-12-25-04-31-37_1.jpg',
      'assets/LION-PHOTO-2025-12-25-04-31-38.jpg',
      'assets/LION-PHOTO-2025-12-25-04-31-38_1.jpg',
    ]
  },
  {
    id: 'dadju',
    title: 'Première Partie Dadju',
    type: 'Spectacle',
    description: 'Première partie du concert de Dadju à Madagascar en 2023. Prestation scénique devant plus de 10 000 spectateurs.',
    image: 'assets/PHOTO-2025-12-25-04-31-39_1.jpg',
    roles: ['Première Partie - Concert Dadju'],
    gallery: [
      'assets/PHOTO-2025-12-25-04-31-44.jpg',
      'assets/PHOTO-2025-12-25-04-31-45_1.jpg',
    ]
  },
  {
    id: 'acoustic-stories',
    title: 'Acoustic Stories',
    type: 'Spectacle',
    description: 'Une série de concerts intimistes où la voix et la guitare racontent des histoires de résilience.',
    image: 'assets/PHOTO-2025-12-25-04-31-40_1.jpg',
    roles: ['Chanteuse', 'Compositrice'],
    gallery: [
      'assets/PHOTO-2025-12-25-04-31-39.jpg',
      'assets/PHOTO-2025-12-25-04-31-40_1.jpg',
      'assets/PHOTO-2025-12-25-04-31-40_2.jpg',
    ]
  }
];

export const VIDEO_CLIPS: VideoClip[] = [
  {
    id: 'v1',
    title: 'Tsy ho ahy',
    youtubeId: 'NtC4Psc8VP0',
    youtubeUrl: 'https://www.youtube.com/watch?v=NtC4Psc8VP0&list=RDNtC4Psc8VP0&start_radio=1&pp=ygUKdHN5IGhvIGFoeaAHAQ%3D%3D',
    thumbnail: 'https://img.youtube.com/vi/NtC4Psc8VP0/hqdefault.jpg'
  },
  {
    id: 'v2',
    title: 'Live Performance',
    youtubeId: 'mRy_KkAYlBA',
    youtubeUrl: 'https://www.youtube.com/watch?v=mRy_KkAYlBA',
    thumbnail: 'https://img.youtube.com/vi/mRy_KkAYlBA/hqdefault.jpg'
  }
];

export const GALLERY_ASSETS = {
  hero: 'assets/main.png',
  about: 'assets/PHOTO-2025-12-25-04-31-43.jpg',
  feature: 'assets/PHOTO-2025-12-25-04-31-42.jpg',
  live: 'assets/PHOTO-STAGE.jpg'
};
