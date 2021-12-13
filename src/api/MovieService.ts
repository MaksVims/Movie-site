import {IFilterOptions} from "#/filtersTypes";
import {IResponseMoviesByFiltersOrTop, IResponseMoviesPremieres, IResponseSearchByKeyWord} from "#/responseTypes";
import {IMovie} from "#/movieTypes";
import getStringMonth from "+/getStringMonth";
import fetchMovies from "+/fetchMoviesOrStaff";
import getUrlFiltersMovies from "+/getUrlFiltersMovies";

export class MovieService {

  static async getPremiers() {
    const date = new Date()
    const year = date.getFullYear()
    const month = getStringMonth(date.getMonth())
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month.toUpperCase()}`

    const result: IResponseMoviesPremieres = await fetchMovies(url)
    return result
  }

  static async getMoviesByFilters(filters: IFilterOptions) {
    const url = getUrlFiltersMovies(filters)
    const result: IResponseMoviesByFiltersOrTop = await fetchMovies(url)
    return result
  }

  static async getMovieById(movieId: number) {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
    const movie: IMovie = await fetchMovies(url)
    return movie
  }

  static async getTopMovies(page: number = 15) {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`
    const result: IResponseMoviesByFiltersOrTop = await fetchMovies(url)
    return result
  }

  static async getMoviesByKeyWord(keyword: string, page: number) {
    const encodeWord = encodeURIComponent(keyword)
    const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encodeWord}&page=${page}`
    const result: IResponseSearchByKeyWord = await fetchMovies(url)
    return result
  }
}