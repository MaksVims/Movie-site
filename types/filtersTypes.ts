export interface IFilterGenre {
  id: number,
  genre: string,
  title: string
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
  country?: number,
  genre?: number,
  ratingFrom?: number,
  ratingTo?: number,
  yearFrom?: number,
  yearTo?: number,
}