import {makeAutoObservable} from "mobx";
import {MovieForGrid} from "@/factory/MovieForGrid";
import {TypeMovieDB} from "#/movieTypes";
import {SortType} from "#/filtersTypes";
import CollectionState from "@/store/CollectionState";
import getCleanListMoviesForGrid from "+/getCleanListMoviesForGrid";

class MoviesState {

  movies: MovieForGrid[]
  filter: SortType

  constructor() {
    this.movies = []
    this.filter = SortType.DEFAULT
    makeAutoObservable(this)
  }

  setMovies(movies: TypeMovieDB[]) {
    const newMovies = movies.map(movie => new MovieForGrid(movie))
    this.movies = [...this.movies, ...getCleanListMoviesForGrid(newMovies)]
  }

  setFilter(filter: SortType) {
    this.filter = filter
  }

  resetMovies() {
    this.movies = []
  }

  reset() {
    this.filter = SortType.DEFAULT
    this.movies = []
  }

  get filteredMovies(): MovieForGrid[] {
    switch (this.filter) {
      case SortType.FAVORITE:
        const favoriteMovies = CollectionState.moviesToCollection
        return this.movies.filter(movie => {
          return favoriteMovies.find(favorite => favorite.movieId === movie.movieId)
        })
      case SortType.RATING:
        if (this.movies[0]?.rating) {
          return this.movies
            .slice()
            .sort((a, b) => Number(b.rating) - Number(a.rating))
        } else {
          return this.movies
        }
      case SortType.YEAR:
        return this.movies
          .slice()
          .sort((a, b) => Number(b.year) - Number(a.year))
      case SortType.NAME:
        return this.movies
          .slice()
          .sort((a, b) => a.nameRu.localeCompare(b.nameRu))
      case SortType.DEFAULT:
        return this.movies
      default:
        return this.movies
    }
  }
}

export default new MoviesState()