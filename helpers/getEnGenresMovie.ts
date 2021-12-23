import { IFilterGenre, ISingleMovie } from 'types';
import getTitleGenreByRuName from './getTitleGenrebyRuName';

export default function getGenresMovie(
  allGenres: IFilterGenre[],
  movie: ISingleMovie,
): { ru: string, en: string }[] {
  return movie.genres.map((item) => ({
    ru: item.genre!,
    en: getTitleGenreByRuName(allGenres, item.genre),
  }))
}
