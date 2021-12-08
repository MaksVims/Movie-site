import {IMovieForGrid, TypeMovieDB} from "#/movieTypes";
import {MovieForGrid} from "../src/factory/MovieForGrid";

export default function transformDBMoviesToMoviesGrid(movies: TypeMovieDB[]): IMovieForGrid[] {
  return movies.map(movie => new MovieForGrid(movie))
}