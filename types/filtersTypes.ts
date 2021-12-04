export interface IFilterGenre {
  id: number,
  genre: string
}

export interface IFilterCountry {
  id: number,
  country: string
}

export interface IResponseFilterGenre {
  genres: IFilterGenre[],
  countries: IFilterCountry[]
}

export interface IFilterOptions {
  page: number
  country?: Array<number>,
  genre?: Array<number>,
  ratingFrom?: number,
  ratingTo?: number,
  yearFrom?: number,
  yearTo?: number,
}