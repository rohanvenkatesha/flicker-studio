export type Film = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  banner?: string;
  poster: string;
  youtubeVideoId: string;
  duration: number | string;
  language: string;
  genre?: string;
  genres?: string[];
  year: number;
  views: number | string;
  rating: number;
  directorId?: string;
  featured: boolean;
  moods?: string[];
};
