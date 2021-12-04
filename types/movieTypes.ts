
export interface IMovieByFilter {
  filmId: number,
  nameRu: string,
  year: string,
  rating: number,
  posterUrlPreview: string,
  countries: [{country: string}],
  description?: string
}

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

export interface IMovie {
  nameRu: string,
  posterUrl: string,
  reviewsCount: number,
  ratingGoodReview: number,
  ratingKinopoisk: number,
  ratingKinopoiskVoteCount: number,
  ratingImdb: number,
  ratingImdbVoteCount: number,
  webUrl: string,
  year: number,
  filmLength: number,
  description: string,
  shortDescription: string,
  slogan: string
}