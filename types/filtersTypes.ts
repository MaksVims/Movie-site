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
