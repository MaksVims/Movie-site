import React, { FC } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { ISingleMovie, IStaffByMovie } from 'types';
import { getActorsFromList, getEnGenresMovie, getProducerFromList } from 'helpers';
import { FiltersState } from '@/store';
import { ListActors, ListGenres } from '@/components/singleMovie';

interface MovieDescriptionProps {
  movie: ISingleMovie,
  staff: IStaffByMovie[],
}

const MovieDescription: FC<MovieDescriptionProps> = ({ movie, staff }) => {
  const { allGenres } = FiltersState
  const producer = getProducerFromList(staff)
  const actors = getActorsFromList(staff, 15)
  const genres = getEnGenresMovie(allGenres, movie)

  return (
    <ul className="space-y-1">
      <li>
        <ListGenres genres={genres} />
      </li>
      <li className="flex items-center">
        <span className="font-medium mr-1">
          Режиссер:
        </span>
        <Link href={`/person/=${producer?.staffId}`}>
          <a className="text-blue-400 underline">
            {producer?.nameRu!}
          </a>
        </Link>
      </li>
      <li>
        <ListActors actors={actors} />

      </li>
      <li>
        <span className="font-medium mr-1">
          Описание:
        </span>
        <span className="text-gray-color leading-relaxed">
          {movie.description || movie.shortDescription}
        </span>
      </li>
    </ul>
  );
};

export default observer(MovieDescription);
