import React, {FC} from 'react';
import {IMovieForGrid} from "#/movieTypes";
import GridMovieCard from "@/components/main/GridMovieCard";

interface IGridMovies {
  movies: IMovieForGrid[]
}

const GridMovies: FC<IGridMovies> = ({movies}) => {

  return (
    <section
      className="grid my-12 px-4 gap-y-6 xsss:gap-x-4 grid-cols-1 xsss:grid-cols-2
      xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 2xl:grid-cols-10 xl:px-6">
      {movies.map(movie => (
        <GridMovieCard
          key={movie.movieId}
          movie={movie}
        />
      ))}
    </section>
  );
};

export default GridMovies;