import { makeAutoObservable } from 'mobx';
import { IMovieForGrid, MovieDB, SortType } from 'types';
import { getCleanListMoviesForGrid } from 'helpers';
import { MovieForGrid } from '@/factory/MovieForGrid';
import CollectionState from '@/store/CollectionState';

class MoviesState {
  movies: IMovieForGrid[]

  filter: SortType

  constructor() {
    this.movies = []
    this.filter = SortType.DEFAULT
    makeAutoObservable(this)
  }

  setMovies(movies: MovieDB[]) {
    const newMovies = movies.map((movie) => new MovieForGrid(movie))
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
    const favoriteMovies = CollectionState.moviesToCollection

    switch (this.filter) {
      case SortType.FAVORITE:
        return this.movies
          .filter((movie) => favoriteMovies
            .find((favorite) => favorite.movieId === movie.movieId))
      case SortType.RATING:
        if (this.movies[0]?.rating) {
          return this.movies
            .slice()
            .sort((a, b) => Number(b.rating) - Number(a.rating))
        }
        return this.movies

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
