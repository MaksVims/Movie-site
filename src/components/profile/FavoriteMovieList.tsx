import React, {FC} from 'react';
import {IMovie} from "#/movieTypes";
import FavoriteMovieListItem from "@/components/profile/FavoriteMovieListItem";

interface FavoriteMovieListProps {
  title: string,
  movies: IMovie[],
  classNames?: string
}

const FavoriteMovieList: FC<FavoriteMovieListProps> = ({title, movies, classNames}) => {
  return (
    <div className={`overflow-x-auto ${classNames}`}>
      <h2 className="font-semibold text-xl text-lg mb-2">{title}</h2>
      <ul role="list">
        {
          movies.map(movie => (
            <FavoriteMovieListItem
              key={movie.kinopoiskId}
              movie={movie}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default FavoriteMovieList;