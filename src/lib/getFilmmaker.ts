import creators from "@/data/filmmakers.json";
import films from "@/data/films.json";

export function getFilmmaker(id: string) {
  return {
    creator: creators.find(c => c.id === id),
    films: films.filter(f => f.directorId === id)
  };
}
