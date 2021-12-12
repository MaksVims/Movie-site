import React, {FC} from 'react';
import getProducerFromList from "+/getProducerFromList";
import getActorsFromList from "+/getActorsFromList";
import getEnGenresMovie from "+/getEnGenresMovie";
import {IMovie} from "#/movieTypes";
import {IStaffByMovie} from "#/staffTypes";
import {IResponseFilterGenre} from '#/filtersTypes';
import ListGenres from "@/components/singleMovie/ListGenres";
import Link from "next/link";
import ListActors from "@/components/singleMovie/ListActors";

interface MovieDescriptionProps {
  movie: IMovie,
  staff: IStaffByMovie[],
  filters: IResponseFilterGenre
}

const MovieDescription: FC<MovieDescriptionProps> = ({movie, filters, staff,}) => {
  const producer = getProducerFromList(staff)
  const actors = getActorsFromList(staff)
  const genres = getEnGenresMovie(filters, movie)

  return (
    <ul className="space-y-1">
      <li>
        <ListGenres genres={genres}/>
      </li>
      <li className="flex items-center">
        <span className="font-medium mr-1">Режиссер: </span>
        <Link href={`/search?producer=${producer?.staffId}`}>
          <a className="text-blue-400 underline">
            {producer?.nameRu!}
          </a>
        </Link>
      </li>
      <li>
        <ListActors actors={actors}/>
      </li>
      <li>
        <span className="font-medium">Описание: </span>
        <span className="text-gray-color leading-relaxed">{movie.description || movie.shortDescription}</span>
      </li>
    </ul>
  );
};

export default MovieDescription;