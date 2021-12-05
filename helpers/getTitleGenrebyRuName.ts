import {IFilterGenre} from "#/filtersTypes";

export function getTitleGenreByRuName(filters: IFilterGenre[], genre: string): string {
  const filterGenre = filters.find(filterItem => filterItem.genre.toLowerCase() === genre.toLowerCase())
  if (filterGenre) return filterGenre.title
  return ''
}