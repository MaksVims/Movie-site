import React, {FC} from 'react';
import {IMovieByFilterOrTop} from "#/movieTypes";
import GridMovieItem from "@/components/home&genre/GridMovieItem";

interface IGridMovies {
  movies: IMovieByFilterOrTop[]
}

const GridMovies: FC<IGridMovies> = ({movies}) => {
  return (
    <section
      className="grid my-12 px-4 gap-y-6 gridMoviesXsGap grid-cols-1 xl:gap-6
      sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:px-6">
      {movies.map(movie => (
        <GridMovieItem
          key={movie.filmId}
          movie={movie}
        />
      ))}
    </section>
  );
};

export default GridMovies;