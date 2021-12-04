import React, {FC} from 'react';
import {IMovieByFilterOrTop} from "#/movieTypes";

interface IGridMovies {
  movies: IMovieByFilterOrTop[]
}

const GridMovies:FC<IGridMovies> = ({movies}) => {
  return (
    <section>
      {movies.map(movie => (
        <h1 key={movie.filmId}>{movie.nameRu}</h1>
      ))}
    </section>
  );
};

export default GridMovies;