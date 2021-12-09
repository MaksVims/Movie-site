import React, {FC} from 'react';
import {IMovie} from "#/movieTypes";
import Link from "next/link";
import {useFilters} from "@/contexts";
import formatFirstToUppercase from 'helpers/formatFirstToUppercase';
import {getTitleGenreByRuName} from '+/getTitleGenrebyRuName';

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
      <div className="text-sm md:flex md:flex-wrap md:justify-between md:items-start">
        <ul className="md:mr-6 space-y-1">
          <li>
            <span className="font-medium">Название: </span>
            <span className="text-gray-color">{movie.nameRu}</span>
          </li>
          <li>
            <span className="font-medium">Год выхода: </span>
            <span className="text-gray-color">{movie.year}</span>
          </li>
          <li>
            <span className="font-medium">Cтрана: </span>
            <span
              className="text-gray-color">{movie.countries.map(county => county.country).join(', ')}</span>
          </li>
          <li>
            <span className="font-medium">Оригинальное название: </span>
            <span className="text-gray-color">{movie.nameOriginal}</span>
          </li>
        </ul>
        <ul className="grid grid-cols-2 gap-y-4 gap-x-7 my-4">
          <li className="font-medium red-frame">
            <span className="mr-1">КП</span>
            <span>{movie.ratingKinopoisk}</span>
          </li>
          <li
            className="font-medium yellow-frame">
            <span className="mr-1">IMDB </span>
            <span>{movie.ratingImdb}</span>
          </li>
          <li className="red-frame">
            <span className="font-medium ">КП: </span>
            <span>{movie.ratingKinopoiskVoteCount} оценок</span>
          </li>
          <li className="yellow-frame">
            <span className="font-medium mr-1">IMDB: </span>
            <span>{movie.ratingImdbVoteCount} оценок</span>
          </li>
        </ul>
        <ul className="space-y-1">
          <li className="flex items-center">
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
          <li>
            <span className="font-medium">Описание: </span>
            <span className="text-gray-color leading-relaxed">{movie.description || movie.shortDescription}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCardContent;