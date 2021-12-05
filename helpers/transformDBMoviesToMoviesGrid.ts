import {IMovieForGrid, TypeMovieDB} from "#/movieTypes";
import {MovieForGrid} from "../factories/MovieForGrid";

export default function transformDBMoviesToMoviesGrid(movies: TypeMovieDB[]): IMovieForGrid[] {
  return movies.map(movie => new MovieForGrid(movie))
}