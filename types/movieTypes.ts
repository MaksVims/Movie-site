export interface IMovieByFilterOrTop {
  filmId: number,
  nameRu: string,
  year: string,
  rating: string,
  posterUrlPreview: string,
}

export interface IMoviePremier {
  kinopoiskId: number
  nameRu: string,
  year: number,
  posterUrlPreview: string,
}

export type MovieDB = IMoviePremier | IMovieByFilterOrTop | IPersonMovie

export interface IPersonMovie {
  filmId: number,
  nameRu: string,
  year: string,
  rating: string,
}

export interface IMovieForGrid {
  movieId: number,
  nameRu: string,
  year: string,
  rating: string | null,
  posterUrlPreview: string | null,
}

export interface ISingleMovie {
  nameRu: string,
  nameOriginal: string,
  kinopoiskId: number
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
  slogan: string,
  countries: [{ country: string }],
  genres: [{ genre: string }],
}