import { IFilterOptions } from 'types';

export default function getUrlFiltersMovies(options: IFilterOptions) {
  const base = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?order=RATING&type=FILM'

  const query = Object.entries(options).map((arr: Array<number | string>) => {
    const [key, value] = arr
    return `&${key}=${value}`
  }).join('')

  return base + query
}
