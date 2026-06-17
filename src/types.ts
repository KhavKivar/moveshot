export interface Project {
  id: string;
  title: string;
  category: 'Comercial' | 'Videoclip' | 'Narrativo' | 'Acción';
  thumbnailUrl: string;
  videoUrl: string; // Embeddable YouTube/Vimeo or public MP4
  description: string;
  client: string;
  role: string;
  year: string;
  camera?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GearItem {
  category: string;
  items: string[];
}
