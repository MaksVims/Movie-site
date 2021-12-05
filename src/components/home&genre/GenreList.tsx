import React, {FC} from 'react';
import {IFilterGenre} from "#/filtersTypes";
import GenreItem from "@/components/home&genre/GenreItem";

interface IGenreList {
  genres: IFilterGenre[]
}

const GenreList: FC<IGenreList> = ({genres}) => {
  return (
    <div className="relative">
      <ul className="pt-4 px-8 flex xl:space-x-16 space-x-10 overflow-x-scroll scrollbar-hide ">
        {genres.map(genre => (
          <GenreItem
            key={genre.id}
            item={genre}
          />
        ))}
      </ul>
      <div className="absolute right-0 top-0 h-14 w-1/12 bg-gradient-to-l from-primary"></div>
    </div>
  );
};

export default GenreList;