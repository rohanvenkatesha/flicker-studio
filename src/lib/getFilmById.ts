import films from "@/data/films.json";
import { Film } from "@/types";

export function getFilmById(id: string): Film | undefined {
  return (films as Film[]).find(f => f.id === id);
}
