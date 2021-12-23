import { MovieForGrid } from '@/factory/MovieForGrid';

export default function getCleanListMoviesForGrid(movies: MovieForGrid[]) {
  return movies.filter((movie) => movie.nameRu && movie.year)
}
