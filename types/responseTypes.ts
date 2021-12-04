import {IMovieByFilterOrTop, IMoviePremier} from "#/movieTypes";

export interface IResponseMoviesByFiltersOrTop {
  pagesCount: number,
  films: IMovieByFilterOrTop[]
}

export interface IResponseSearchByKeyWord {
  keyword: string,
  pagesCount: number,
  searchFilmsCountResult: number,
  films: IMovieByFilterOrTop[]
}

export interface IResponseMoviesPremieres {
  total: number,
  items: IMoviePremier[]
}