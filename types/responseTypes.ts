import {IMovieByFilterOrTop, IMoviePremier, IReview} from "#/movieTypes";

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

export interface IResponseReviewsByMovie {
  page: number,
  reviewAllCount: number,
  pagesCount: number,
  reviews: IReview[]
}