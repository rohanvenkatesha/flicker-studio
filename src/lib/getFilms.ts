import films from "@/data/films.json";
import { Film, Filmmaker } from "@/types";
import creators from "@/data/filmmakers.json";

export function getAllFilms(): Film[] {
  return films as Film[];
}

export function getFeaturedFilms(): Film[] {
  return getAllFilms().filter(f => f.featured);
}

export function getFilmsByLanguage(language: string): Film[] {
  return getAllFilms().filter(
    f => f.language?.toLowerCase() === language.toLowerCase()
  );
}

export function getFilmsByGenre(genre: string): Film[] {
  return getAllFilms().filter(f => {
    const g = f.genre ?? f.genres?.[0];
    return g?.toLowerCase().includes(genre.toLowerCase());
  });
}

export function getNewReleases(limit?: number): Film[] {
  const sorted = [...getAllFilms()].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getFilmById(id: string): Film | undefined {
  return (films as Film[]).find(f => f.id === id);
}

export function getFilmmaker(id: string) {
  return {
    creator: (creators as Filmmaker[]).find(c => c.id === id),
    films: (films as Film[]).filter(f => f.directorId === id)
  };
}
