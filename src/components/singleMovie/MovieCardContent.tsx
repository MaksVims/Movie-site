import React, {FC} from 'react';
import {IMovie} from "#/movieTypes";
import Link from "next/link";
import {getTitleGenreByRuName} from "../../../helpers/getTitleGenrebyRuName";
import {useFilters} from "@/contexts";
import formatFirstToUppercase from 'helpers/formatFirstToUppercase';

interface IMovieCardContent {
  movie: IMovie
}

const MovieCardContent: FC<IMovieCardContent> = ({movie}) => {
  const filters = useFilters()
  if (!filters) return <div>Loading...</div>

  return (
    <div className="mt-2 w-full">
      <h1 className="font-bold text-2xl mb-4">
        {movie.nameRu}
      </h1>
      <div className="text-sm">
        <ul>
          <li className="movie_card_content_lh">
            <span className="font-medium">Название: </span>
            <span className="movie_card_content_text_color">{movie.nameRu}</span>
          </li>
          <li className="movie_card_content_lh">
            <span className="font-medium">Год выхода: </span>
            <span className="movie_card_content_text_color">{movie.year}</span>
          </li>
          <li className="movie_card_content_lh">
            <span className="font-medium">Cтрана: </span>
            <span
              className="movie_card_content_text_color">{movie.countries.map(county => county.country).join(', ')}</span>
          </li>
          <li className="movie_card_content_lh">
            <span className="font-medium">Оригинальное название: </span>
            <span className="movie_card_content_text_color">{movie.nameOriginal}</span>
          </li>
        </ul>
        <ul className="grid grid-cols-2 gap-4 gap-x-8 my-4">
          <li className="font-medium movie_card_content_kp_rate">
            <span className="mr-1">КП </span>
            <span>{movie.ratingKinopoisk}</span>
          </li>
          <li
            className="font-medium movie_card_content_imdb_rate">
            <span>IMDB </span>
            <span>{movie.ratingImdb}</span>
          </li>
          <li className="movie_card_content_kp_rate">
            <span className="font-medium mr-1">КП: </span>
            <span>{movie.ratingKinopoiskVoteCount} оценок</span>
          </li>
          <li className="movie_card_content_imdb_rate">
            <span className="font-medium mr-1">IMDB: </span>
            <span>{movie.ratingImdbVoteCount} оценок</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center movie_card_content_lh">
            <span className="font-medium mr-1">Категории: </span>
            <div>
              {movie.genres.map((itemGenre, idx) => (
                <React.Fragment key={itemGenre.genre + idx}>
                  <span>{idx === 0 ? `` : ' / '}</span>
                  <Link
                    href={`/${getTitleGenreByRuName(filters.genres, itemGenre.genre)}`}
                  >
                    <a className="text-blue-400 underline">
                      {formatFirstToUppercase(itemGenre.genre)}
                    </a>
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </li>
          <li className="movie_card_content_lh">
            <span className="font-medium">Описание: </span>
            <span className="movie_card_content_text_color">{movie.description || movie.shortDescription}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCardContent;