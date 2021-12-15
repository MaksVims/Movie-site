import {IFilterOptions} from "#/filtersTypes";
import {
  IResponseMoviesByFiltersOrTop,
  IResponseMoviesPremieres,
  IResponseReviewsByMovie,
  IResponseSearchByKeyWord
} from "#/responseTypes";
import {ISingleMovie} from "#/movieTypes";
import getStringMonth from "+/getStringMonth";
import fetchMovies from "+/fetchMoviesOrStaff";
import getUrlFiltersMovies from "+/getUrlFiltersMovies";

export class MovieService {

  static async getPremiers() {
    const date = new Date()
    const year = date.getFullYear()
    const month = getStringMonth(date.getMonth())
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month.toUpperCase()}`

    return await fetchMovies(url) as IResponseMoviesPremieres
  }

  static async getMoviesByFilters(filters: IFilterOptions) {
    const url = getUrlFiltersMovies(filters)
    return await fetchMovies(url) as IResponseMoviesByFiltersOrTop
  }

  static async getMovieById(movieId: number) {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
    return await fetchMovies(url) as ISingleMovie
  }

  static async getTopMovies(page: number = 15) {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`
    return await fetchMovies(url) as IResponseMoviesByFiltersOrTop
  }

  static async getMoviesByKeyWord(keyword: string, page: number) {
    const encodeWord = encodeURIComponent(keyword)
    const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encodeWord}&page=${page}`
    return await fetchMovies(url) as IResponseSearchByKeyWord
  }

  static async getReviewsByMovie(movieId:number, page:number = 1) {
    const url = `https://kinopoiskapiunofficial.tech/api/v1/reviews?filmId=${movieId}&page=${page}`
    return await fetchMovies(url) as IResponseReviewsByMovie
  }
}