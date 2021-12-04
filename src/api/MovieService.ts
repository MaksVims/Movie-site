import {IFilterOptions, IResponseFilterGenre} from "#/filtersTypes";
import getStringMonth from "../../helpers/getStringMonth";
import fetchMovies from "../../helpers/fetchMovies";
import {IResponseMoviesByFiltersOrTop, IResponseMoviesPremieres} from "#/responseTypes";
import {IMovie} from "#/movieTypes";

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
      const result: IResponseMoviesPremieres = await res.json()
      return result
    } catch (e) {
      console.error(e)
    }
  }

  static async getMoviesByFilters(filters: IFilterOptions) {
    //  Todo
  }

  static async getMovieById(movieId: number) {
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
      const res = await fetchMovies(url)
      const movie: IMovie = await res.json()
      return movie
    } catch (e) {
      console.error(e)
    }
  }

  static async getTopMovies(page: number = 15) {
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`
      const res = await fetchMovies(url)
      const result: IResponseMoviesByFiltersOrTop = await res.json()
      return result
    } catch (e) {
      console.error(e)
    }
  }
}