import {IResponseFilterGenre} from "#/filtersTypes";
import getStringMonth from "../../helpers/getStringMonth";
import fetchMovies from "../../helpers/fetchMovies";
import {IResponseMoviesPremieres} from "#/responseTypes";

export class MovieService {

  static async getFilters() {
    try {
      const res = await fetch('http://localhost:3001/api/filters')
      const filters: IResponseFilterGenre = await res.json()
      return filters
    } catch (e) {
      console.error(e)
    }
  }

  static async getPremiers() {
    const date = new Date()
    const year = date.getFullYear()
    const month = getStringMonth(date.getMonth())
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month.toUpperCase()}`

    try {
      const res = await fetchMovies(url)
      const result: IResponseMoviesPremieres= await res.json()
      return result
    } catch (e) {
      console.error(e)
    }
  }

}