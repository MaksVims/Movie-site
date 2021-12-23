import { IMovieForGrid, MovieDB } from 'types';

export class MovieForGrid implements IMovieForGrid {
  public movieId: number

  public nameRu: string

  public year: string

  public rating: string | null

  public posterUrlPreview: string | null

  constructor(movie: MovieDB) {
    if ('filmId' in movie) {
      this.movieId = movie.filmId
    } else {
      this.movieId = movie.kinopoiskId
    }

    if ('rating' in movie) {
      this.rating = movie.rating
    } else {
      this.rating = null
    }

    if ('posterUrlPreview' in movie) {
      this.posterUrlPreview = movie.posterUrlPreview
    } else {
      this.posterUrlPreview = null
    }

    this.nameRu = movie.nameRu
    this.year = `${movie.year}`
  }
}
