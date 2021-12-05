export interface IMovieByFilterOrTop {
  filmId: number,
  nameRu: string,
  year: string,
  rating: string,
  posterUrlPreview: string,
  countries: [{ country: string }],
  description?: string
}

export interface IMoviePremier {
  kinopoiskId: number
  nameRu: string,
  year: number,
  rating: number,
  posterUrlPreview: string,
  countries: [{ country: string }],
  duration: number,
  premiereRu: string
  description?: string
}

export interface IMovie {
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