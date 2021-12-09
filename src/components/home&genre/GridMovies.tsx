import React, {FC} from 'react';
import {IMovieForGrid} from "#/movieTypes";
import GridMovieCard from "@/components/home&genre/GridMovieCard";
import {useAuth} from "@/contexts/AuthContext";
import GridMovieCardNoAuth from "@/components/home&genre/GridMovieCardNoAuth";

interface IGridMovies {
  movies: IMovieForGrid[]
}

const GridMovies: FC<IGridMovies> = ({movies}) => {
  const {user} = useAuth()

  const GridItem = user ? GridMovieCard : GridMovieCardNoAuth

  return (
    <section
      className="grid my-12 px-4 gap-y-6 xs:gap-x-4 grid-cols-1
      xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:px-6">
      {movies.map(movie => (
        <GridItem
          key={movie.movieId}
          movie={movie}
        />
      ))}
    </section>
  );
};

export default GridMovies;