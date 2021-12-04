import {IMovieByFilter, IMoviePremier} from "#/movieTypes";

export interface IResponseMoviesByFilters {
  pagesCount: number,
  films: IMovieByFilter[]
}

export interface IResponseSearchByKeyWord {
  keyword: string,
  pagesCount: number,
  searchFilmsCountResult: number,
  films: IMovieByFilter[]
}

export interface IResponseMoviesPremieres {
  total: number,
  items: IMoviePremier[]
}