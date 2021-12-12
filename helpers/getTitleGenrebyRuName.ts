import {IFilterGenre} from "#/filtersTypes";

export function getTitleGenreByRuName(allGenres: IFilterGenre[], genre: string): string {
  const filterGenre = allGenres.find(genreItem => genreItem.genre.toLowerCase() === genre.toLowerCase())
  if (filterGenre) return filterGenre.title
  return ''
}