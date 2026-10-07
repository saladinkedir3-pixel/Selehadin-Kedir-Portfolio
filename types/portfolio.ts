export type VideoCategory = 'all' | 'youtube' | 'reels_tiktok';
export type GraphicCategory = 'all' | 'posters' | 'social_media';

export interface VideoWork {
  id: string;
  title: string;
  clientOrChannel: string;
  category: 'youtube' | 'reels_tiktok';
  categoryLabel: 'YouTube Video' | 'Reels / TikTok';
  duration: string;
  aspectRatio: '16:9' | '9:16';
  thumbnailUrl: string;
  videoUrl: string; // playable video or link
  youtubeId?: string;
  views?: string;
  retention?: string;
  description: string;
  editingHighlights: string[];
  software: string[];
}

export interface GraphicWork {
  id: string;
  title: string;
  client: string;
  category: 'posters' | 'social_media';
  categoryLabel: string;
  year: string;
  imageUrl: string;
  description: string;
  specifications: string;
  tools: string[];
}
