
export interface PressArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
}

export interface MusicalProject {
  id: string;
  title: string;
  type: 'Comédie Musicale' | 'Spectacle';
  description: string;
  image: string;
  roles?: string[];
  gallery?: string[];
}

export interface VideoClip {
  id: string;
  title: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
}
