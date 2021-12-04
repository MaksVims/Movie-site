import {IResponseFilterGenre} from "#/filtersTypes";

export class MovieService {

  static async getFilters() {
    const res = await fetch('http://localhost:3001/api/filters')
    const filters: IResponseFilterGenre = await res.json()
    return filters
  }

}