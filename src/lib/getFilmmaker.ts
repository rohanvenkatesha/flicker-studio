import creators from "@/data/filmmakers.json";
import films from "@/data/films.json";
import type { Film, Filmmaker } from "@/types";

export function getFilmmaker(id: string) {
  return {
    creator: (creators as Filmmaker[]).find(c => c.id === id),
    films: (films as Film[]).filter(f => f.directorId === id)
  };
}
