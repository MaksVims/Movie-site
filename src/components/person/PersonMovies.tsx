import React, {FC} from 'react';
import BarSortFiltersPerson from "@/components/person/BarSortFiltersPerson";
import Link from "next/link";
import BoxDisplayCenter from "@/components/ui/BoxDisplayCenter";
import {MovieForGrid} from '@/factory/MovieForGrid';

interface PersonMoviesProps {
  filteredMovies: MovieForGrid[]
}

const PersonMovies: FC<PersonMoviesProps> = ({filteredMovies}) => {
  return (
    <section className="space-y-6 pb-6">
      <h2 className="text-center text-2xl font-medium">Список фильмов</h2>
      <BarSortFiltersPerson/>
      <div className="w-full">
        <ul
          className="space-y-2 relative max-h-[400px] max-w-xl pt-2 overflow-y-auto mx-auto custom-scrollbar pb-4">
          {filteredMovies.length ?
            filteredMovies.map((movie, idx) => (
              <Link key={movie.movieId} passHref href={`/movies/${movie.movieId}`}>
                <ul>
                  <a className="cursor-pointer hover:underline hover:text-grey-color">
                    {idx + 1}. {movie.nameRu}
                  </a>
                </ul>
              </Link>
            )) : (
              <BoxDisplayCenter title="Фильмов нет"/>
            )}
        </ul>
      </div>
    </section>
  );
};

export default PersonMovies;