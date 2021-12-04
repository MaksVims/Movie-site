
export interface IFilterGenre {
  id: number,
  genre: string
}

export interface IFilterCountry {
  id: number,
  country: string
}

export interface IFilterGenreResponse {
  genres: IFilterGenre[],
  countries: IFilterCountry[]
}
