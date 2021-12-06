import {IFilterOptions, IResponseFilterGenre} from "#/filtersTypes";
import {IResponseMoviesByFiltersOrTop, IResponseMoviesPremieres} from "#/responseTypes";
import {IMovie} from "#/movieTypes";
import getStringMonth from "+/getStringMonth";
import fetchMovies from "+/fetchMovies";
import getUrlFiltersMovies from "+/getUrlFiltersMovies";

export class MovieService {

  static async getFilters() {
    const res = await fetch('http://localhost:3001/api/filters')
    const filters: IResponseFilterGenre = await res.json()
    return filters
  }

  static async getPremiers() {
    const date = new Date()
    const year = date.getFullYear()
    const month = getStringMonth(date.getMonth())
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month.toUpperCase()}`

    const res = await fetchMovies(url)
    const result: IResponseMoviesPremieres = await res.json()
    return result
  }

  static async getMoviesByFilters(filters: IFilterOptions) {
    const url = getUrlFiltersMovies(filters)
    const res = await fetchMovies(url)
    const result: IResponseMoviesByFiltersOrTop = await res.json()
    return result
  }

  static async getMovieById(movieId: number) {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
    const res = await fetchMovies(url)
    const movie: IMovie = await res.json()
    return movie
  }

  static async getTopMovies(page: number = 15) {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`
    const res = await fetchMovies(url)
    const result: IResponseMoviesByFiltersOrTop = await res.json()
    return result
  }
}