import films from "@/data/films.json";
import { Film } from "@/types";

export function getAllFilms(): Film[] {
  return films as Film[];
}

export function getFeaturedFilms(): Film[] {
  return getAllFilms().filter(f => f.featured);
}
