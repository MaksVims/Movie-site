import {IResponseFilterGenre} from "#/filtersTypes";
import {IMovie} from "#/movieTypes";
import {getTitleGenreByRuName} from "+/getTitleGenrebyRuName";

export default function getGenresMovie(filters: IResponseFilterGenre, movie: IMovie): { ru: string, en: string }[] {
  return movie.genres.map(item => {
    return {
      ru: item.genre!,
      en: getTitleGenreByRuName(filters.genres, item.genre)
    }
  })
}