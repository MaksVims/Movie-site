import {IMovieForGrid, TypeMovieDB} from "#/movieTypes";

export class MovieForGrid implements IMovieForGrid {
  public movieId: number
  public nameRu: string
  public year: string
  public rating: string
  public posterUrlPreview: string
  public countries: [{ country: string }]
  public premiereRu?: string
  public description?: string

  constructor(movie: TypeMovieDB) {
    // @ts-ignore
    this.movieId = movie.filmId || movie.kinopoiskId
    this.nameRu = movie.nameRu
    this.year = movie.year + ''
    this.rating = movie.rating === undefined ? '' : movie.rating + ''
    this.posterUrlPreview = movie.posterUrlPreview
    this.countries = movie.countries
    // @ts-ignore
    this.premiereRu = movie?.premiereRu || ''
    this.description = movie.description

    if (!this.premiereRu) delete this.premiereRu
    if (!this.description) delete this.description
  }
}