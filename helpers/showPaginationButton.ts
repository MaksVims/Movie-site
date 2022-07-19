import { SortType } from '../types/filtersTypes';
import { MovieForGrid } from '@/factory/MovieForGrid';

export function showPaginationButton(
  currentPage: number,
  totalPages: number,
  filter: SortType,
  filteredMovies: MovieForGrid[]) {
    return currentPage < totalPages
    && filter !== SortType.FAVORITE
    && filteredMovies.length
}