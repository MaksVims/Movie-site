import {IFilterGenre} from "#/filtersTypes";
import {IMovie} from "#/movieTypes";
import {getTitleGenreByRuName} from "+/getTitleGenrebyRuName";

export default function getGenresMovie(allGenres: IFilterGenre[], movie: IMovie): { ru: string, en: string }[] {
  return movie.genres.map(item => {
    return {
      ru: item.genre!,
      en: getTitleGenreByRuName(allGenres, item.genre)
    }
  })
}